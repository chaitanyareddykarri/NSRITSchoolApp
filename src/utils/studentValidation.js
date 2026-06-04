import {isValidPredefinedClass} from '../config/academic';
import {normalizePhoneNumber} from './phone';

export const validateStudentPayload = payload => {
  if (!payload.fullName?.trim()) {
    return 'Student name is required';
  }

  if (!payload.parentName?.trim()) {
    return 'Parent name is required';
  }

  if (normalizePhoneNumber(payload.parentPhoneNumber).length < 10) {
    return 'Valid parent phone number is required';
  }

  if (!isValidPredefinedClass(payload.className)) {
    return 'Select a valid predefined class';
  }

  if (!payload.branchId) {
    return 'Branch is required';
  }

  if (!payload.branchCode) {
    return 'Branch code is required';
  }

  if (!payload.academicClassId) {
    return 'Class ID is required';
  }

  if (!payload.sectionId && !payload.sectionName) {
    return 'Section is required';
  }

  if (!payload.admissionYear) {
    return 'Admission year is required';
  }

  return '';
};
