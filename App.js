import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { View } from 'react-native';
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from './src/Screens/LoginScreen';




export default function App() {
 
  return (
    <View>
      <StatusBar style="dark-content" />    
     <RegistrationScreen/>
     <LoginScreen/>
    </View>
  );
}

