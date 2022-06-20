import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ImageBackground
} from "react-native";


const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
    </ImageBackground>
        <Text style={styles.text}>Привіт!</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            value={name}
            placeholder={"Username"}
            onChangeText={nameHandler}
            style={styles.input}
          />
          <TextInput
            value={password}
            placeholder={"Password"}
            onChangeText={passwordHandler}
            style={styles.input}
          />
          <Button onPress={onLogin} title={"Login"} style={styles.input} />
        </KeyboardAvoidingView>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    // background: url(photo-1536528087222-ef43dd3bb0f3.jpg),
    alignItems: "center",
    // justifyContent: "center",
    justifyContent: "flex-end",
    // paddingBottom: 100,
    // paddingTop: 30
  },
  image:{
    flex: 1,
    justifyContent: "center"
  },
  
  text: {
    color: "white",
    fontSize: 50,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "#616550",
    marginBottom: 10,
    borderRadius: 5,
  },
  
});
