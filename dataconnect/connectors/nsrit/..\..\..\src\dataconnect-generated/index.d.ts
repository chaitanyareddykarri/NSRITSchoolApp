import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AcademicClass_Key {
  id: UUIDString;
  __typename?: 'AcademicClass_Key';
}

export interface AssignBranchAdminData {
  branch_update?: Branch_Key | null;
}

export interface AssignBranchAdminVariables {
  branchId: UUIDString;
  branchAdminId: UUIDString;
}

export interface AssignPrincipalData {
  branch_update?: Branch_Key | null;
}

export interface AssignPrincipalVariables {
  branchId: UUIDString;
  principalId: UUIDString;
}

export interface AssignTeacherData {
  teacherAssignment_insert: TeacherAssignment_Key;
}

export interface AssignTeacherVariables {
  teacherId: UUIDString;
  branchId: UUIDString;
  wingId: UUIDString;
  academicClassId: UUIDString;
  sectionId: UUIDString;
  subjectName?: string | null;
  isClassTeacher: boolean;
}

export interface Attendance_Key {
  id: UUIDString;
  __typename?: 'Attendance_Key';
}

export interface Branch_Key {
  id: UUIDString;
  __typename?: 'Branch_Key';
}

export interface ClaimUserFirebaseUidData {
  user_update?: User_Key | null;
}

export interface ClaimUserFirebaseUidVariables {
  id: UUIDString;
}

export interface CreateAttendanceData {
  attendance_insert: Attendance_Key;
}

export interface CreateAttendanceVariables {
  studentId: UUIDString;
  academicClassId: UUIDString;
  sectionId: UUIDString;
  attendanceDate: DateString;
  status: string;
  markedById: UUIDString;
  remarks?: string | null;
}

export interface CreateBranchData {
  branch_insert: Branch_Key;
}

export interface CreateBranchVariables {
  name: string;
  branchCode: string;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  pincode?: string | null;
  phone?: string | null;
  email?: string | null;
  status?: string | null;
}

export interface CreateClassData {
  academicClass_insert: AcademicClass_Key;
}

export interface CreateClassVariables {
  branchId: UUIDString;
  wingId: UUIDString;
  name: string;
  displayOrder?: number | null;
}

export interface CreateParentData {
  parent_insert: Parent_Key;
}

export interface CreateParentVariables {
  userId?: UUIDString | null;
  branchId: UUIDString;
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  address?: string | null;
}

export interface CreateParentWithoutUserData {
  parent_insert: Parent_Key;
}

export interface CreateParentWithoutUserVariables {
  branchId: UUIDString;
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  address?: string | null;
}

export interface CreateSectionData {
  section_insert: Section_Key;
}

export interface CreateSectionVariables {
  branchId: UUIDString;
  wingId: UUIDString;
  academicClassId: UUIDString;
  name: string;
}

export interface CreateStudentData {
  studentIdSequence_upsert: StudentIdSequence_Key;
  student_insert: Student_Key;
}

export interface CreateStudentVariables {
  studentId: string;
  admissionYear: number;
  branchCode: string;
  serialNumber: number;
  fullName: string;
  gender?: string | null;
  dateOfBirth?: DateString | null;
  branchId: UUIDString;
  wingId?: UUIDString | null;
  academicClassId: UUIDString;
  sectionId: UUIDString;
  parentId: UUIDString;
  countryCode?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  admissionDate: DateString;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  firebaseUID: string;
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  role: string;
  branchId?: UUIDString | null;
  wingId?: UUIDString | null;
}

export interface DueTracking_Key {
  id: UUIDString;
  __typename?: 'DueTracking_Key';
}

export interface FeeStructure_Key {
  id: UUIDString;
  __typename?: 'FeeStructure_Key';
}

export interface GetAllFeeRecordsData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    feeStructureId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    student: {
      id: UUIDString;
      studentId: string;
      fullName: string;
      branchId: UUIDString;
      wingId?: UUIDString | null;
      academicClassId: UUIDString;
      sectionId: UUIDString;
      parentId: UUIDString;
      phoneNumber?: string | null;
    } & Student_Key;
  } & StudentFee_Key)[];
}

export interface GetAllFeeRecordsVariables {
  limit?: number | null;
  offset?: number | null;
}

export interface GetAssignmentConflictsData {
  branchAdminBranches: ({
    id: UUIDString;
    name: string;
    branchCode: string;
  } & Branch_Key)[];
  principalBranches: ({
    id: UUIDString;
    name: string;
    branchCode: string;
  } & Branch_Key)[];
}

export interface GetAssignmentConflictsVariables {
  userId: UUIDString;
}

export interface GetAttendanceByMonthData {
  attendances: ({
    id: UUIDString;
    studentId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    attendanceDate: DateString;
    status: string;
    markedById: UUIDString;
    editedById?: UUIDString | null;
    remarks?: string | null;
    createdAt: TimestampString;
  } & Attendance_Key)[];
}

export interface GetAttendanceByMonthVariables {
  studentId: UUIDString;
  fromDate: DateString;
  toDate: DateString;
}

export interface GetAttendanceBySectionData {
  attendances: ({
    id: UUIDString;
    studentId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    attendanceDate: DateString;
    status: string;
    markedById: UUIDString;
    editedById?: UUIDString | null;
    remarks?: string | null;
  } & Attendance_Key)[];
}

export interface GetAttendanceBySectionVariables {
  sectionId: UUIDString;
  attendanceDate: DateString;
}

export interface GetBranchAnalyticsData {
  students: ({
    id: UUIDString;
  } & Student_Key)[];
  attendances: ({
    id: UUIDString;
    status: string;
  } & Attendance_Key)[];
  studentFees: ({
    id: UUIDString;
    paidAmount: number;
    remainingAmount: number;
  } & StudentFee_Key)[];
}

export interface GetBranchAnalyticsVariables {
  branchId: UUIDString;
}

