import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'

const App = createStackNavigator()

const Routes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Home" component={Home} />
  </App.Navigator>
)

export default Routes
