import React from 'react';
import {RoleDashboard} from '../../components';
import {USER_ROLES} from '../../config/constants';
import {colors} from '../../theme';

const DashboardScreen = ({navigation}) => (
  <RoleDashboard
    role={USER_ROLES.COORDINATOR}
    navigation={navigation}
    subtitle="Wing attendance, teacher assignments, and corrections"
    primaryActions={[
      {
        title: 'Assign',
        value: 'Map',
        icon: 'account-switch-outline',
        route: 'AssignTeachers',
      },
      {
        title: 'Wing',
        value: 'View',
        icon: 'view-grid-outline',
        route: 'WingAttendance',
      },
      {
        title: 'Correct',
        value: 'Edit',
        icon: 'playlist-edit',
        route: 'EditAttendance',
      },
      {
        title: 'Fees',
        value: 'Wing',
        icon: 'cash-clock',
        route: 'FeeDashboard',
        tone: colors.accent,
      },
    ]}
    stats={[
      {
        title: 'Absentees',
        value: '3',
        icon: 'account-alert-outline',
        tone: colors.danger,
      },
      {
        title: 'Coverage',
        value: '94%',
        icon: 'chart-areaspline',
        tone: colors.success,
      },
    ]}
  />
);

export default DashboardScreen;
