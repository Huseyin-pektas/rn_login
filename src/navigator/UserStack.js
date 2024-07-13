import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomePage, ProfilePage } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()
const UserStack = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen  name='Home' component={HomePage} />
            <Stack.Screen  name='Profil' component={ProfilePage} />
        </Stack.Navigator>
    )
}

export default UserStack

const styles = StyleSheet.create({})