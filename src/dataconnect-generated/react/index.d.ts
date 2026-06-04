import { CreateBranchData, CreateBranchVariables, UpdateBranchData, UpdateBranchVariables, AssignBranchAdminData, AssignBranchAdminVariables, AssignPrincipalData, AssignPrincipalVariables, CreateClassData, CreateClassVariables, CreateSectionData, CreateSectionVariables, RemoveSectionData, RemoveSectionVariables, CreateUserData, CreateUserVariables, ClaimUserFirebaseUidData, ClaimUserFirebaseUidVariables, CreateParentData, CreateParentVariables, CreateParentWithoutUserData, CreateParentWithoutUserVariables, CreateStudentData, CreateStudentVariables, CreateAttendanceData, CreateAttendanceVariables, UpdateAttendanceData, UpdateAttendanceVariables, UploadFeePaymentData, UploadFeePaymentVariables, AssignTeacherData, AssignTeacherVariables, GetCurrentUserData, GetCurrentUserVariables, GetUserByPhoneData, GetUserByPhoneVariables, GetStudentsByBranchData, GetStudentsByBranchVariables, GetStudentsBySectionData, GetStudentsBySectionVariables, GetParentChildrenData, GetParentChildrenVariables, GetParentByUserData, GetParentByUserVariables, GetBranchesData, GetBranchesVariables, GetBranchDetailsData, GetBranchDetailsVariables, GetUsersByRoleData, GetUsersByRoleVariables, GetAssignmentConflictsData, GetAssignmentConflictsVariables, GetGlobalClassesData, GetGlobalClassesVariables, GetClassDetailsData, GetClassDetailsVariables, GetGlobalStudentsData, GetGlobalStudentsVariables, GetStudentProfileData, GetStudentProfileVariables, GetStudentAttendanceData, GetStudentAttendanceVariables, GetStudentFeeHistoryData, GetStudentFeeHistoryVariables, GetDashboardStatisticsData, GetWingsByBranchData, GetWingsByBranchVariables, GetClassesByWingData, GetClassesByWingVariables, GetSectionsByClassData, GetSectionsByClassVariables, GetTeacherAssignmentsData, GetTeacherAssignmentsVariables, SearchStudentsData, SearchStudentsVariables, GetStudentIdSequenceData, GetStudentIdSequenceVariables, GetAttendanceByMonthData, GetAttendanceByMonthVariables, GetAttendanceBySectionData, GetAttendanceBySectionVariables, GetFeeDetailsData, GetFeeDetailsVariables, GetFeeRecordsByBranchData, GetFeeRecordsByBranchVariables, GetAllFeeRecordsData, GetAllFeeRecordsVariables, GetDueStudentsData, GetDueStudentsVariables, GetPaidStudentsData, GetPaidStudentsVariables, GetBranchAnalyticsData, GetBranchAnalyticsVariables, GetClassAnalyticsData, GetClassAnalyticsVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateBranch(options?: useDataConnectMutationOptions<CreateBranchData, FirebaseError, CreateBranchVariables>): UseDataConnectMutationResult<CreateBranchData, CreateBranchVariables>;
export function useCreateBranch(dc: DataConnect, options?: useDataConnectMutationOptions<CreateBranchData, FirebaseError, CreateBranchVariables>): UseDataConnectMutationResult<CreateBranchData, CreateBranchVariables>;

export function useUpdateBranch(options?: useDataConnectMutationOptions<UpdateBranchData, FirebaseError, UpdateBranchVariables>): UseDataConnectMutationResult<UpdateBranchData, UpdateBranchVariables>;
export function useUpdateBranch(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateBranchData, FirebaseError, UpdateBranchVariables>): UseDataConnectMutationResult<UpdateBranchData, UpdateBranchVariables>;

export function useAssignBranchAdmin(options?: useDataConnectMutationOptions<AssignBranchAdminData, FirebaseError, AssignBranchAdminVariables>): UseDataConnectMutationResult<AssignBranchAdminData, AssignBranchAdminVariables>;
export function useAssignBranchAdmin(dc: DataConnect, options?: useDataConnectMutationOptions<AssignBranchAdminData, FirebaseError, AssignBranchAdminVariables>): UseDataConnectMutationResult<AssignBranchAdminData, AssignBranchAdminVariables>;

export function useAssignPrincipal(options?: useDataConnectMutationOptions<AssignPrincipalData, FirebaseError, AssignPrincipalVariables>): UseDataConnectMutationResult<AssignPrincipalData, AssignPrincipalVariables>;
export function useAssignPrincipal(dc: DataConnect, options?: useDataConnectMutationOptions<AssignPrincipalData, FirebaseError, AssignPrincipalVariables>): UseDataConnectMutationResult<AssignPrincipalData, AssignPrincipalVariables>;

export function useCreateClass(options?: useDataConnectMutationOptions<CreateClassData, FirebaseError, CreateClassVariables>): UseDataConnectMutationResult<CreateClassData, CreateClassVariables>;
export function useCreateClass(dc: DataConnect, options?: useDataConnectMutationOptions<CreateClassData, FirebaseError, CreateClassVariables>): UseDataConnectMutationResult<CreateClassData, CreateClassVariables>;

export function useCreateSection(options?: useDataConnectMutationOptions<CreateSectionData, FirebaseError, CreateSectionVariables>): UseDataConnectMutationResult<CreateSectionData, CreateSectionVariables>;
export function useCreateSection(dc: DataConnect, options?: useDataConnectMutationOptions<CreateSectionData, FirebaseError, CreateSectionVariables>): UseDataConnectMutationResult<CreateSectionData, CreateSectionVariables>;

export function useRemoveSection(options?: useDataConnectMutationOptions<RemoveSectionData, FirebaseError, RemoveSectionVariables>): UseDataConnectMutationResult<RemoveSectionData, RemoveSectionVariables>;
export function useRemoveSection(dc: DataConnect, options?: useDataConnectMutationOptions<RemoveSectionData, FirebaseError, RemoveSectionVariables>): UseDataConnectMutationResult<RemoveSectionData, RemoveSectionVariables>;

export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useClaimUserFirebaseUid(options?: useDataConnectMutationOptions<ClaimUserFirebaseUidData, FirebaseError, ClaimUserFirebaseUidVariables>): UseDataConnectMutationResult<ClaimUserFirebaseUidData, ClaimUserFirebaseUidVariables>;
export function useClaimUserFirebaseUid(dc: DataConnect, options?: useDataConnectMutationOptions<ClaimUserFirebaseUidData, FirebaseError, ClaimUserFirebaseUidVariables>): UseDataConnectMutationResult<ClaimUserFirebaseUidData, ClaimUserFirebaseUidVariables>;

export function useCreateParent(options?: useDataConnectMutationOptions<CreateParentData, FirebaseError, CreateParentVariables>): UseDataConnectMutationResult<CreateParentData, CreateParentVariables>;
export function useCreateParent(dc: DataConnect, options?: useDataConnectMutationOptions<CreateParentData, FirebaseError, CreateParentVariables>): UseDataConnectMutationResult<CreateParentData, CreateParentVariables>;

export function useCreateParentWithoutUser(options?: useDataConnectMutationOptions<CreateParentWithoutUserData, FirebaseError, CreateParentWithoutUserVariables>): UseDataConnectMutationResult<CreateParentWithoutUserData, CreateParentWithoutUserVariables>;
export function useCreateParentWithoutUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateParentWithoutUserData, FirebaseError, CreateParentWithoutUserVariables>): UseDataConnectMutationResult<CreateParentWithoutUserData, CreateParentWithoutUserVariables>;

