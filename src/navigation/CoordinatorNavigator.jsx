import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/coordinator/DashboardScreen';
import AssignTeachersScreen from '../screens/coordinator/AssignTeachersScreen';
import WingAttendanceScreen from '../screens/coordinator/WingAttendanceScreen';
import EditAttendanceScreen from '../screens/coordinator/EditAttendanceScreen';
import WingStudentsScreen from '../screens/coordinator/WingStudentsScreen';
import {renderFeeStackScreens} from './FeeStackScreens';

const Stack = createNativeStackNavigator();

const CoordinatorNavigator = () => (
  <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
    <Stack.Screen
      name="CoordinatorDashboard"
      component={DashboardScreen}
      options={{title: 'Coordinator'}}
    />
    <Stack.Screen
      name="AssignTeachers"
      component={AssignTeachersScreen}
      options={{title: 'Assign Teachers'}}
    />
    <Stack.Screen
      name="WingAttendance"
      component={WingAttendanceScreen}
      options={{title: 'Wing Attendance'}}
    />
    <Stack.Screen
      name="EditAttendance"
      component={EditAttendanceScreen}
      options={{title: 'Correct Attendance'}}
    />
    <Stack.Screen
      name="WingStudents"
      component={WingStudentsScreen}
      options={{title: 'Wing Students'}}
    />
    {renderFeeStackScreens(Stack)}
  </Stack.Navigator>
);

export default CoordinatorNavigator;
