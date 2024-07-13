

import React, { useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Loading, CostumButton,CostumTextInput } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail,setIsLoading,setPassword,setLogin } from '../redux/userSlice';
import { login } from '../redux/userSlice';

function LoginPage({ navigation }) {

  const {isLoading} = useSelector(state =>state.user)

  const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
  // const [isLoading, setIsLoading] = useState(false)


  const dispatch = useDispatch()

  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.WelcomeText}>Hoşgeldiniz  </Text>

      <Image style={styles.image}
        source={require("../assets/image/login.png")}
      />

      <CostumTextInput
        title="E mail"
        isSecureText={false}
        handleOnchangeText={(text)=>setEmail(text)}
        handleValue={email}
        handlePlaceholder=" Enter Your Email"
      />
      <CostumTextInput
        title="Password"
        isSecureText={true}
        handleOnchangeText={(password)=> setPassword(password)}
        handleValue={password}
        handlePlaceholder=" Enter Your Password"
      />

      <CostumButton
      sizeWidth="80%"
      buttonText="Login"
      handleOnPress ={() => dispatch(login({email,password}))}
      buttonColor="red"
      PressButtonColor ="black"
      />
      <CostumButton
      sizeWidth="30%"
      buttonText="Sign Up"
      handleOnPress ={() => navigation.navigate("SignUp")}
      buttonColor="lightgray"
      PressButtonColor ="gray"
      />
      {
        isLoading ? <Loading changeIsLoading={() => dispatch(setIsLoading(false))} /> : null
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBCD24"
  },
  WelcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "black"
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10
  }
});

export default LoginPage;
