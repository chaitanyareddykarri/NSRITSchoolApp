import React from 'react';
import {DashboardCard, Header, ScreenContainer} from '../../components';

const ManageUsersScreen = () => (
  <ScreenContainer>
    <Header
      title="Create Users"
      subtitle="Provision branch admins and role-based school users"
    />
    <DashboardCard
      title="Branch Admin"
      value="MAIN"
      description="Can be created by Main Admin and scoped to one branch."
    />
    <DashboardCard
      title="School Roles"
      value="RBAC"
      description="Principal, Coordinator, Teacher, and Parent records are branch-aware."
    />
  </ScreenContainer>
);

export default ManageUsersScreen;
