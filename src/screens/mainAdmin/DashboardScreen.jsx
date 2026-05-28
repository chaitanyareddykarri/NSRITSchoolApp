import React from 'react';
import {RoleDashboard} from '../../components';
import {USER_ROLES} from '../../config/constants';
import {colors} from '../../theme';

const DashboardScreen = ({navigation}) => (
  <RoleDashboard
    role={USER_ROLES.MAIN_ADMIN}
    navigation={navigation}
    subtitle="Global branches, users, fees, and operations"
    primaryActions={[
      {
        title: 'Branches',
        value: 'Manage',
        icon: 'office-building-cog',
        route: 'ManageBranches',
      },
      {
        title: 'New Branch',
        value: '+',
        icon: 'plus-box',
        route: 'CreateBranch',
        tone: colors.success,
      },
      {
        title: 'Users',
        value: 'RBAC',
        icon: 'account-multiple-plus',
        route: 'ManageUsers',
      },
      {
        title: 'Fees',
        value: 'All',
        icon: 'finance',
        route: 'FeeDashboard',
        tone: colors.accent,
      },
    ]}
    stats={[
      {title: 'Branches', value: '1', icon: 'domain', tone: colors.secondary},
      {
        title: 'Tasks',
        value: '4',
        icon: 'clipboard-list-outline',
        tone: colors.purple,
      },
    ]}
  />
);

export default DashboardScreen;
