

import React from 'react'

import { LoginPage,SignUp } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

const AuthStack = () => {

  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
        <Stack.Screen name='Login' component={LoginPage} />
        <Stack.Screen name='SignUp' component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthStack