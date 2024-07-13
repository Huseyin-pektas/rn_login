import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomePage = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.text} >HomePage</Text>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({

container:{
  flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',

},
text:{
  color:"white",
  fontSize:20
}
})