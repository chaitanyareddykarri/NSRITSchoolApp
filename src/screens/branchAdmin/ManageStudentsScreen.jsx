import React from 'react';
import {DashboardCard, Header, ScreenContainer} from '../../components';

const ManageStudentsScreen = () => (
  <ScreenContainer>
    <Header title="Students" subtitle="Branch student records" />
    <DashboardCard
      title="Student roster"
      value="Branch"
      description="Student records remain scoped to branch, class, section, and parent."
    />
  </ScreenContainer>
);

export default ManageStudentsScreen;