export interface GetBranchDetailsData {
  branch?: {
    id: UUIDString;
    name: string;
    branchCode: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    phone?: string | null;
    email?: string | null;
    status: string;
    branchAdminId?: UUIDString | null;
    principalId?: UUIDString | null;
    isActive: boolean;
    branchAdmin?: {
      id: UUIDString;
      fullName: string;
      phoneNumber: string;
      role: string;
      isActive: boolean;
    } & User_Key;
    principal?: {
      id: UUIDString;
      fullName: string;
      phoneNumber: string;
      role: string;
      isActive: boolean;
    } & User_Key;
  } & Branch_Key;
  academicClasses: ({
    id: UUIDString;
    branchId: UUIDString;
    wingId: UUIDString;
    name: string;
    displayOrder?: number | null;
    isActive: boolean;
  } & AcademicClass_Key)[];
  sections: ({
    id: UUIDString;
    branchId: UUIDString;
    wingId: UUIDString;
    academicClassId: UUIDString;
    name: string;
    isActive: boolean;
    academicClass: {
      id: UUIDString;
      name: string;
    } & AcademicClass_Key;
  } & Section_Key)[];
  students: ({
    id: UUIDString;
    studentId: string;
    fullName: string;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    isActive: boolean;
  } & Student_Key)[];
  users: ({
    id: UUIDString;
    fullName: string;
    phoneNumber: string;
    role: string;
    branchId?: UUIDString | null;
    isActive: boolean;
  } & User_Key)[];
  teacherAssignments: ({
    id: UUIDString;
    teacherId: UUIDString;
    sectionId: UUIDString;
    isClassTeacher: boolean;
    teacher: {
      id: UUIDString;
      fullName: string;
      phoneNumber: string;
      role: string;
    } & User_Key;
  } & TeacherAssignment_Key)[];
  attendances: ({
    id: UUIDString;
    status: string;
    attendanceDate: DateString;
  } & Attendance_Key)[];
  studentFees: ({
    id: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
  } & StudentFee_Key)[];
}

export interface GetBranchDetailsVariables {
  branchId: UUIDString;
}

export interface GetBranchesData {
  branches: ({
    id: UUIDString;
    name: string;
    branchCode: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    phone?: string | null;
    email?: string | null;
    status: string;
    branchAdminId?: UUIDString | null;
    principalId?: UUIDString | null;
    branchAdmin?: {
      id: UUIDString;
      fullName: string;
      phoneNumber: string;
      role: string;
      isActive: boolean;
    } & User_Key;
    principal?: {
      id: UUIDString;
      fullName: string;
      phoneNumber: string;
      role: string;
      isActive: boolean;
    } & User_Key;
    isActive: boolean;
  } & Branch_Key)[];
}

export interface GetBranchesVariables {
  limit?: number | null;
  offset?: number | null;
}

export interface GetClassAnalyticsData {
  students: ({
    id: UUIDString;
  } & Student_Key)[];
  attendances: ({
    id: UUIDString;
    status: string;
  } & Attendance_Key)[];
  studentFees: ({
    id: UUIDString;
    paidAmount: number;
    remainingAmount: number;
  } & StudentFee_Key)[];
}

export interface GetClassAnalyticsVariables {
  academicClassId: UUIDString;
}

export interface GetClassDetailsData {
  section?: {
    id: UUIDString;
    branchId: UUIDString;
    academicClassId: UUIDString;
    name: string;
    isActive: boolean;
    branch: {
      id: UUIDString;
      name: string;
      branchCode: string;
    } & Branch_Key;
    academicClass: {
      id: UUIDString;
      name: string;
      displayOrder?: number | null;
    } & AcademicClass_Key;
  } & Section_Key;
  students: ({
    id: UUIDString;
    studentId: string;
    fullName: string;
    gender?: string | null;
    phoneNumber?: string | null;
    rollNumber?: string | null;
    isActive: boolean;
  } & Student_Key)[];
  teacherAssignments: ({
    id: UUIDString;
    teacherId: UUIDString;
    subjectName?: string | null;
    isClassTeacher: boolean;
    teacher: {
      id: UUIDString;
      fullName: string;
      phoneNumber: string;
      role: string;
    } & User_Key;
  } & TeacherAssignment_Key)[];
  attendances: ({
    id: UUIDString;
    studentId: UUIDString;
    attendanceDate: DateString;
    status: string;
    remarks?: string | null;
  } & Attendance_Key)[];
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
  } & StudentFee_Key)[];
}

export interface GetClassDetailsVariables {
  sectionId: UUIDString;
}

export interface GetClassesByWingData {
  academicClasses: ({
    id: UUIDString;
    branchId: UUIDString;
    wingId: UUIDString;
    name: string;
    displayOrder?: number | null;
    isActive: boolean;
  } & AcademicClass_Key)[];
}

export interface GetClassesByWingVariables {
  wingId: UUIDString;
}

export interface GetCurrentUserData {
  users: ({
    id: UUIDString;
    firebaseUID: string;
    fullName: string;
    countryCode: string;
    phoneNumber: string;
    role: string;
    branchId?: UUIDString | null;
    wingId?: UUIDString | null;
    isActive: boolean;
  } & User_Key)[];
}

export interface GetCurrentUserVariables {
  firebaseUID: string;
}

export interface GetDashboardStatisticsData {
  branches: ({
    id: UUIDString;
    isActive: boolean;
    status: string;
  } & Branch_Key)[];
  academicClasses: ({
    id: UUIDString;
    branchId: UUIDString;
    isActive: boolean;
  } & AcademicClass_Key)[];
  users: ({
    id: UUIDString;
    branchId?: UUIDString | null;
    role: string;
  } & User_Key)[];
  students: ({
    id: UUIDString;
    branchId: UUIDString;
  } & Student_Key)[];
  attendances: ({
    id: UUIDString;
    status: string;
    attendanceDate: DateString;
  } & Attendance_Key)[];
  studentFees: ({
    id: UUIDString;
    remainingAmount: number;
  } & StudentFee_Key)[];
}

export interface GetDueStudentsData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    student: {
      id: UUIDString;
      studentId: string;
      fullName: string;
      branchId: UUIDString;
      wingId?: UUIDString | null;
      sectionId: UUIDString;
    } & Student_Key;
  } & StudentFee_Key)[];
}

export interface GetDueStudentsVariables {
  branchId: UUIDString;
}

export interface GetFeeDetailsData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    feeStructureId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    updatedAt: TimestampString;
  } & StudentFee_Key)[];
  payments: ({
    id: UUIDString;
    studentId: UUIDString;
    studentFeeId: UUIDString;
    amount: number;
    paymentMode: string;
    receiptNumber?: string | null;
    uploadedById: UUIDString;
    remarks?: string | null;
    paidAt: TimestampString;
  } & Payment_Key)[];
}

export interface GetFeeDetailsVariables {
  studentId: UUIDString;
}

export interface GetFeeRecordsByBranchData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    feeStructureId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    student: {
      id: UUIDString;
      studentId: string;
      fullName: string;
      branchId: UUIDString;
      wingId?: UUIDString | null;
      academicClassId: UUIDString;
      sectionId: UUIDString;
      parentId: UUIDString;
      phoneNumber?: string | null;
    } & Student_Key;
  } & StudentFee_Key)[];
}

export interface GetFeeRecordsByBranchVariables {
  branchId: UUIDString;
}

