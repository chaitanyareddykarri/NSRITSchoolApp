import React from 'react';
import {DashboardCard, Header, ScreenContainer} from '../../components';

const WingStudentsScreen = () => (
  <ScreenContainer>
    <Header
      title="Wing Students"
      subtitle="Students grouped by coordinator wing"
    />
    <DashboardCard
      title="Wing roster"
      value="Scoped"
      description="Coordinator access should be filtered by assigned wing."
    />
  </ScreenContainer>
);

export default WingStudentsScreen;
