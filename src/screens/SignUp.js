//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import { CostumTextInput, CostumButton } from '../components';
import FontAwesome5 from "react-native-vector-icons/dist/FontAwesome5"
import Twitter from "react-native-vector-icons/dist/Entypo"
import Facebook from "react-native-vector-icons/dist/Entypo"
import Google from "react-native-vector-icons/dist/FontAwesome"

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.signupTitleContainer} >
                <FontAwesome5 name="user-check" size={30} color="black" />
                <Text style={styles.signupTitleText} >Sign Up</Text>
            </View>
            <View style={styles.signupTextInput} >
                <CostumTextInput
                    title="Name"
                    isSecureText={false}
                    handlePlaceholder="Enter Your Name"
                    handleOnchangeText={setName}
                    handleValue={name}
                />
                <CostumTextInput
                    title="Email"
                    isSecureText={false}
                    handlePlaceholder="Enter Your Email"
                    handleOnchangeText={setEmail}
                    handleValue={email}
                />
                <CostumTextInput
                    title="Create Password"
                    isSecureText={true}
                    handlePlaceholder="Enter Your Create Password"
                    handleOnchangeText={setPassword}
                    handleValue={password}
                />
            </View>
            <View style={styles.signupOption} >
                <CostumButton
                    buttonText="Sign Up"
                    handleOnPress={console.log(email, name, password)}
                    PressButtonColor="black"
                    buttonColor="gray"
                    sizeWidth="80%"
                />
                <View style={{
                    flexDirection:"row"
                }} >
                    <TouchableOpacity>
                    <Google  style ={{padding:10}}
                     name="google-plus-official"
                      size={45} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Facebook style ={{padding:10}}
                     name="facebook-with-circle" 
                     size={40} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Twitter style ={{padding:10}}
                     name="twitter-with-circle" 
                     size={40} color="black" />
                    </TouchableOpacity>

                </View>

                <Pressable>
                    <Text style={{fontSize:15, fontWeight:600}} >Already have an account?
                     <Text style={{fontSize:17, fontWeight:"bold"}} >Login</Text>
                     </Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBCD24',
    },
    signupTitleText: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
        color: "black"
    },
    signupTitleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    signupTextInput: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 2,
        paddingVertical: 20
    },
    signupOption: {
        alignItems: "center",
        flex: 3,
        width: "100%",
        justifyContent: "space-around"
    }

});
export default SignUp;
