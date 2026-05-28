import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/mainAdmin/DashboardScreen';
import CreateBranchScreen from '../screens/mainAdmin/CreateBranchScreen';
import ManageBranchesScreen from '../screens/mainAdmin/ManageBranchesScreen';
import ManageUsersScreen from '../screens/mainAdmin/ManageUsersScreen';
import SettingsScreen from '../screens/mainAdmin/SettingsScreen';
import {renderFeeStackScreens} from './FeeStackScreens';

const Stack = createNativeStackNavigator();

const MainAdminNavigator = () => (
  <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
    <Stack.Screen
      name="MainAdminDashboard"
      component={DashboardScreen}
      options={{title: 'Main Admin'}}
    />
    <Stack.Screen
      name="CreateBranch"
      component={CreateBranchScreen}
      options={{title: 'Create Branch'}}
    />
    <Stack.Screen
      name="ManageBranches"
      component={ManageBranchesScreen}
      options={{title: 'Branches'}}
    />
    <Stack.Screen
      name="ManageUsers"
      component={ManageUsersScreen}
      options={{title: 'Users'}}
    />
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{title: 'Settings'}}
    />
    {renderFeeStackScreens(Stack, {reports: true})}
  </Stack.Navigator>
);

export default MainAdminNavigator;
