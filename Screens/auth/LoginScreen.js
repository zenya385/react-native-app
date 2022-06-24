import React, { useState } from "react";

import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibility";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);
  // const [loaded] = useFonts({
  //   RobotoRegulal: require("../../assets/fonts/Roboto-Regular.ttf"),
  //   RobotoMedium: require("../../assets/fonts/Roboto-Medium.ttf"),
  //   RobotoBold: require("../../assets/fonts/Roboto-Bold.ttf"),
  // });
  // if (!loaded) {
  //   return null;
  // }

  // const passwordHandler = (text) => setPassword(text);
  // const emailHandler = (text) => setEmail(text);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  console.log(state);
  setstate(initialState)
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-105}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* <View style={styles.container}> */}
        <ImageBackground
          style={styles.imageBackground}
          source={require("../../assets/images/photoBg.jpg")}
        >
          <View style={styles.form}>
            {/* <View style={{...styles.form, marginBottom: isShowKeyboard ? -200 : 0 }}> */}
            <Text style={styles.text}>Войти</Text>
            <View>
              <TextInput
                style={styles.input}
                value={state.email}
                placeholder={"Адрес электронной почты"}
                placeholderTextColor="#BDBDBD"
                onChangeText={(value) =>
                  setstate((prevState) => ({ ...prevState, email: value }))}
                // onFocus={()=>{setIsShowKeyboard(true)}}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.inputPass}
                value={state.password}
                placeholder={"Пароль"}
                placeholderTextColor="#BDBDBD"
                onChangeText={(value) =>
                  setstate((prevState) => ({ ...prevState, password: value }))}
                secureTextEntry={passwordVisibility}
                // onFocus={()=>{setIsShowKeyboard(true)}}
              />
              <Pressable onPress={handlePasswordVisibility}>
                {/* <MaterialCommunityIcons
                  name={rightIcon}
                  size={22}
                  color="#232323"
                /> */}
                <Text style={styles.hiden}>Показать</Text>
              </Pressable>
            </View>

            <TouchableOpacity
              onPress={keyboardHide}
              activeOpacity={0.8}
              style={styles.btn}
            >
              <Text style={styles.btnTitle}>Войти</Text>
            </TouchableOpacity>

            <View style={styles.wraperTextBottom}>
              <Text style={styles.textBottom}>Нет аккаунт? </Text>
              <TouchableOpacity style={styles.btnLogIn} onPress={keyboardHide}>
                <Text style={styles.textBottom}>Зарегистрироваться</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* </View> */}
        </ImageBackground>
        {/* </View> */}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imageBackground: {
    flex: 1,
    height: 812,
    // width: 375,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",
    // height: "100%" ,
  },

  form: {
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
    paddingBottom: 144,
    top: 193,
  },

  text: {
    color: "#212121",
    fontFamily: "RobotoMedium",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 32,
    marginTop: 32,
  },

  input: {
    width: 343,
    backgroundColor: "#F6F6F6",
    height: 50,
    flexDirection: "row",
    borderRadius: 8,
    paddingHorizontal: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginHorizontal: 16,
    marginBottom: 16,
    fontFamily: "RobotoRegulal",
    fontSize: 16,
  },

  inputWrapper: {
    backgroundColor: "#F6F6F6",
    flexDirection: "row",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  inputPass: {
    width: "77%",
    fontFamily: "RobotoRegulal",
    fontSize: 16,
  },

  hiden: {
    color: "#1B4371",
    fontFamily: "RobotoRegulal",
    fontSize: 16,
  },

  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },

  btnTitle: {
    color: "#f0f8ff",
    fontSize: 18,
  },

  wraperTextBottom: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
