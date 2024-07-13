import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const CostumTextInput = ({
  title,isSecureText,handleOnchangeText,handleValue,handlePlaceholder
}) => {
  return (
    <View style={styles.LoginContainer} >
        <Text style={styles.textLogin}>{title}</Text>
        <TextInput
           value={handleValue}
           onChangeText={handleOnchangeText}
          style={styles.textInput}
          placeholder={handlePlaceholder}
          secureTextEntry ={isSecureText}
        />
      </View>
  )
}

export default CostumTextInput

const styles = StyleSheet.create({
  LoginContainer: {
    width: "80%",

  },
  textLogin: {
    fontSize: 18,
    fontWeight: "bold",
    color:"black"
  },
  textInput: {
    borderBottomWidth: 1,
    width: "100%",
    height: 50,
    borderRadius: 5,
    textAlign:"center",
    fontWeight:"bold",
    fontSize:17
  },
})