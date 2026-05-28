import React from 'react';
import {DashboardCard, Header, ScreenContainer} from '../../components';

const StudentSelectorScreen = () => (
  <ScreenContainer>
    <Header title="Select Student" subtitle="Linked children" />
    <DashboardCard
      title="Demo Student"
      value="Active"
      description="Parent access remains read-only."
    />
  </ScreenContainer>
);

export default StudentSelectorScreen;
