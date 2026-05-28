import React from 'react';
import {RoleDashboard} from '../../components';
import {USER_ROLES} from '../../config/constants';
import {colors} from '../../theme';

const DashboardScreen = ({navigation}) => (
  <RoleDashboard
    role={USER_ROLES.BRANCH_ADMIN}
    navigation={navigation}
    subtitle="Branch users, students, attendance, and fee visibility"
    primaryActions={[
      {
        title: 'Teachers',
        value: 'Team',
        icon: 'account-tie',
        route: 'ManageTeachers',
      },
      {
        title: 'Students',
        value: 'Roster',
        icon: 'account-school',
        route: 'ManageStudents',
      },
      {
        title: 'Attendance',
        value: 'View',
        icon: 'calendar-check',
        route: 'AttendanceOverview',
      },
      {
        title: 'Fees',
        value: 'Branch',
        icon: 'cash-multiple',
        route: 'FeeDashboard',
        tone: colors.accent,
      },
    ]}
    stats={[
      {
        title: 'Staff',
        value: '28',
        icon: 'account-group',
        tone: colors.secondary,
      },
      {
        title: 'Open Tasks',
        value: '6',
        icon: 'clipboard-clock-outline',
        tone: colors.warning,
      },
    ]}
  />
);

export default DashboardScreen;
