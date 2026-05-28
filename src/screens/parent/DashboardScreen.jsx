import React from 'react';
import {RoleDashboard} from '../../components';
import {USER_ROLES} from '../../config/constants';
import {colors} from '../../theme';

const DashboardScreen = ({navigation}) => (
  <RoleDashboard
    role={USER_ROLES.PARENT}
    navigation={navigation}
    subtitle="Child attendance, fees, and profile insights"
    primaryActions={[
      {
        title: 'Attendance',
        value: 'Month',
        icon: 'calendar-month-outline',
        route: 'Attendance',
      },
      {
        title: 'Fees',
        value: 'Ledger',
        icon: 'cash-multiple',
        route: 'FeeDashboard',
        tone: colors.accent,
      },
      {
        title: 'Profile',
        value: 'Family',
        icon: 'account-child-outline',
        route: 'Profile',
      },
    ]}
    stats={[
      {
        title: 'Attendance',
        value: '92%',
        icon: 'chart-donut',
        tone: colors.success,
      },
      {
        title: 'Due Soon',
        value: '1',
        icon: 'bell-badge-outline',
        tone: colors.warning,
      },
    ]}
  />
);

export default DashboardScreen;
