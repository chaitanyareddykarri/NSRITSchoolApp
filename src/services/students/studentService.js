import {DATA_CONNECT_MUTATIONS, DATA_CONNECT_QUERIES} from '../dataconnect/operations';
import dataConnectClient from '../dataconnect/dataConnectClient';
import {applyRoleFilter} from '../rbacScope';
import {buildStudentIdPayload} from '../../utils/studentIdGenerator';
import {validateStudentPayload} from '../../utils/studentValidation';
import parentService from '../parents/parentService';

const toStudentMutationPayload = payload => ({
  studentId: payload.studentId,
  admissionYear: Number(payload.admissionYear),
  branchCode: payload.branchCode,
  serialNumber: Number(payload.serialNumber),
  fullName: payload.fullName,
  gender: payload.gender || null,
  dateOfBirth: payload.dateOfBirth || null,
  branchId: payload.branchId,
  wingId: payload.wingId || null,
  academicClassId: payload.academicClassId,
  sectionId: payload.sectionId,
  parentId: payload.parentId,
  countryCode: payload.countryCode || '+91',
  phoneNumber: payload.phoneNumber || payload.parentPhoneNumber || null,
  address: payload.address || null,
  admissionDate: payload.admissionDate,
});

export const studentService = {
  async getStudentsByBranch(branchId, options = {}) {
    if (!branchId) {
      return [];
    }

    const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_STUDENTS_BY_BRANCH, {
      branchId,
      limit: options.limit || 50,
      offset: options.offset || 0,
    });
    return response.students || [];
  },

  async getStudentsBySection(sectionId, options = {}) {
    if (!sectionId) {
      return [];
    }

    const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_STUDENTS_BY_SECTION, {
      sectionId,
      limit: options.limit || 50,
      offset: options.offset || 0,
    });
    return response.students || [];
  },

  async searchStudents({branchId, searchText, limit = 25}, scope) {
    if (!branchId || !searchText?.trim()) {
      return [];
    }

    const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.SEARCH_STUDENTS, {
      branchId,
      searchText: searchText.trim(),
      limit,
    });

    return applyRoleFilter(response.students || [], scope);
  },

  async getStudentsForRole(scope, options = {}) {
    if (scope?.sectionId) {
      return this.getStudentsBySection(scope.sectionId, options);
    }

    const branchStudents = await this.getStudentsByBranch(scope?.branchId, options);
    return applyRoleFilter(branchStudents, scope);
  },

  async getNextStudentIdSeed({admissionYear, branchCode}) {
    const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_STUDENT_ID_SEQUENCE, {
      admissionYear: Number(admissionYear),
      branchCode,
    });
    const sequence = response.studentIdSequences?.[0];

    return buildStudentIdPayload({
      admissionYear,
      branchCode,
      lastSerialNumber: sequence?.lastSerialNumber || 0,
    });
  },

  async createStudent(payload) {
    const validationError = validateStudentPayload(payload);
    if (validationError) {
      throw new Error(validationError);
    }

    const idPayload =
      payload.studentId && payload.serialNumber
        ? payload
        : await this.getNextStudentIdSeed({
            admissionYear: payload.admissionYear,
            branchCode: payload.branchCode,
          });

    const parentId =
      payload.parentId ||
      (
        await parentService.createParent({
          branchId: payload.branchId,
          fullName: payload.parentName,
          countryCode: payload.countryCode || '+91',
          phoneNumber: payload.parentPhoneNumber,
          address: payload.address || null,
        })
      ).id;

    const mutationPayload = toStudentMutationPayload({
      ...payload,
      ...idPayload,
      parentId,
    });

    const response = await dataConnectClient.mutate(
      DATA_CONNECT_MUTATIONS.CREATE_STUDENT,
      mutationPayload,
    );

    return {
      id: response.student_insert,
      ...payload,
      ...idPayload,
      parentId,
      isActive: true,
    };
  },
};

export default studentService;