export interface GetGlobalClassesData {
  sections: ({
    id: UUIDString;
    branchId: UUIDString;
    academicClassId: UUIDString;
    name: string;
    isActive: boolean;
    branch: {
      id: UUIDString;
      name: string;
      branchCode: string;
      status: string;
      isActive: boolean;
    } & Branch_Key;
    academicClass: {
      id: UUIDString;
      name: string;
      displayOrder?: number | null;
    } & AcademicClass_Key;
  } & Section_Key)[];
  students: ({
    id: UUIDString;
    branchId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    isActive: boolean;
  } & Student_Key)[];
  teacherAssignments: ({
    id: UUIDString;
    teacherId: UUIDString;
    sectionId: UUIDString;
    isClassTeacher: boolean;
    teacher: {
      id: UUIDString;
      fullName: string;
      phoneNumber: string;
      role: string;
    } & User_Key;
  } & TeacherAssignment_Key)[];
  attendances: ({
    id: UUIDString;
    sectionId: UUIDString;
    status: string;
  } & Attendance_Key)[];
  studentFees: ({
    id: UUIDString;
    paidAmount: number;
    remainingAmount: number;
    student: {
      id: UUIDString;
      sectionId: UUIDString;
    } & Student_Key;
  } & StudentFee_Key)[];
}

export interface GetGlobalClassesVariables {
  limit?: number | null;
  offset?: number | null;
}

export interface GetGlobalStudentsData {
  students: ({
    id: UUIDString;
    studentId: string;
    fullName: string;
    gender?: string | null;
    dateOfBirth?: DateString | null;
    bloodGroup?: string | null;
    rollNumber?: string | null;
    branchId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    admissionDate: DateString;
    isActive: boolean;
    branch: {
      id: UUIDString;
      name: string;
      branchCode: string;
    } & Branch_Key;
    academicClass: {
      id: UUIDString;
      name: string;
    } & AcademicClass_Key;
    section: {
      id: UUIDString;
      name: string;
    } & Section_Key;
    parent: {
      id: UUIDString;
      fullName: string;
      fatherName?: string | null;
      motherName?: string | null;
      phoneNumber: string;
      email?: string | null;
    } & Parent_Key;
  } & Student_Key)[];
  attendances: ({
    id: UUIDString;
    studentId: UUIDString;
    status: string;
  } & Attendance_Key)[];
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    paidAmount: number;
    remainingAmount: number;
    status: string;
  } & StudentFee_Key)[];
}

export interface GetGlobalStudentsVariables {
  limit?: number | null;
  offset?: number | null;
}

export interface GetPaidStudentsData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    student: {
      id: UUIDString;
      studentId: string;
      fullName: string;
      branchId: UUIDString;
      wingId?: UUIDString | null;
      sectionId: UUIDString;
    } & Student_Key;
  } & StudentFee_Key)[];
}

export interface GetPaidStudentsVariables {
  branchId: UUIDString;
}

export interface GetParentByUserData {
  parents: ({
    id: UUIDString;
    userId?: UUIDString | null;
    branchId: UUIDString;
    fullName: string;
    countryCode: string;
    phoneNumber: string;
    address?: string | null;
    isActive: boolean;
  } & Parent_Key)[];
}

export interface GetParentByUserVariables {
  userId: UUIDString;
}

export interface GetParentChildrenData {
  students: ({
    id: UUIDString;
    studentId: string;
    fullName: string;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    admissionYear: number;
    branchCode: string;
    admissionDate: DateString;
  } & Student_Key)[];
}

export interface GetParentChildrenVariables {
  parentId: UUIDString;
}

export interface GetSectionsByClassData {
  sections: ({
    id: UUIDString;
    branchId: UUIDString;
    wingId: UUIDString;
    academicClassId: UUIDString;
    name: string;
    isActive: boolean;
  } & Section_Key)[];
}

export interface GetSectionsByClassVariables {
  academicClassId: UUIDString;
}

export interface GetStudentAttendanceData {
  attendances: ({
    id: UUIDString;
    attendanceDate: DateString;
    status: string;
    remarks?: string | null;
  } & Attendance_Key)[];
}

export interface GetStudentAttendanceVariables {
  studentId: UUIDString;
}

export interface GetStudentFeeHistoryData {
  studentFees: ({
    id: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
  } & StudentFee_Key)[];
  payments: ({
    id: UUIDString;
    studentFeeId: UUIDString;
    amount: number;
    paymentMode: string;
    receiptNumber?: string | null;
    remarks?: string | null;
    paidAt: TimestampString;
  } & Payment_Key)[];
}

export interface GetStudentFeeHistoryVariables {
  studentId: UUIDString;
}

export interface GetStudentIdSequenceData {
  studentIdSequences: ({
    admissionYear: number;
    branchCode: string;
    lastSerialNumber: number;
  } & StudentIdSequence_Key)[];
}

export interface GetStudentIdSequenceVariables {
  admissionYear: number;
  branchCode: string;
}

export interface GetStudentProfileData {
  student?: {
    id: UUIDString;
    studentId: string;
    fullName: string;
    gender?: string | null;
    dateOfBirth?: DateString | null;
    photoUrl?: string | null;
    bloodGroup?: string | null;
    rollNumber?: string | null;
    branchId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    address?: string | null;
    aadhaarDocumentUrl?: string | null;
    transferCertificateUrl?: string | null;
    birthCertificateUrl?: string | null;
    admissionDate: DateString;
    isActive: boolean;
    branch: {
      id: UUIDString;
      name: string;
      branchCode: string;
    } & Branch_Key;
    academicClass: {
      id: UUIDString;
      name: string;
    } & AcademicClass_Key;
    section: {
      id: UUIDString;
      name: string;
    } & Section_Key;
    parent: {
      id: UUIDString;
      fullName: string;
      fatherName?: string | null;
      motherName?: string | null;
      countryCode: string;
      phoneNumber: string;
      email?: string | null;
      address?: string | null;
    } & Parent_Key;
  } & Student_Key;
  attendances: ({
    id: UUIDString;
    attendanceDate: DateString;
    status: string;
    remarks?: string | null;
  } & Attendance_Key)[];
  studentFees: ({
    id: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
  } & StudentFee_Key)[];
  payments: ({
    id: UUIDString;
    studentFeeId: UUIDString;
    amount: number;
    paymentMode: string;
    receiptNumber?: string | null;
    uploadedById: UUIDString;
    remarks?: string | null;
    paidAt: TimestampString;
  } & Payment_Key)[];
}

export interface GetStudentProfileVariables {
  studentId: UUIDString;
}

export interface GetStudentsByBranchData {
  students: ({
    id: UUIDString;
    studentId: string;
    admissionYear: number;
    branchCode: string;
    serialNumber: number;
    fullName: string;
    gender?: string | null;
    dateOfBirth?: DateString | null;
    branchId: UUIDString;
    wingId?: UUIDString | null;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    address?: string | null;
    admissionDate: DateString;
    isActive: boolean;
  } & Student_Key)[];
}

