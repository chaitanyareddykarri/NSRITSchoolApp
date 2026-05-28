import {useMemo} from 'react';
import {useSelector} from 'react-redux';

export const useFeeAccess = () => {
  const user = useSelector(state => state.auth.user);
  const role = useSelector(state => state.auth.role);

  return useMemo(
    () => ({
      role,
      branchId: user?.branchId,
      parentId: user?.parentId || user?.id,
      wingId: user?.wingId,
      wing: user?.wing || 'Primary',
      sectionId: user?.sectionId,
      sectionName: user?.sectionName || 'A',
    }),
    [role, user],
  );
};

export default useFeeAccess;
