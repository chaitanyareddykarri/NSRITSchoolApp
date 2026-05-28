import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/parent/DashboardScreen';
import AttendanceScreen from '../screens/parent/AttendanceScreen';
import ProfileScreen from '../screens/parent/ProfileScreen';
import StudentSelectorScreen from '../screens/parent/StudentSelectorScreen';
import {renderFeeStackScreens} from './FeeStackScreens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ParentHomeStack = () => (
  <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
    <Stack.Screen
      name="ParentDashboard"
      component={DashboardScreen}
      options={{title: 'Home'}}
    />
    {renderFeeStackScreens(Stack)}
  </Stack.Navigator>
);

const ParentNavigator = () => (
  <Tab.Navigator screenOptions={{headerTitleAlign: 'center'}}>
    <Tab.Screen
      name="Home"
      component={ParentHomeStack}
      options={{headerShown: false, title: 'Home'}}
    />
    <Tab.Screen name="Attendance" component={AttendanceScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Students" component={StudentSelectorScreen} />
  </Tab.Navigator>
);

export default ParentNavigator;