export interface GetStudentsByBranchVariables {
  branchId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}

export interface GetStudentsBySectionData {
  students: ({
    id: UUIDString;
    studentId: string;
    fullName: string;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    admissionDate: DateString;
    isActive: boolean;
  } & Student_Key)[];
}

export interface GetStudentsBySectionVariables {
  sectionId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}

export interface GetTeacherAssignmentsData {
  teacherAssignments: ({
    id: UUIDString;
    teacherId: UUIDString;
    branchId: UUIDString;
    wingId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    subjectName?: string | null;
    isClassTeacher: boolean;
  } & TeacherAssignment_Key)[];
}

export interface GetTeacherAssignmentsVariables {
  teacherId: UUIDString;
}

export interface GetUserByPhoneData {
  users: ({
    id: UUIDString;
    firebaseUID: string;
    fullName: string;
    countryCode: string;
    phoneNumber: string;
    role: string;
    branchId?: UUIDString | null;
    wingId?: UUIDString | null;
    isActive: boolean;
  } & User_Key)[];
}

export interface GetUserByPhoneVariables {
  phoneNumber: string;
}

export interface GetUsersByRoleData {
  users: ({
    id: UUIDString;
    fullName: string;
    phoneNumber: string;
    role: string;
    branchId?: UUIDString | null;
    isActive: boolean;
  } & User_Key)[];
}

export interface GetUsersByRoleVariables {
  role: string;
  alternateRole: string;
  searchText: string;
  limit?: number | null;
}

export interface GetWingsByBranchData {
  wings: ({
    id: UUIDString;
    branchId: UUIDString;
    name: string;
    code?: string | null;
    isActive: boolean;
  } & Wing_Key)[];
}

export interface GetWingsByBranchVariables {
  branchId: UUIDString;
}

export interface Notification_Key {
  id: UUIDString;
  __typename?: 'Notification_Key';
}

export interface Parent_Key {
  id: UUIDString;
  __typename?: 'Parent_Key';
}

export interface Payment_Key {
  id: UUIDString;
  __typename?: 'Payment_Key';
}

export interface RemoveSectionData {
  section_update?: Section_Key | null;
}

export interface RemoveSectionVariables {
  id: UUIDString;
}

export interface SearchStudentsData {
  students: ({
    id: UUIDString;
    studentId: string;
    fullName: string;
    branchId: UUIDString;
    wingId?: UUIDString | null;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    admissionDate: DateString;
  } & Student_Key)[];
}

export interface SearchStudentsVariables {
  branchId: UUIDString;
  searchText: string;
  limit?: number | null;
}

export interface Section_Key {
  id: UUIDString;
  __typename?: 'Section_Key';
}

export interface StudentFee_Key {
  id: UUIDString;
  __typename?: 'StudentFee_Key';
}

export interface StudentIdSequence_Key {
  admissionYear: number;
  branchCode: string;
  __typename?: 'StudentIdSequence_Key';
}

export interface Student_Key {
  id: UUIDString;
  __typename?: 'Student_Key';
}

export interface Suggestion_Key {
  id: UUIDString;
  __typename?: 'Suggestion_Key';
}

export interface TeacherAssignment_Key {
  id: UUIDString;
  __typename?: 'TeacherAssignment_Key';
}

export interface UpdateAttendanceData {
  attendance_update?: Attendance_Key | null;
}

export interface UpdateAttendanceVariables {
  id: UUIDString;
  status: string;
  editedById: UUIDString;
  remarks?: string | null;
}

export interface UpdateBranchData {
  branch_update?: Branch_Key | null;
}

export interface UpdateBranchVariables {
  id: UUIDString;
  name: string;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  pincode?: string | null;
  phone?: string | null;
  email?: string | null;
  status: string;
  isActive: boolean;
}

export interface UploadFeePaymentData {
  payment_insert: Payment_Key;
}

export interface UploadFeePaymentVariables {
  studentId: UUIDString;
  studentFeeId: UUIDString;
  amount: number;
  paymentMode: string;
  receiptNumber?: string | null;
  uploadedById: UUIDString;
  remarks?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface Wing_Key {
  id: UUIDString;
  __typename?: 'Wing_Key';
}

interface CreateBranchRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateBranchVariables): MutationRef<CreateBranchData, CreateBranchVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateBranchVariables): MutationRef<CreateBranchData, CreateBranchVariables>;
  operationName: string;
}
export const createBranchRef: CreateBranchRef;

export function createBranch(vars: CreateBranchVariables): MutationPromise<CreateBranchData, CreateBranchVariables>;
export function createBranch(dc: DataConnect, vars: CreateBranchVariables): MutationPromise<CreateBranchData, CreateBranchVariables>;

interface UpdateBranchRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateBranchVariables): MutationRef<UpdateBranchData, UpdateBranchVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateBranchVariables): MutationRef<UpdateBranchData, UpdateBranchVariables>;
  operationName: string;
}
export const updateBranchRef: UpdateBranchRef;

export function updateBranch(vars: UpdateBranchVariables): MutationPromise<UpdateBranchData, UpdateBranchVariables>;
export function updateBranch(dc: DataConnect, vars: UpdateBranchVariables): MutationPromise<UpdateBranchData, UpdateBranchVariables>;

interface AssignBranchAdminRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignBranchAdminVariables): MutationRef<AssignBranchAdminData, AssignBranchAdminVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AssignBranchAdminVariables): MutationRef<AssignBranchAdminData, AssignBranchAdminVariables>;
  operationName: string;
}
export const assignBranchAdminRef: AssignBranchAdminRef;

export function assignBranchAdmin(vars: AssignBranchAdminVariables): MutationPromise<AssignBranchAdminData, AssignBranchAdminVariables>;
export function assignBranchAdmin(dc: DataConnect, vars: AssignBranchAdminVariables): MutationPromise<AssignBranchAdminData, AssignBranchAdminVariables>;

interface AssignPrincipalRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignPrincipalVariables): MutationRef<AssignPrincipalData, AssignPrincipalVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AssignPrincipalVariables): MutationRef<AssignPrincipalData, AssignPrincipalVariables>;
  operationName: string;
}
export const assignPrincipalRef: AssignPrincipalRef;

export function assignPrincipal(vars: AssignPrincipalVariables): MutationPromise<AssignPrincipalData, AssignPrincipalVariables>;
export function assignPrincipal(dc: DataConnect, vars: AssignPrincipalVariables): MutationPromise<AssignPrincipalData, AssignPrincipalVariables>;

