import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from './AuthStack'
import UserStack from './UserStack'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import app from '../../FirebaseConfig'

const RootNavigator = () => {
  const {isAuth} = useSelector(state => state.user)
    
  return (
   <NavigationContainer>
    {
  !isAuth ? <AuthStack/> : <UserStack/>    }
   </NavigationContainer>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})