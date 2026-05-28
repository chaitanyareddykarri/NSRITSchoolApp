import {USER_ROLES} from '../config/constants';

export const getAccessScope = user => ({
  userId: user?.id,
  firebaseUID: user?.firebaseUID || user?.uid,
  role: user?.role,
  branchId: user?.branchId,
  wingId: user?.wingId,
  sectionId: user?.sectionId,
  parentId: user?.parentId || (user?.role === USER_ROLES.PARENT ? user?.id : null),
});

export const applyRoleFilter = (items, scope) => {
  if (!scope?.role || scope.role === USER_ROLES.MAIN_ADMIN) {
    return items;
  }

  if (scope.role === USER_ROLES.BRANCH_ADMIN || scope.role === USER_ROLES.PRINCIPAL) {
    return items.filter(item => !item.branchId || item.branchId === scope.branchId);
  }

  if (scope.role === USER_ROLES.COORDINATOR) {
    return items.filter(item => !item.wingId || item.wingId === scope.wingId);
  }

  if (scope.role === USER_ROLES.TEACHER) {
    return items.filter(item => !item.sectionId || item.sectionId === scope.sectionId);
  }

  if (scope.role === USER_ROLES.PARENT) {
    return items.filter(item => !item.parentId || item.parentId === scope.parentId);
  }

  return items;
};