export function useCreateStudent(options?: useDataConnectMutationOptions<CreateStudentData, FirebaseError, CreateStudentVariables>): UseDataConnectMutationResult<CreateStudentData, CreateStudentVariables>;
export function useCreateStudent(dc: DataConnect, options?: useDataConnectMutationOptions<CreateStudentData, FirebaseError, CreateStudentVariables>): UseDataConnectMutationResult<CreateStudentData, CreateStudentVariables>;

export function useCreateAttendance(options?: useDataConnectMutationOptions<CreateAttendanceData, FirebaseError, CreateAttendanceVariables>): UseDataConnectMutationResult<CreateAttendanceData, CreateAttendanceVariables>;
export function useCreateAttendance(dc: DataConnect, options?: useDataConnectMutationOptions<CreateAttendanceData, FirebaseError, CreateAttendanceVariables>): UseDataConnectMutationResult<CreateAttendanceData, CreateAttendanceVariables>;

export function useUpdateAttendance(options?: useDataConnectMutationOptions<UpdateAttendanceData, FirebaseError, UpdateAttendanceVariables>): UseDataConnectMutationResult<UpdateAttendanceData, UpdateAttendanceVariables>;
export function useUpdateAttendance(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateAttendanceData, FirebaseError, UpdateAttendanceVariables>): UseDataConnectMutationResult<UpdateAttendanceData, UpdateAttendanceVariables>;

