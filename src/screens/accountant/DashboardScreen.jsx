import React from 'react';
import {RoleDashboard} from '../../components';
import {USER_ROLES} from '../../config/constants';
import {colors} from '../../theme';

const DashboardScreen = ({navigation}) => (
  <RoleDashboard
    role={USER_ROLES.ACCOUNTANT}
    navigation={navigation}
    subtitle="Fee collection, cash uploads, and financial reporting"
    primaryActions={[
      {
        title: 'Fee Dashboard',
        value: 'Open',
        icon: 'finance',
        route: 'FeeDashboard',
      },
      {
        title: 'Upload Cash',
        value: '+',
        icon: 'cash-plus',
        route: 'UploadOfflinePayment',
        tone: colors.success,
      },
      {
        title: 'Due Report',
        value: 'Class',
        icon: 'file-chart-outline',
        route: 'ClassWiseFeeReport',
      },
      {
        title: 'Payments',
        value: 'History',
        icon: 'history',
        route: 'PaymentHistory',
      },
    ]}
    stats={[
      {
        title: 'Reports',
        value: 'Ready',
        icon: 'file-document-multiple-outline',
        tone: colors.info,
      },
      {
        title: 'Cash Desk',
        value: 'Active',
        icon: 'cash-register',
        tone: colors.accent,
      },
    ]}
  />
);

export default DashboardScreen;
