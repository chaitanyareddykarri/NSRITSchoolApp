import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  DashboardCard,
  EmptyState,
  Header,
  ScreenContainer,
} from '../../components';
import {fetchBranches} from '../../store/slices/branchSlice';

const ManageBranchesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {items} = useSelector(state => state.branches);

  useEffect(() => {
    dispatch(fetchBranches());
  }, [dispatch]);

  return (
    <ScreenContainer>
      <Header
        title="Branches"
        subtitle="All registered school branches"
        actionLabel="Add"
        onAction={() => navigation.navigate('CreateBranch')}
      />
      {items.length ? (
        items.map(branch => (
          <DashboardCard
            key={branch.id}
            title={branch.name}
            value={branch.code || 'BR'}
            description={branch.city || 'City not set'}
          />
        ))
      ) : (
        <EmptyState
          title="No branches"
          message="Create the first branch to start onboarding users."
        />
      )}
    </ScreenContainer>
  );
};

export default ManageBranchesScreen;
