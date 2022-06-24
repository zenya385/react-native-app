import React, { useState } from 'react';
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { } from 'react-native';
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from './Screens/auth/LoginScreen';



export default function App() {
  const [loaded] = useFonts({
    RobotoRegulal: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
 
  return (
    <>
      <StatusBar style="dark-content"/>    
     {/* <RegistrationScreen/> */}
     <LoginScreen/>
    </>
  );
}

// ============================================

