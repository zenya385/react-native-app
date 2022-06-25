import React, { useState } from 'react';
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { } from 'react-native';
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from './screens/auth/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';



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
    <NavigationContainer>
      <StatusBar style="dark-content"/>    
     {/* <RegistrationScreen/> */}
     <LoginScreen/>
    </NavigationContainer>
  );
}


