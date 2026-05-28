import React from 'react';
import {DashboardCard, Header, ScreenContainer} from '../../components';

const StudentProfileScreen = () => (
  <ScreenContainer>
    <Header title="Student Profile" subtitle="Student academic snapshot" />
    <DashboardCard
      title="Attendance access"
      value="Read"
      description="Teachers can view assigned student context only."
    />
  </ScreenContainer>
);

export default StudentProfileScreen;
