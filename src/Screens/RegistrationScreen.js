import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Pressable,      
  // Dimensions,       /* orientation*/
} from "react-native";
import { useFonts } from "expo-font";
// import { MaterialCommunityIcons } from "@expo/vector-icons";          /* icon eye*/
import { useTogglePasswordVisibility } from "../hooks/useTogglePasswordVisibility";

export default function RegistrationScreen() {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  useTogglePasswordVisibility();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [loaded] = useFonts({
    RobotoRegulal: require("../../assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("../../assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("../../assets/fonts/Roboto-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${email} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/photoBg.jpg")}
          resizeMode="cover"
          style={styles.imageBackground}
        ></ImageBackground>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.form}>
            {/* <View style={{...styles.form, marginBottom: isShowKeyboard ? 32 : 66 }}> */}
            <Text style={styles.text}>Регистрация</Text>
            <View style={styles.inputContainer}>
              <View>
                <TextInput
                  style={styles.input}
                  value={name}
                  placeholder={"Логин"}
                  placeholderTextColor="#BDBDBD"
                  onChangeText={nameHandler}
                  // onFocus={()=>{setIsShowKeyboard(true)}}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  value={email}
                  placeholder={"Адрес электронной почты"}
                  placeholderTextColor="#BDBDBD"
                  onChangeText={emailHandler}
                  // onFocus={()=>{setIsShowKeyboard(true)}}
                />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput
                  // style={styles.input}
                  value={password}
                  placeholder={"Пароль"}
                  placeholderTextColor="#BDBDBD"
                  onChangeText={passwordHandler}
                  secureTextEntry={passwordVisibility}
                  // onFocus={()=>{setIsShowKeyboard(true)}}
                />
                 <Pressable onPress={handlePasswordVisibility}>
                {/* <MaterialCommunityIcons
                  name={rightIcon}
                  size={22}
                  color="#232323"
                /> */}
                <Text textAlign="center">Показать</Text>
               </Pressable>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={onLogin}
                activeOpacity={0.8}
                style={styles.btn}
              >
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.wraperTextBottom}>
              <Text style={styles.textBottom}>Уже есть аккаунт? </Text>
              <TouchableOpacity style={styles.btnLogIn} onPress={onLogin}>
                <Text style={styles.textBottom}>Войти</Text>
              </TouchableOpacity>
            </View>
            {/* <Button onPress={onLogin} title={"Зарегистрироваться"} style={styles.button} /> */}
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: 375,
    height: 812,
    resizeMode: "cover",
    // justifyContent: "center",
    // alignItems: "center",
  },

  form: {
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffff",
    // marginTop: 263,
    // marginBottom:15,
  },

  text: {
    color: "#212121",
    fontFamily: "RobotoMedium" /*RobotoRegulal RobotoMedium RobotoBold */,
    marginBottom: 33,
    fontSize: 30,
    textAlign: "center",
    marginBottom: 33,
    marginTop: 92,
  },
  inputContainer:{

  },

inputWrapper:{
    backgroundColor: "#F6F6F6",
    // width: '100%',
    height: 50,
    flexDirection: 'row',
    borderRadius: 8,
    paddingRight: 16,
    paddingLeft: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginBottom: 16,
    marginHorizontal: 16,
    fontFamily: "RobotoRegulal",
    fontSize: 16,
  },


  input: {
  // width: 343,
    // width: '100%',
    backgroundColor: "#F6F6F6",
    height: 50,
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginHorizontal: 16,
    marginBottom: 16,
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
    marginBottom: 78,
    flexDirection: "row",
    // textAlign:"centr",
    justifyContent: "center",

    // flexWrap: 'nowrap',
  },

  textBottom: {
    color: "#212121",
    fontSize: 16,
    // textAlign: "center",
  },

  btnLogIn: {
    // color: "#212121",
    // fontSize: 16,
    // textAlign: "center",
  },
});
