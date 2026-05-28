import React from 'react';
import {RoleDashboard} from '../../components';
import {USER_ROLES} from '../../config/constants';
import {colors} from '../../theme';

const DashboardScreen = ({navigation}) => (
  <RoleDashboard
    role={USER_ROLES.TEACHER}
    navigation={navigation}
    subtitle="Fast attendance and assigned section visibility"
    primaryActions={[
      {
        title: 'Attendance',
        value: 'Mark',
        icon: 'clipboard-check-outline',
        route: 'TakeAttendance',
      },
      {
        title: 'Students',
        value: 'Class',
        icon: 'account-school-outline',
        route: 'StudentsList',
      },
      {
        title: 'Fees',
        value: 'Section',
        icon: 'cash-fast',
        route: 'FeeDashboard',
        tone: colors.accent,
      },
    ]}
    stats={[
      {
        title: 'Section',
        value: '1-A',
        icon: 'google-classroom',
        tone: colors.secondary,
      },
      {title: 'Pending', value: '1', icon: 'timer-sand', tone: colors.warning},
    ]}
  />
);

export default DashboardScreen;
