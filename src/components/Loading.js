import { ActivityIndicator, Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Loading = ({changeIsLoading}) => {

  
  return (
    <View style={styles.container}>
        <ActivityIndicator
        size="large"
        color="black"
        />
      <Text style={styles.loadingText}>Loading...</Text>
       <Pressable 
       onPress={()=>changeIsLoading()}
       style={styles.PressableButton}>
       <Text style={styles.CloseButton}>Kapat</Text>
       </Pressable>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1, 
        position:"absolute",
        backgroundColor:"#FBCD24",
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center"
    },

    loadingText:{
        fontSize:20, 
        fontWeight:"bold",
        color:"black"
    },
    PressableButton:{
      borderWidth:1,
      marginVertical:15,
      paddingHorizontal:20,
      paddingVertical:10,
      borderRadius:5,
      backgroundColor:"black",
      position:"absolute",
      top:0,
      right:10

    },
    CloseButton:{
      color:"#FBCD24",
      fontSize:20,
    }
})