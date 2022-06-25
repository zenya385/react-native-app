import React, { useState } from "react";
import {} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
// import Home from "./screens/mainScreen/Home";
import PostsScreen from "./screens/mainScreen/PostsScreen";
import CreatePostsScreen from "./screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./screens/mainScreen/ProfileScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        // options={{ headerShown: false }}
        name="Публикации"
        component={PostsScreen}
      />
      <MainTab.Screen
        // options={{ headerShown: false }}
        name="Создать публикацию"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        // options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default function App() {
  const routing = useRoute({});
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
      <StatusBar style="dark-content" />
      {routing}
    </NavigationContainer>
  );
}

