import {DATA_CONNECT_MUTATIONS, DATA_CONNECT_QUERIES} from '../dataconnect/operations';
import dataConnectClient from '../dataconnect/dataConnectClient';
import {applyRoleFilter} from '../rbacScope';
import {buildStudentIdPayload} from '../../utils/studentIdGenerator';

const demoStudents = [
  {
    id: 'student-1',
    studentId: '2026010001',
    admissionYear: 2026,
    branchCode: '01',
    serialNumber: 1,
    fullName: 'Aarav Kumar',
    branchId: 'demo-branch',
    wingId: 'demo-wing',
    academicClassId: 'class-1',
    sectionId: 'section-a',
    parentId: 'demo-parent',
    phoneNumber: '+919999990006',
    admissionDate: '2026-04-01',
    isActive: true,
  },
];

export const studentService = {
  async getStudentsByBranch(branchId, options = {}) {
    try {
      const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_STUDENTS_BY_BRANCH, {
        branchId,
        limit: options.limit || 50,
        offset: options.offset || 0,
      });
      return response.students || [];
    } catch (error) {
      return demoStudents.filter(item => !branchId || item.branchId === branchId);
    }
  },

  async getStudentsBySection(sectionId, options = {}) {
    try {
      const response = await dataConnectClient.query(DATA_CONNECT_QUERIES.GET_STUDENTS_BY_SECTION, {
        sectionId,
        limit: options.limit || 50,
        offset: options.offset || 0,
      });
      return response.students || [];
    } catch (error) {
      return demoStudents.filter(item => !sectionId || item.sectionId === sectionId);
    }
  },

  async getStudentsForRole(scope) {
    const branchStudents = await this.getStudentsByBranch(scope?.branchId);
    return applyRoleFilter(branchStudents, scope);
  },

  async createStudent(payload) {
    const idPayload =
      payload.studentId && payload.serialNumber
        ? payload
        : buildStudentIdPayload({
            admissionYear: payload.admissionYear,
            branchCode: payload.branchCode,
            lastSerialNumber: payload.lastSerialNumber,
          });

    try {
      const response = await dataConnectClient.mutate(DATA_CONNECT_MUTATIONS.CREATE_STUDENT, {
        ...payload,
        ...idPayload,
      });
      return {id: response.student_insert, ...payload, ...idPayload, isActive: true};
    } catch (error) {
      return {
        id: `student-${Date.now()}`,
        ...payload,
        ...idPayload,
        isActive: true,
      };
    }
  },
};

export default studentService;
