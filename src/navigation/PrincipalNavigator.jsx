import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/principal/DashboardScreen';
import AcademicStructureScreen from '../screens/principal/AcademicStructureScreen';
import CreateClassScreen from '../screens/principal/CreateClassScreen';
import CreateSectionScreen from '../screens/principal/CreateSectionScreen';
import ViewAllAttendanceScreen from '../screens/principal/ViewAllAttendanceScreen';
import {renderFeeStackScreens} from './FeeStackScreens';

const Stack = createNativeStackNavigator();

const PrincipalNavigator = () => (
  <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
    <Stack.Screen
      name="PrincipalDashboard"
      component={DashboardScreen}
      options={{title: 'Principal'}}
    />
    <Stack.Screen
      name="AcademicStructure"
      component={AcademicStructureScreen}
      options={{title: 'Academic Structure'}}
    />
    <Stack.Screen
      name="CreateClass"
      component={CreateClassScreen}
      options={{title: 'Create Class'}}
    />
    <Stack.Screen
      name="CreateSection"
      component={CreateSectionScreen}
      options={{title: 'Create Section'}}
    />
    <Stack.Screen
      name="ViewAllAttendance"
      component={ViewAllAttendanceScreen}
      options={{title: 'Attendance'}}
    />
    {renderFeeStackScreens(Stack, {reports: true})}
  </Stack.Navigator>
);

export default PrincipalNavigator;
