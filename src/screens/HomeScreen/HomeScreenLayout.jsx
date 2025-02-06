import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoanApplyScreen from './LoanApplyScreen';

const HomeScreenLayout = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="LoanApply" component={LoanApplyScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeScreenLayout;