import React from 'react';
import {DashboardCard, Header, ScreenContainer} from '../../components';

const ManageTeachersScreen = () => (
  <ScreenContainer>
    <Header
      title="Teachers"
      subtitle="Create and maintain branch teacher accounts"
    />
    <DashboardCard
      title="Teacher onboarding"
      value="RBAC"
      description="Teachers receive class and section access through coordinator assignments."
    />
  </ScreenContainer>
);

export default ManageTeachersScreen;
