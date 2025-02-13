import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoanApplyScreen from './LoanApplyScreen';

const Stack = createStackNavigator();
const HomeScreenLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="LoanApply" component={LoanApplyScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeScreenLayout;