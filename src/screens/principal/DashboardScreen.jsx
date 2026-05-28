import React from 'react';
import {RoleDashboard} from '../../components';
import {USER_ROLES} from '../../config/constants';
import {colors} from '../../theme';

const DashboardScreen = ({navigation}) => (
  <RoleDashboard
    role={USER_ROLES.PRINCIPAL}
    navigation={navigation}
    subtitle="Academic structure, branch attendance, and fees"
    primaryActions={[
      {
        title: 'Academics',
        value: 'Classes',
        icon: 'google-classroom',
        route: 'AcademicStructure',
      },
      {
        title: 'Create Class',
        value: '+',
        icon: 'shape-square-plus',
        route: 'CreateClass',
      },
      {
        title: 'Attendance',
        value: 'All',
        icon: 'clipboard-text-clock',
        route: 'ViewAllAttendance',
      },
      {
        title: 'Fees',
        value: 'Branch',
        icon: 'finance',
        route: 'FeeDashboard',
        tone: colors.accent,
      },
    ]}
    stats={[
      {
        title: 'Classes',
        value: '12',
        icon: 'book-education-outline',
        tone: colors.secondary,
      },
      {
        title: 'Pending',
        value: '3',
        icon: 'alert-circle-outline',
        tone: colors.warning,
      },
    ]}
  />
);

export default DashboardScreen;
