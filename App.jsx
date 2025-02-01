import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/app/AppNavigation'

const App = () => {
  return (
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
  )
}

export default App