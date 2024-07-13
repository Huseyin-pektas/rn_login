// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyC7afHGMtsFKFFd3PJrBbpHC9hhGhs2EiU",
  authDomain: "test-app-95180.firebaseapp.com",
  projectId: "test-app-95180",
  storageBucket: "test-app-95180.appspot.com",
  messagingSenderId: "732070461306",
  appId: "1:732070461306:web:521de1b7c0af96a47c20c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export default app