export function useUploadFeePayment(options?: useDataConnectMutationOptions<UploadFeePaymentData, FirebaseError, UploadFeePaymentVariables>): UseDataConnectMutationResult<UploadFeePaymentData, UploadFeePaymentVariables>;
export function useUploadFeePayment(dc: DataConnect, options?: useDataConnectMutationOptions<UploadFeePaymentData, FirebaseError, UploadFeePaymentVariables>): UseDataConnectMutationResult<UploadFeePaymentData, UploadFeePaymentVariables>;

export function useAssignTeacher(options?: useDataConnectMutationOptions<AssignTeacherData, FirebaseError, AssignTeacherVariables>): UseDataConnectMutationResult<AssignTeacherData, AssignTeacherVariables>;
export function useAssignTeacher(dc: DataConnect, options?: useDataConnectMutationOptions<AssignTeacherData, FirebaseError, AssignTeacherVariables>): UseDataConnectMutationResult<AssignTeacherData, AssignTeacherVariables>;

export function useGetCurrentUser(vars: GetCurrentUserVariables, options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, GetCurrentUserVariables>;
export function useGetCurrentUser(dc: DataConnect, vars: GetCurrentUserVariables, options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, GetCurrentUserVariables>;

export function useGetUserByPhone(vars: GetUserByPhoneVariables, options?: useDataConnectQueryOptions<GetUserByPhoneData>): UseDataConnectQueryResult<GetUserByPhoneData, GetUserByPhoneVariables>;
export function useGetUserByPhone(dc: DataConnect, vars: GetUserByPhoneVariables, options?: useDataConnectQueryOptions<GetUserByPhoneData>): UseDataConnectQueryResult<GetUserByPhoneData, GetUserByPhoneVariables>;

export function useGetStudentsByBranch(vars: GetStudentsByBranchVariables, options?: useDataConnectQueryOptions<GetStudentsByBranchData>): UseDataConnectQueryResult<GetStudentsByBranchData, GetStudentsByBranchVariables>;
export function useGetStudentsByBranch(dc: DataConnect, vars: GetStudentsByBranchVariables, options?: useDataConnectQueryOptions<GetStudentsByBranchData>): UseDataConnectQueryResult<GetStudentsByBranchData, GetStudentsByBranchVariables>;

export function useGetStudentsBySection(vars: GetStudentsBySectionVariables, options?: useDataConnectQueryOptions<GetStudentsBySectionData>): UseDataConnectQueryResult<GetStudentsBySectionData, GetStudentsBySectionVariables>;
export function useGetStudentsBySection(dc: DataConnect, vars: GetStudentsBySectionVariables, options?: useDataConnectQueryOptions<GetStudentsBySectionData>): UseDataConnectQueryResult<GetStudentsBySectionData, GetStudentsBySectionVariables>;

export function useGetParentChildren(vars: GetParentChildrenVariables, options?: useDataConnectQueryOptions<GetParentChildrenData>): UseDataConnectQueryResult<GetParentChildrenData, GetParentChildrenVariables>;
export function useGetParentChildren(dc: DataConnect, vars: GetParentChildrenVariables, options?: useDataConnectQueryOptions<GetParentChildrenData>): UseDataConnectQueryResult<GetParentChildrenData, GetParentChildrenVariables>;

export function useGetParentByUser(vars: GetParentByUserVariables, options?: useDataConnectQueryOptions<GetParentByUserData>): UseDataConnectQueryResult<GetParentByUserData, GetParentByUserVariables>;
export function useGetParentByUser(dc: DataConnect, vars: GetParentByUserVariables, options?: useDataConnectQueryOptions<GetParentByUserData>): UseDataConnectQueryResult<GetParentByUserData, GetParentByUserVariables>;

export function useGetBranches(vars?: GetBranchesVariables, options?: useDataConnectQueryOptions<GetBranchesData>): UseDataConnectQueryResult<GetBranchesData, GetBranchesVariables>;
export function useGetBranches(dc: DataConnect, vars?: GetBranchesVariables, options?: useDataConnectQueryOptions<GetBranchesData>): UseDataConnectQueryResult<GetBranchesData, GetBranchesVariables>;

export function useGetBranchDetails(vars: GetBranchDetailsVariables, options?: useDataConnectQueryOptions<GetBranchDetailsData>): UseDataConnectQueryResult<GetBranchDetailsData, GetBranchDetailsVariables>;
export function useGetBranchDetails(dc: DataConnect, vars: GetBranchDetailsVariables, options?: useDataConnectQueryOptions<GetBranchDetailsData>): UseDataConnectQueryResult<GetBranchDetailsData, GetBranchDetailsVariables>;

export function useGetUsersByRole(vars: GetUsersByRoleVariables, options?: useDataConnectQueryOptions<GetUsersByRoleData>): UseDataConnectQueryResult<GetUsersByRoleData, GetUsersByRoleVariables>;
export function useGetUsersByRole(dc: DataConnect, vars: GetUsersByRoleVariables, options?: useDataConnectQueryOptions<GetUsersByRoleData>): UseDataConnectQueryResult<GetUsersByRoleData, GetUsersByRoleVariables>;

export function useGetAssignmentConflicts(vars: GetAssignmentConflictsVariables, options?: useDataConnectQueryOptions<GetAssignmentConflictsData>): UseDataConnectQueryResult<GetAssignmentConflictsData, GetAssignmentConflictsVariables>;
export function useGetAssignmentConflicts(dc: DataConnect, vars: GetAssignmentConflictsVariables, options?: useDataConnectQueryOptions<GetAssignmentConflictsData>): UseDataConnectQueryResult<GetAssignmentConflictsData, GetAssignmentConflictsVariables>;

export function useGetGlobalClasses(vars?: GetGlobalClassesVariables, options?: useDataConnectQueryOptions<GetGlobalClassesData>): UseDataConnectQueryResult<GetGlobalClassesData, GetGlobalClassesVariables>;
export function useGetGlobalClasses(dc: DataConnect, vars?: GetGlobalClassesVariables, options?: useDataConnectQueryOptions<GetGlobalClassesData>): UseDataConnectQueryResult<GetGlobalClassesData, GetGlobalClassesVariables>;

export function useGetClassDetails(vars: GetClassDetailsVariables, options?: useDataConnectQueryOptions<GetClassDetailsData>): UseDataConnectQueryResult<GetClassDetailsData, GetClassDetailsVariables>;
export function useGetClassDetails(dc: DataConnect, vars: GetClassDetailsVariables, options?: useDataConnectQueryOptions<GetClassDetailsData>): UseDataConnectQueryResult<GetClassDetailsData, GetClassDetailsVariables>;

export function useGetGlobalStudents(vars?: GetGlobalStudentsVariables, options?: useDataConnectQueryOptions<GetGlobalStudentsData>): UseDataConnectQueryResult<GetGlobalStudentsData, GetGlobalStudentsVariables>;
export function useGetGlobalStudents(dc: DataConnect, vars?: GetGlobalStudentsVariables, options?: useDataConnectQueryOptions<GetGlobalStudentsData>): UseDataConnectQueryResult<GetGlobalStudentsData, GetGlobalStudentsVariables>;

export function useGetStudentProfile(vars: GetStudentProfileVariables, options?: useDataConnectQueryOptions<GetStudentProfileData>): UseDataConnectQueryResult<GetStudentProfileData, GetStudentProfileVariables>;
export function useGetStudentProfile(dc: DataConnect, vars: GetStudentProfileVariables, options?: useDataConnectQueryOptions<GetStudentProfileData>): UseDataConnectQueryResult<GetStudentProfileData, GetStudentProfileVariables>;

export function useGetStudentAttendance(vars: GetStudentAttendanceVariables, options?: useDataConnectQueryOptions<GetStudentAttendanceData>): UseDataConnectQueryResult<GetStudentAttendanceData, GetStudentAttendanceVariables>;
export function useGetStudentAttendance(dc: DataConnect, vars: GetStudentAttendanceVariables, options?: useDataConnectQueryOptions<GetStudentAttendanceData>): UseDataConnectQueryResult<GetStudentAttendanceData, GetStudentAttendanceVariables>;

export function useGetStudentFeeHistory(vars: GetStudentFeeHistoryVariables, options?: useDataConnectQueryOptions<GetStudentFeeHistoryData>): UseDataConnectQueryResult<GetStudentFeeHistoryData, GetStudentFeeHistoryVariables>;
export function useGetStudentFeeHistory(dc: DataConnect, vars: GetStudentFeeHistoryVariables, options?: useDataConnectQueryOptions<GetStudentFeeHistoryData>): UseDataConnectQueryResult<GetStudentFeeHistoryData, GetStudentFeeHistoryVariables>;

export function useGetDashboardStatistics(options?: useDataConnectQueryOptions<GetDashboardStatisticsData>): UseDataConnectQueryResult<GetDashboardStatisticsData, undefined>;
export function useGetDashboardStatistics(dc: DataConnect, options?: useDataConnectQueryOptions<GetDashboardStatisticsData>): UseDataConnectQueryResult<GetDashboardStatisticsData, undefined>;

export function useGetWingsByBranch(vars: GetWingsByBranchVariables, options?: useDataConnectQueryOptions<GetWingsByBranchData>): UseDataConnectQueryResult<GetWingsByBranchData, GetWingsByBranchVariables>;
export function useGetWingsByBranch(dc: DataConnect, vars: GetWingsByBranchVariables, options?: useDataConnectQueryOptions<GetWingsByBranchData>): UseDataConnectQueryResult<GetWingsByBranchData, GetWingsByBranchVariables>;

export function useGetClassesByWing(vars: GetClassesByWingVariables, options?: useDataConnectQueryOptions<GetClassesByWingData>): UseDataConnectQueryResult<GetClassesByWingData, GetClassesByWingVariables>;
export function useGetClassesByWing(dc: DataConnect, vars: GetClassesByWingVariables, options?: useDataConnectQueryOptions<GetClassesByWingData>): UseDataConnectQueryResult<GetClassesByWingData, GetClassesByWingVariables>;

export function useGetSectionsByClass(vars: GetSectionsByClassVariables, options?: useDataConnectQueryOptions<GetSectionsByClassData>): UseDataConnectQueryResult<GetSectionsByClassData, GetSectionsByClassVariables>;
export function useGetSectionsByClass(dc: DataConnect, vars: GetSectionsByClassVariables, options?: useDataConnectQueryOptions<GetSectionsByClassData>): UseDataConnectQueryResult<GetSectionsByClassData, GetSectionsByClassVariables>;

export function useGetTeacherAssignments(vars: GetTeacherAssignmentsVariables, options?: useDataConnectQueryOptions<GetTeacherAssignmentsData>): UseDataConnectQueryResult<GetTeacherAssignmentsData, GetTeacherAssignmentsVariables>;
export function useGetTeacherAssignments(dc: DataConnect, vars: GetTeacherAssignmentsVariables, options?: useDataConnectQueryOptions<GetTeacherAssignmentsData>): UseDataConnectQueryResult<GetTeacherAssignmentsData, GetTeacherAssignmentsVariables>;

export function useSearchStudents(vars: SearchStudentsVariables, options?: useDataConnectQueryOptions<SearchStudentsData>): UseDataConnectQueryResult<SearchStudentsData, SearchStudentsVariables>;
export function useSearchStudents(dc: DataConnect, vars: SearchStudentsVariables, options?: useDataConnectQueryOptions<SearchStudentsData>): UseDataConnectQueryResult<SearchStudentsData, SearchStudentsVariables>;

export function useGetStudentIdSequence(vars: GetStudentIdSequenceVariables, options?: useDataConnectQueryOptions<GetStudentIdSequenceData>): UseDataConnectQueryResult<GetStudentIdSequenceData, GetStudentIdSequenceVariables>;
export function useGetStudentIdSequence(dc: DataConnect, vars: GetStudentIdSequenceVariables, options?: useDataConnectQueryOptions<GetStudentIdSequenceData>): UseDataConnectQueryResult<GetStudentIdSequenceData, GetStudentIdSequenceVariables>;

export function useGetAttendanceByMonth(vars: GetAttendanceByMonthVariables, options?: useDataConnectQueryOptions<GetAttendanceByMonthData>): UseDataConnectQueryResult<GetAttendanceByMonthData, GetAttendanceByMonthVariables>;
export function useGetAttendanceByMonth(dc: DataConnect, vars: GetAttendanceByMonthVariables, options?: useDataConnectQueryOptions<GetAttendanceByMonthData>): UseDataConnectQueryResult<GetAttendanceByMonthData, GetAttendanceByMonthVariables>;

export function useGetAttendanceBySection(vars: GetAttendanceBySectionVariables, options?: useDataConnectQueryOptions<GetAttendanceBySectionData>): UseDataConnectQueryResult<GetAttendanceBySectionData, GetAttendanceBySectionVariables>;
export function useGetAttendanceBySection(dc: DataConnect, vars: GetAttendanceBySectionVariables, options?: useDataConnectQueryOptions<GetAttendanceBySectionData>): UseDataConnectQueryResult<GetAttendanceBySectionData, GetAttendanceBySectionVariables>;

export function useGetFeeDetails(vars: GetFeeDetailsVariables, options?: useDataConnectQueryOptions<GetFeeDetailsData>): UseDataConnectQueryResult<GetFeeDetailsData, GetFeeDetailsVariables>;
export function useGetFeeDetails(dc: DataConnect, vars: GetFeeDetailsVariables, options?: useDataConnectQueryOptions<GetFeeDetailsData>): UseDataConnectQueryResult<GetFeeDetailsData, GetFeeDetailsVariables>;

export function useGetFeeRecordsByBranch(vars: GetFeeRecordsByBranchVariables, options?: useDataConnectQueryOptions<GetFeeRecordsByBranchData>): UseDataConnectQueryResult<GetFeeRecordsByBranchData, GetFeeRecordsByBranchVariables>;
export function useGetFeeRecordsByBranch(dc: DataConnect, vars: GetFeeRecordsByBranchVariables, options?: useDataConnectQueryOptions<GetFeeRecordsByBranchData>): UseDataConnectQueryResult<GetFeeRecordsByBranchData, GetFeeRecordsByBranchVariables>;

export function useGetAllFeeRecords(vars?: GetAllFeeRecordsVariables, options?: useDataConnectQueryOptions<GetAllFeeRecordsData>): UseDataConnectQueryResult<GetAllFeeRecordsData, GetAllFeeRecordsVariables>;
export function useGetAllFeeRecords(dc: DataConnect, vars?: GetAllFeeRecordsVariables, options?: useDataConnectQueryOptions<GetAllFeeRecordsData>): UseDataConnectQueryResult<GetAllFeeRecordsData, GetAllFeeRecordsVariables>;

export function useGetDueStudents(vars: GetDueStudentsVariables, options?: useDataConnectQueryOptions<GetDueStudentsData>): UseDataConnectQueryResult<GetDueStudentsData, GetDueStudentsVariables>;
export function useGetDueStudents(dc: DataConnect, vars: GetDueStudentsVariables, options?: useDataConnectQueryOptions<GetDueStudentsData>): UseDataConnectQueryResult<GetDueStudentsData, GetDueStudentsVariables>;

export function useGetPaidStudents(vars: GetPaidStudentsVariables, options?: useDataConnectQueryOptions<GetPaidStudentsData>): UseDataConnectQueryResult<GetPaidStudentsData, GetPaidStudentsVariables>;
export function useGetPaidStudents(dc: DataConnect, vars: GetPaidStudentsVariables, options?: useDataConnectQueryOptions<GetPaidStudentsData>): UseDataConnectQueryResult<GetPaidStudentsData, GetPaidStudentsVariables>;

export function useGetBranchAnalytics(vars: GetBranchAnalyticsVariables, options?: useDataConnectQueryOptions<GetBranchAnalyticsData>): UseDataConnectQueryResult<GetBranchAnalyticsData, GetBranchAnalyticsVariables>;
export function useGetBranchAnalytics(dc: DataConnect, vars: GetBranchAnalyticsVariables, options?: useDataConnectQueryOptions<GetBranchAnalyticsData>): UseDataConnectQueryResult<GetBranchAnalyticsData, GetBranchAnalyticsVariables>;

export function useGetClassAnalytics(vars: GetClassAnalyticsVariables, options?: useDataConnectQueryOptions<GetClassAnalyticsData>): UseDataConnectQueryResult<GetClassAnalyticsData, GetClassAnalyticsVariables>;
export function useGetClassAnalytics(dc: DataConnect, vars: GetClassAnalyticsVariables, options?: useDataConnectQueryOptions<GetClassAnalyticsData>): UseDataConnectQueryResult<GetClassAnalyticsData, GetClassAnalyticsVariables>;
