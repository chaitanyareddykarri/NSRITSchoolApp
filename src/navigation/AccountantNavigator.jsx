import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/accountant/DashboardScreen';
import ClassWiseFeeReportScreen from '../screens/fees/ClassWiseFeeReportScreen';
import DueStudentsScreen from '../screens/fees/DueStudentsScreen';
import FeeDashboardScreen from '../screens/fees/FeeDashboardScreen';
import FeeLedgerScreen from '../screens/fees/FeeLedgerScreen';
import PaidStudentsScreen from '../screens/fees/PaidStudentsScreen';
import PaymentHistoryScreen from '../screens/fees/PaymentHistoryScreen';
import StudentFeeDetailsScreen from '../screens/fees/StudentFeeDetailsScreen';

// New Custom Stitch accountant screens
import RecordPaymentScreen from '../screens/accountant/RecordPaymentScreen';
import ResultPostingScreen from '../screens/accountant/ResultPostingScreen';
import CreateNotificationScreen from '../screens/accountant/CreateNotificationScreen';
import AuditLogsScreen from '../screens/accountant/AuditLogsScreen';
import AccountantProfileScreen from '../screens/accountant/AccountantProfileScreen';

const Stack = createNativeStackNavigator();

const AccountantNavigator = () => (
  <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
    <Stack.Screen
      name="AccountantDashboard"
      component={DashboardScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="RecordPayment"
      component={RecordPaymentScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ResultPosting"
      component={ResultPostingScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="CreateNotification"
      component={CreateNotificationScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="AuditLogs"
      component={AuditLogsScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="AccountantProfile"
      component={AccountantProfileScreen}
      options={{headerShown: false}}
    />

    {/* Shared Fee screens */}
    <Stack.Screen
      name="FeeDashboard"
      component={FeeDashboardScreen}
      options={{title: 'Fees'}}
    />
    <Stack.Screen
      name="StudentFeeDetails"
      component={StudentFeeDetailsScreen}
      options={{title: 'Student Fee'}}
    />
    <Stack.Screen
      name="PaymentHistory"
      component={PaymentHistoryScreen}
      options={{title: 'Payments'}}
    />
    <Stack.Screen
      name="FeeLedger"
      component={FeeLedgerScreen}
      options={{title: 'Ledger'}}
    />
    <Stack.Screen
      name="DueStudents"
      component={DueStudentsScreen}
      options={{title: 'Due Students'}}
    />
    <Stack.Screen
      name="PaidStudents"
      component={PaidStudentsScreen}
      options={{title: 'Paid Students'}}
    />
    {/* Map UploadOfflinePayment to the new RecordPaymentScreen for compatibility */}
    <Stack.Screen
      name="UploadOfflinePayment"
      component={RecordPaymentScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ClassWiseFeeReport"
      component={ClassWiseFeeReportScreen}
      options={{title: 'Class-wise Report'}}
    />
  </Stack.Navigator>
);

export default AccountantNavigator;
