import React from 'react';   
import { createStackNavigator } from '@react-navigation/stack';      
import SplashScreen from './SplashScreen';  
import ParentScreen from './ParentScreen'; 
import LoginScreen from '../screens/LoginScreen';    
import RegisterScreen from '../screens/RegisterScreen'; 

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={LoginScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={RegisterScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="Parent" component={ParentScreen} options={{ headerShown: false }} />
    </Stack.Navigator>   
  );     
}; 
 
export default AppNavigation;   