interface CreateClassRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClassVariables): MutationRef<CreateClassData, CreateClassVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateClassVariables): MutationRef<CreateClassData, CreateClassVariables>;
  operationName: string;
}
export const createClassRef: CreateClassRef;

export function createClass(vars: CreateClassVariables): MutationPromise<CreateClassData, CreateClassVariables>;
export function createClass(dc: DataConnect, vars: CreateClassVariables): MutationPromise<CreateClassData, CreateClassVariables>;

interface CreateSectionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSectionVariables): MutationRef<CreateSectionData, CreateSectionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateSectionVariables): MutationRef<CreateSectionData, CreateSectionVariables>;
  operationName: string;
}
export const createSectionRef: CreateSectionRef;

export function createSection(vars: CreateSectionVariables): MutationPromise<CreateSectionData, CreateSectionVariables>;
export function createSection(dc: DataConnect, vars: CreateSectionVariables): MutationPromise<CreateSectionData, CreateSectionVariables>;

interface RemoveSectionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemoveSectionVariables): MutationRef<RemoveSectionData, RemoveSectionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RemoveSectionVariables): MutationRef<RemoveSectionData, RemoveSectionVariables>;
  operationName: string;
}
export const removeSectionRef: RemoveSectionRef;

export function removeSection(vars: RemoveSectionVariables): MutationPromise<RemoveSectionData, RemoveSectionVariables>;
export function removeSection(dc: DataConnect, vars: RemoveSectionVariables): MutationPromise<RemoveSectionData, RemoveSectionVariables>;

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface ClaimUserFirebaseUidRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ClaimUserFirebaseUidVariables): MutationRef<ClaimUserFirebaseUidData, ClaimUserFirebaseUidVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ClaimUserFirebaseUidVariables): MutationRef<ClaimUserFirebaseUidData, ClaimUserFirebaseUidVariables>;
  operationName: string;
}
export const claimUserFirebaseUidRef: ClaimUserFirebaseUidRef;

export function claimUserFirebaseUid(vars: ClaimUserFirebaseUidVariables): MutationPromise<ClaimUserFirebaseUidData, ClaimUserFirebaseUidVariables>;
export function claimUserFirebaseUid(dc: DataConnect, vars: ClaimUserFirebaseUidVariables): MutationPromise<ClaimUserFirebaseUidData, ClaimUserFirebaseUidVariables>;

interface CreateParentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateParentVariables): MutationRef<CreateParentData, CreateParentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateParentVariables): MutationRef<CreateParentData, CreateParentVariables>;
  operationName: string;
}
export const createParentRef: CreateParentRef;

export function createParent(vars: CreateParentVariables): MutationPromise<CreateParentData, CreateParentVariables>;
export function createParent(dc: DataConnect, vars: CreateParentVariables): MutationPromise<CreateParentData, CreateParentVariables>;

interface CreateParentWithoutUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateParentWithoutUserVariables): MutationRef<CreateParentWithoutUserData, CreateParentWithoutUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateParentWithoutUserVariables): MutationRef<CreateParentWithoutUserData, CreateParentWithoutUserVariables>;
  operationName: string;
}
export const createParentWithoutUserRef: CreateParentWithoutUserRef;

export function createParentWithoutUser(vars: CreateParentWithoutUserVariables): MutationPromise<CreateParentWithoutUserData, CreateParentWithoutUserVariables>;
export function createParentWithoutUser(dc: DataConnect, vars: CreateParentWithoutUserVariables): MutationPromise<CreateParentWithoutUserData, CreateParentWithoutUserVariables>;

interface CreateStudentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateStudentVariables): MutationRef<CreateStudentData, CreateStudentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateStudentVariables): MutationRef<CreateStudentData, CreateStudentVariables>;
  operationName: string;
}
export const createStudentRef: CreateStudentRef;

export function createStudent(vars: CreateStudentVariables): MutationPromise<CreateStudentData, CreateStudentVariables>;
export function createStudent(dc: DataConnect, vars: CreateStudentVariables): MutationPromise<CreateStudentData, CreateStudentVariables>;

interface CreateAttendanceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateAttendanceVariables): MutationRef<CreateAttendanceData, CreateAttendanceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateAttendanceVariables): MutationRef<CreateAttendanceData, CreateAttendanceVariables>;
  operationName: string;
}
export const createAttendanceRef: CreateAttendanceRef;

export function createAttendance(vars: CreateAttendanceVariables): MutationPromise<CreateAttendanceData, CreateAttendanceVariables>;
export function createAttendance(dc: DataConnect, vars: CreateAttendanceVariables): MutationPromise<CreateAttendanceData, CreateAttendanceVariables>;

interface UpdateAttendanceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAttendanceVariables): MutationRef<UpdateAttendanceData, UpdateAttendanceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateAttendanceVariables): MutationRef<UpdateAttendanceData, UpdateAttendanceVariables>;
  operationName: string;
}
export const updateAttendanceRef: UpdateAttendanceRef;

export function updateAttendance(vars: UpdateAttendanceVariables): MutationPromise<UpdateAttendanceData, UpdateAttendanceVariables>;
export function updateAttendance(dc: DataConnect, vars: UpdateAttendanceVariables): MutationPromise<UpdateAttendanceData, UpdateAttendanceVariables>;

interface UploadFeePaymentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UploadFeePaymentVariables): MutationRef<UploadFeePaymentData, UploadFeePaymentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UploadFeePaymentVariables): MutationRef<UploadFeePaymentData, UploadFeePaymentVariables>;
  operationName: string;
}
export const uploadFeePaymentRef: UploadFeePaymentRef;

export function uploadFeePayment(vars: UploadFeePaymentVariables): MutationPromise<UploadFeePaymentData, UploadFeePaymentVariables>;
export function uploadFeePayment(dc: DataConnect, vars: UploadFeePaymentVariables): MutationPromise<UploadFeePaymentData, UploadFeePaymentVariables>;

interface AssignTeacherRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignTeacherVariables): MutationRef<AssignTeacherData, AssignTeacherVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AssignTeacherVariables): MutationRef<AssignTeacherData, AssignTeacherVariables>;
  operationName: string;
}
export const assignTeacherRef: AssignTeacherRef;

export function assignTeacher(vars: AssignTeacherVariables): MutationPromise<AssignTeacherData, AssignTeacherVariables>;
export function assignTeacher(dc: DataConnect, vars: AssignTeacherVariables): MutationPromise<AssignTeacherData, AssignTeacherVariables>;

interface GetCurrentUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCurrentUserVariables): QueryRef<GetCurrentUserData, GetCurrentUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCurrentUserVariables): QueryRef<GetCurrentUserData, GetCurrentUserVariables>;
  operationName: string;
}
export const getCurrentUserRef: GetCurrentUserRef;

