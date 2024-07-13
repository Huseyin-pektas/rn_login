import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { collection, addDoc ,getDocs, doc, deleteDoc,updateDoc} from "firebase/firestore";
import { db } from '../../FirebaseConfig';
import { CostumButton } from '../components';

const HomePage = () => {

  const [data, setData] = useState([])

  console.log("data", data);
// send data 
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero to Hero",
        content: "React Native tutorial for beginner",
        lesson: 95
      })
      console.log("document written with ID", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);

    }

  }

  // get data from firebase

const getData =  async ()=>{
  const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
  querySnapshot.forEach((doc) => {
    setData([...data ,doc.data()]);
  });
}
// delete data from firebase
const deleteData = async()=>{
  await deleteDoc(doc(db, "reactNativeLesson", "yMQmAZbJh3eMXvodCCHG"));
}

 const updateData = async() =>{
  const lessonData = doc(db, "reactNativeLesson","04vRl3UysCpRDHML0VwR");

    await updateDoc(lessonData,{
      lesson:35
    })
 }

  return (
    <View style={styles.container} >
<Text>{data?.title}</Text>
<Text>{data?.lesson}</Text>
<Text>{data?.content}</Text>

      <Text style={styles.text} >HomePage</Text>
      <CostumButton
        buttonText=" Save "
        sizeWidth="30%"
        buttonColor="gray"
        PressButtonColor="black"
        handleOnPress={sendData}
      />
      <CostumButton
        buttonText=" get data "
        sizeWidth="30%"
        buttonColor="gray"
        PressButtonColor="black"
        handleOnPress={getData}
      />
      <CostumButton
        buttonText=" delete data "
        sizeWidth="30%"
        buttonColor="gray"
        PressButtonColor="black"
        handleOnPress={deleteData}
      />
      <CostumButton
        buttonText=" update data "
        sizeWidth="30%"
        buttonColor="gray"
        PressButtonColor="black"
        handleOnPress={updateData}
      />
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',

  },
  text: {
    color: "white",
    fontSize: 20
  }
})