import React from 'react';
import {useSelector} from 'react-redux';
import {DashboardCard, Header, ScreenContainer} from '../../components';

const ProfileScreen = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <ScreenContainer>
      <Header title="Profile" subtitle="Parent account details" />
      <DashboardCard
        title={user?.name || 'Parent'}
        value="PARENT"
        description={user?.phoneNumber || 'Phone number not available'}
      />
      <DashboardCard
        title="Linked child"
        value="Student"
        description="Child linkage is read-only for parent accounts."
      />
    </ScreenContainer>
  );
};

export default ProfileScreen;