export function getCurrentUser(vars: GetCurrentUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, GetCurrentUserVariables>;
export function getCurrentUser(dc: DataConnect, vars: GetCurrentUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, GetCurrentUserVariables>;

interface GetUserByPhoneRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserByPhoneVariables): QueryRef<GetUserByPhoneData, GetUserByPhoneVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserByPhoneVariables): QueryRef<GetUserByPhoneData, GetUserByPhoneVariables>;
  operationName: string;
}
export const getUserByPhoneRef: GetUserByPhoneRef;

export function getUserByPhone(vars: GetUserByPhoneVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserByPhoneData, GetUserByPhoneVariables>;
export function getUserByPhone(dc: DataConnect, vars: GetUserByPhoneVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserByPhoneData, GetUserByPhoneVariables>;

interface GetStudentsByBranchRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStudentsByBranchVariables): QueryRef<GetStudentsByBranchData, GetStudentsByBranchVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetStudentsByBranchVariables): QueryRef<GetStudentsByBranchData, GetStudentsByBranchVariables>;
  operationName: string;
}
export const getStudentsByBranchRef: GetStudentsByBranchRef;

export function getStudentsByBranch(vars: GetStudentsByBranchVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentsByBranchData, GetStudentsByBranchVariables>;
export function getStudentsByBranch(dc: DataConnect, vars: GetStudentsByBranchVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentsByBranchData, GetStudentsByBranchVariables>;

interface GetStudentsBySectionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStudentsBySectionVariables): QueryRef<GetStudentsBySectionData, GetStudentsBySectionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetStudentsBySectionVariables): QueryRef<GetStudentsBySectionData, GetStudentsBySectionVariables>;
  operationName: string;
}
export const getStudentsBySectionRef: GetStudentsBySectionRef;

export function getStudentsBySection(vars: GetStudentsBySectionVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentsBySectionData, GetStudentsBySectionVariables>;
export function getStudentsBySection(dc: DataConnect, vars: GetStudentsBySectionVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentsBySectionData, GetStudentsBySectionVariables>;

interface GetParentChildrenRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetParentChildrenVariables): QueryRef<GetParentChildrenData, GetParentChildrenVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetParentChildrenVariables): QueryRef<GetParentChildrenData, GetParentChildrenVariables>;
  operationName: string;
}
export const getParentChildrenRef: GetParentChildrenRef;

export function getParentChildren(vars: GetParentChildrenVariables, options?: ExecuteQueryOptions): QueryPromise<GetParentChildrenData, GetParentChildrenVariables>;
export function getParentChildren(dc: DataConnect, vars: GetParentChildrenVariables, options?: ExecuteQueryOptions): QueryPromise<GetParentChildrenData, GetParentChildrenVariables>;

interface GetParentByUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetParentByUserVariables): QueryRef<GetParentByUserData, GetParentByUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetParentByUserVariables): QueryRef<GetParentByUserData, GetParentByUserVariables>;
  operationName: string;
}
export const getParentByUserRef: GetParentByUserRef;

export function getParentByUser(vars: GetParentByUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetParentByUserData, GetParentByUserVariables>;
export function getParentByUser(dc: DataConnect, vars: GetParentByUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetParentByUserData, GetParentByUserVariables>;

interface GetBranchesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: GetBranchesVariables): QueryRef<GetBranchesData, GetBranchesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: GetBranchesVariables): QueryRef<GetBranchesData, GetBranchesVariables>;
  operationName: string;
}
export const getBranchesRef: GetBranchesRef;

export function getBranches(vars?: GetBranchesVariables, options?: ExecuteQueryOptions): QueryPromise<GetBranchesData, GetBranchesVariables>;
export function getBranches(dc: DataConnect, vars?: GetBranchesVariables, options?: ExecuteQueryOptions): QueryPromise<GetBranchesData, GetBranchesVariables>;

interface GetBranchDetailsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetBranchDetailsVariables): QueryRef<GetBranchDetailsData, GetBranchDetailsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetBranchDetailsVariables): QueryRef<GetBranchDetailsData, GetBranchDetailsVariables>;
  operationName: string;
}
export const getBranchDetailsRef: GetBranchDetailsRef;

export function getBranchDetails(vars: GetBranchDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetBranchDetailsData, GetBranchDetailsVariables>;
export function getBranchDetails(dc: DataConnect, vars: GetBranchDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetBranchDetailsData, GetBranchDetailsVariables>;

interface GetUsersByRoleRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUsersByRoleVariables): QueryRef<GetUsersByRoleData, GetUsersByRoleVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUsersByRoleVariables): QueryRef<GetUsersByRoleData, GetUsersByRoleVariables>;
  operationName: string;
}
export const getUsersByRoleRef: GetUsersByRoleRef;

export function getUsersByRole(vars: GetUsersByRoleVariables, options?: ExecuteQueryOptions): QueryPromise<GetUsersByRoleData, GetUsersByRoleVariables>;
export function getUsersByRole(dc: DataConnect, vars: GetUsersByRoleVariables, options?: ExecuteQueryOptions): QueryPromise<GetUsersByRoleData, GetUsersByRoleVariables>;

interface GetAssignmentConflictsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAssignmentConflictsVariables): QueryRef<GetAssignmentConflictsData, GetAssignmentConflictsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAssignmentConflictsVariables): QueryRef<GetAssignmentConflictsData, GetAssignmentConflictsVariables>;
  operationName: string;
}
export const getAssignmentConflictsRef: GetAssignmentConflictsRef;

export function getAssignmentConflicts(vars: GetAssignmentConflictsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssignmentConflictsData, GetAssignmentConflictsVariables>;
export function getAssignmentConflicts(dc: DataConnect, vars: GetAssignmentConflictsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssignmentConflictsData, GetAssignmentConflictsVariables>;

interface GetGlobalClassesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: GetGlobalClassesVariables): QueryRef<GetGlobalClassesData, GetGlobalClassesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: GetGlobalClassesVariables): QueryRef<GetGlobalClassesData, GetGlobalClassesVariables>;
  operationName: string;
}
export const getGlobalClassesRef: GetGlobalClassesRef;

export function getGlobalClasses(vars?: GetGlobalClassesVariables, options?: ExecuteQueryOptions): QueryPromise<GetGlobalClassesData, GetGlobalClassesVariables>;
export function getGlobalClasses(dc: DataConnect, vars?: GetGlobalClassesVariables, options?: ExecuteQueryOptions): QueryPromise<GetGlobalClassesData, GetGlobalClassesVariables>;

