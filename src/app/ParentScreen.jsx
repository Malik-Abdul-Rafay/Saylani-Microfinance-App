import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreenHeader from '../components/HomeScreenHeader';
import LabelHeader from '../components/LabelHeader';
import LoansScreen from '../screens/LoansScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreenLayout from '../screens/HomeScreen/HomeScreenLayout';

const Tab = createBottomTabNavigator();

const ParentScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Loan') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#09314A',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          elevation: 10,
          shadowColor: 'black',
          height: 60,
          paddingBottom: 10,
          borderTopWidth: 2,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
          fontFamily: 'Sen-Bold',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenLayout}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Loan"
        component={LoansScreen}
        options={{ header: () => <LabelHeader title={'Accounting Features'} /> }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{ header: () => null }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ header: () => null }}
      />
    </Tab.Navigator>
  );
};

export default ParentScreen;
