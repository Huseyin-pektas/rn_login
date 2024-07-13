import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'

const CostumButton = ({
    buttonText,handleOnPress,PressButtonColor,buttonColor,sizeWidth
}) => {
  return (
    <Pressable
    onPress={handleOnPress}
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? buttonColor : PressButtonColor,
        width: sizeWidth,
      },
      styles.button,
    ]} >

    <Text style={styles.buttonText}>{buttonText}</Text>
  </Pressable>
  )
}

export default CostumButton

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderWidth: 1,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 20
      },
    buttonText: {
        color: "#FBCD24",
        fontWeight: "bold",
        fontSize: 20
      },
})