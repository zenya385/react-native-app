import React, { useState } from "react";
import {} from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import { useRoute } from "./router";
// import Home from "./screens/mainScreen/Home";





export default function App() {
const routing = useRoute (null)    /*============================    {}      null    */ 
  const [loaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark-content" />
      {routing}
    </NavigationContainer>
  );
}

