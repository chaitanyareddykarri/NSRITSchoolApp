import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/branchAdmin/DashboardScreen';
import ManageTeachersScreen from '../screens/branchAdmin/ManageTeachersScreen';
import ManageStudentsScreen from '../screens/branchAdmin/ManageStudentsScreen';
import AttendanceOverviewScreen from '../screens/branchAdmin/AttendanceOverviewScreen';
import BranchSettingsScreen from '../screens/branchAdmin/BranchSettingsScreen';
import {renderFeeStackScreens} from './FeeStackScreens';

const Stack = createNativeStackNavigator();

const BranchAdminNavigator = () => (
  <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
    <Stack.Screen
      name="BranchAdminDashboard"
      component={DashboardScreen}
      options={{title: 'Branch Admin'}}
    />
    <Stack.Screen
      name="ManageTeachers"
      component={ManageTeachersScreen}
      options={{title: 'Teachers'}}
    />
    <Stack.Screen
      name="ManageStudents"
      component={ManageStudentsScreen}
      options={{title: 'Students'}}
    />
    <Stack.Screen
      name="AttendanceOverview"
      component={AttendanceOverviewScreen}
      options={{title: 'Attendance'}}
    />
    <Stack.Screen
      name="BranchSettings"
      component={BranchSettingsScreen}
      options={{title: 'Settings'}}
    />
    {renderFeeStackScreens(Stack)}
  </Stack.Navigator>
);

export default BranchAdminNavigator;
