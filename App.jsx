import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/app/AppNavigation'
import SystemNavigationBar from 'react-native-system-navigation-bar';




const App = () => {
  SystemNavigationBar.setNavigationColor('#0066B3'); // Green color
  return (
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
  )
}

export default App