interface GetClassDetailsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClassDetailsVariables): QueryRef<GetClassDetailsData, GetClassDetailsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetClassDetailsVariables): QueryRef<GetClassDetailsData, GetClassDetailsVariables>;
  operationName: string;
}
export const getClassDetailsRef: GetClassDetailsRef;

export function getClassDetails(vars: GetClassDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetClassDetailsData, GetClassDetailsVariables>;
export function getClassDetails(dc: DataConnect, vars: GetClassDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetClassDetailsData, GetClassDetailsVariables>;

interface GetGlobalStudentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: GetGlobalStudentsVariables): QueryRef<GetGlobalStudentsData, GetGlobalStudentsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: GetGlobalStudentsVariables): QueryRef<GetGlobalStudentsData, GetGlobalStudentsVariables>;
  operationName: string;
}
export const getGlobalStudentsRef: GetGlobalStudentsRef;

export function getGlobalStudents(vars?: GetGlobalStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetGlobalStudentsData, GetGlobalStudentsVariables>;
export function getGlobalStudents(dc: DataConnect, vars?: GetGlobalStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetGlobalStudentsData, GetGlobalStudentsVariables>;

interface GetStudentProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStudentProfileVariables): QueryRef<GetStudentProfileData, GetStudentProfileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetStudentProfileVariables): QueryRef<GetStudentProfileData, GetStudentProfileVariables>;
  operationName: string;
}
export const getStudentProfileRef: GetStudentProfileRef;

export function getStudentProfile(vars: GetStudentProfileVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentProfileData, GetStudentProfileVariables>;
export function getStudentProfile(dc: DataConnect, vars: GetStudentProfileVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentProfileData, GetStudentProfileVariables>;

interface GetStudentAttendanceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStudentAttendanceVariables): QueryRef<GetStudentAttendanceData, GetStudentAttendanceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetStudentAttendanceVariables): QueryRef<GetStudentAttendanceData, GetStudentAttendanceVariables>;
  operationName: string;
}
export const getStudentAttendanceRef: GetStudentAttendanceRef;

export function getStudentAttendance(vars: GetStudentAttendanceVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentAttendanceData, GetStudentAttendanceVariables>;
export function getStudentAttendance(dc: DataConnect, vars: GetStudentAttendanceVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentAttendanceData, GetStudentAttendanceVariables>;

interface GetStudentFeeHistoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStudentFeeHistoryVariables): QueryRef<GetStudentFeeHistoryData, GetStudentFeeHistoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetStudentFeeHistoryVariables): QueryRef<GetStudentFeeHistoryData, GetStudentFeeHistoryVariables>;
  operationName: string;
}
export const getStudentFeeHistoryRef: GetStudentFeeHistoryRef;

export function getStudentFeeHistory(vars: GetStudentFeeHistoryVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentFeeHistoryData, GetStudentFeeHistoryVariables>;
export function getStudentFeeHistory(dc: DataConnect, vars: GetStudentFeeHistoryVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentFeeHistoryData, GetStudentFeeHistoryVariables>;

interface GetDashboardStatisticsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDashboardStatisticsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetDashboardStatisticsData, undefined>;
  operationName: string;
}
export const getDashboardStatisticsRef: GetDashboardStatisticsRef;

export function getDashboardStatistics(options?: ExecuteQueryOptions): QueryPromise<GetDashboardStatisticsData, undefined>;
export function getDashboardStatistics(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetDashboardStatisticsData, undefined>;

interface GetWingsByBranchRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetWingsByBranchVariables): QueryRef<GetWingsByBranchData, GetWingsByBranchVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetWingsByBranchVariables): QueryRef<GetWingsByBranchData, GetWingsByBranchVariables>;
  operationName: string;
}
export const getWingsByBranchRef: GetWingsByBranchRef;

export function getWingsByBranch(vars: GetWingsByBranchVariables, options?: ExecuteQueryOptions): QueryPromise<GetWingsByBranchData, GetWingsByBranchVariables>;
export function getWingsByBranch(dc: DataConnect, vars: GetWingsByBranchVariables, options?: ExecuteQueryOptions): QueryPromise<GetWingsByBranchData, GetWingsByBranchVariables>;

interface GetClassesByWingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClassesByWingVariables): QueryRef<GetClassesByWingData, GetClassesByWingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetClassesByWingVariables): QueryRef<GetClassesByWingData, GetClassesByWingVariables>;
  operationName: string;
}
export const getClassesByWingRef: GetClassesByWingRef;

export function getClassesByWing(vars: GetClassesByWingVariables, options?: ExecuteQueryOptions): QueryPromise<GetClassesByWingData, GetClassesByWingVariables>;
export function getClassesByWing(dc: DataConnect, vars: GetClassesByWingVariables, options?: ExecuteQueryOptions): QueryPromise<GetClassesByWingData, GetClassesByWingVariables>;

interface GetSectionsByClassRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSectionsByClassVariables): QueryRef<GetSectionsByClassData, GetSectionsByClassVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetSectionsByClassVariables): QueryRef<GetSectionsByClassData, GetSectionsByClassVariables>;
  operationName: string;
}
export const getSectionsByClassRef: GetSectionsByClassRef;

export function getSectionsByClass(vars: GetSectionsByClassVariables, options?: ExecuteQueryOptions): QueryPromise<GetSectionsByClassData, GetSectionsByClassVariables>;
export function getSectionsByClass(dc: DataConnect, vars: GetSectionsByClassVariables, options?: ExecuteQueryOptions): QueryPromise<GetSectionsByClassData, GetSectionsByClassVariables>;

interface GetTeacherAssignmentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetTeacherAssignmentsVariables): QueryRef<GetTeacherAssignmentsData, GetTeacherAssignmentsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetTeacherAssignmentsVariables): QueryRef<GetTeacherAssignmentsData, GetTeacherAssignmentsVariables>;
  operationName: string;
}
export const getTeacherAssignmentsRef: GetTeacherAssignmentsRef;

export function getTeacherAssignments(vars: GetTeacherAssignmentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetTeacherAssignmentsData, GetTeacherAssignmentsVariables>;
export function getTeacherAssignments(dc: DataConnect, vars: GetTeacherAssignmentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetTeacherAssignmentsData, GetTeacherAssignmentsVariables>;

interface SearchStudentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: SearchStudentsVariables): QueryRef<SearchStudentsData, SearchStudentsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: SearchStudentsVariables): QueryRef<SearchStudentsData, SearchStudentsVariables>;
  operationName: string;
}
export const searchStudentsRef: SearchStudentsRef;

export function searchStudents(vars: SearchStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<SearchStudentsData, SearchStudentsVariables>;
export function searchStudents(dc: DataConnect, vars: SearchStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<SearchStudentsData, SearchStudentsVariables>;

interface GetStudentIdSequenceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStudentIdSequenceVariables): QueryRef<GetStudentIdSequenceData, GetStudentIdSequenceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetStudentIdSequenceVariables): QueryRef<GetStudentIdSequenceData, GetStudentIdSequenceVariables>;
  operationName: string;
}
export const getStudentIdSequenceRef: GetStudentIdSequenceRef;

