import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import PostsScreen from "./screens/mainScreen/PostsScreen";
import CreatePostsScreen from "./screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./screens/mainScreen/ProfileScreen";

// icon import
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

// import Home from './screens/mainScreen/Home';
// import { FontAwesome5 } from '@expo/vector-icons'; 
// <FontAwesome5 name="trash-alt" size={24} color="black" />

// import { Feather } from '@expo/vector-icons'; 
// <Feather name="log-out" size={24} color="black" />

// import { MaterialCommunityIcons } from '@expo/vector-icons'; 
// <MaterialCommunityIcons name="arrow-left" size={24} color="black" />

// import { Feather } from '@expo/vector-icons'; 
// <Feather name="map-pin" size={24} color="black" />

// import { Feather } from '@expo/vector-icons'; 
// <Feather name="message-circle" size={24} color="black" /> 

// import { Feather } from '@expo/vector-icons'; 
// <Feather name="thumbs-up" size={24} color="black" />

export const useRoute = (isAuth) => {
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
      <MainTab.Navigator screenOptions={{tabBarShowLabel:false}}  >
        <MainTab.Screen
        activeColor="#f0edf6"
          options={{tabBarIcon:({focused, size, color})  => <AntDesign name="appstore-o" size={size} color={color} />
        }}
          name="????????????????????"
          component={PostsScreen}
        />
        <MainTab.Screen
          options={{tabBarIcon:({focused, size, color}) => <Ionicons name="ios-add" size={size} color={color} />
        }}
          name="?????????????? ????????????????????"
          component={CreatePostsScreen}
        />
        <MainTab.Screen
          options={{tabBarIcon:({focused, size, color}) => <Feather name="user" size={24} color={color} />
        }}
          name="Profile"
          component={ProfileScreen}
        />
   
         
      </MainTab.Navigator>
    );
  };