export function getStudentIdSequence(vars: GetStudentIdSequenceVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentIdSequenceData, GetStudentIdSequenceVariables>;
export function getStudentIdSequence(dc: DataConnect, vars: GetStudentIdSequenceVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentIdSequenceData, GetStudentIdSequenceVariables>;

interface GetAttendanceByMonthRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAttendanceByMonthVariables): QueryRef<GetAttendanceByMonthData, GetAttendanceByMonthVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAttendanceByMonthVariables): QueryRef<GetAttendanceByMonthData, GetAttendanceByMonthVariables>;
  operationName: string;
}
export const getAttendanceByMonthRef: GetAttendanceByMonthRef;

export function getAttendanceByMonth(vars: GetAttendanceByMonthVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttendanceByMonthData, GetAttendanceByMonthVariables>;
export function getAttendanceByMonth(dc: DataConnect, vars: GetAttendanceByMonthVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttendanceByMonthData, GetAttendanceByMonthVariables>;

interface GetAttendanceBySectionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAttendanceBySectionVariables): QueryRef<GetAttendanceBySectionData, GetAttendanceBySectionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAttendanceBySectionVariables): QueryRef<GetAttendanceBySectionData, GetAttendanceBySectionVariables>;
  operationName: string;
}
export const getAttendanceBySectionRef: GetAttendanceBySectionRef;

export function getAttendanceBySection(vars: GetAttendanceBySectionVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttendanceBySectionData, GetAttendanceBySectionVariables>;
export function getAttendanceBySection(dc: DataConnect, vars: GetAttendanceBySectionVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttendanceBySectionData, GetAttendanceBySectionVariables>;

interface GetFeeDetailsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetFeeDetailsVariables): QueryRef<GetFeeDetailsData, GetFeeDetailsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetFeeDetailsVariables): QueryRef<GetFeeDetailsData, GetFeeDetailsVariables>;
  operationName: string;
}
export const getFeeDetailsRef: GetFeeDetailsRef;

export function getFeeDetails(vars: GetFeeDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetFeeDetailsData, GetFeeDetailsVariables>;
export function getFeeDetails(dc: DataConnect, vars: GetFeeDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetFeeDetailsData, GetFeeDetailsVariables>;

interface GetFeeRecordsByBranchRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetFeeRecordsByBranchVariables): QueryRef<GetFeeRecordsByBranchData, GetFeeRecordsByBranchVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetFeeRecordsByBranchVariables): QueryRef<GetFeeRecordsByBranchData, GetFeeRecordsByBranchVariables>;
  operationName: string;
}
export const getFeeRecordsByBranchRef: GetFeeRecordsByBranchRef;

export function getFeeRecordsByBranch(vars: GetFeeRecordsByBranchVariables, options?: ExecuteQueryOptions): QueryPromise<GetFeeRecordsByBranchData, GetFeeRecordsByBranchVariables>;
export function getFeeRecordsByBranch(dc: DataConnect, vars: GetFeeRecordsByBranchVariables, options?: ExecuteQueryOptions): QueryPromise<GetFeeRecordsByBranchData, GetFeeRecordsByBranchVariables>;

interface GetAllFeeRecordsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: GetAllFeeRecordsVariables): QueryRef<GetAllFeeRecordsData, GetAllFeeRecordsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: GetAllFeeRecordsVariables): QueryRef<GetAllFeeRecordsData, GetAllFeeRecordsVariables>;
  operationName: string;
}
export const getAllFeeRecordsRef: GetAllFeeRecordsRef;

export function getAllFeeRecords(vars?: GetAllFeeRecordsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllFeeRecordsData, GetAllFeeRecordsVariables>;
export function getAllFeeRecords(dc: DataConnect, vars?: GetAllFeeRecordsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllFeeRecordsData, GetAllFeeRecordsVariables>;

interface GetDueStudentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetDueStudentsVariables): QueryRef<GetDueStudentsData, GetDueStudentsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetDueStudentsVariables): QueryRef<GetDueStudentsData, GetDueStudentsVariables>;
  operationName: string;
}
export const getDueStudentsRef: GetDueStudentsRef;

export function getDueStudents(vars: GetDueStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetDueStudentsData, GetDueStudentsVariables>;
export function getDueStudents(dc: DataConnect, vars: GetDueStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetDueStudentsData, GetDueStudentsVariables>;

interface GetPaidStudentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPaidStudentsVariables): QueryRef<GetPaidStudentsData, GetPaidStudentsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetPaidStudentsVariables): QueryRef<GetPaidStudentsData, GetPaidStudentsVariables>;
  operationName: string;
}
export const getPaidStudentsRef: GetPaidStudentsRef;

export function getPaidStudents(vars: GetPaidStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetPaidStudentsData, GetPaidStudentsVariables>;
export function getPaidStudents(dc: DataConnect, vars: GetPaidStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetPaidStudentsData, GetPaidStudentsVariables>;

interface GetBranchAnalyticsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetBranchAnalyticsVariables): QueryRef<GetBranchAnalyticsData, GetBranchAnalyticsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetBranchAnalyticsVariables): QueryRef<GetBranchAnalyticsData, GetBranchAnalyticsVariables>;
  operationName: string;
}
export const getBranchAnalyticsRef: GetBranchAnalyticsRef;

export function getBranchAnalytics(vars: GetBranchAnalyticsVariables, options?: ExecuteQueryOptions): QueryPromise<GetBranchAnalyticsData, GetBranchAnalyticsVariables>;
export function getBranchAnalytics(dc: DataConnect, vars: GetBranchAnalyticsVariables, options?: ExecuteQueryOptions): QueryPromise<GetBranchAnalyticsData, GetBranchAnalyticsVariables>;

interface GetClassAnalyticsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClassAnalyticsVariables): QueryRef<GetClassAnalyticsData, GetClassAnalyticsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetClassAnalyticsVariables): QueryRef<GetClassAnalyticsData, GetClassAnalyticsVariables>;
  operationName: string;
}
export const getClassAnalyticsRef: GetClassAnalyticsRef;

export function getClassAnalytics(vars: GetClassAnalyticsVariables, options?: ExecuteQueryOptions): QueryPromise<GetClassAnalyticsData, GetClassAnalyticsVariables>;
export function getClassAnalytics(dc: DataConnect, vars: GetClassAnalyticsVariables, options?: ExecuteQueryOptions): QueryPromise<GetClassAnalyticsData, GetClassAnalyticsVariables>;

