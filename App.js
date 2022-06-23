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

// ============================================


// import React, { useState } from "react";
// import { useFonts } from "expo-font";
// import { useTogglePasswordVisibility } from "./src/hooks/useTogglePasswordVisibility";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Alert,
//   TextInput,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
//   ImageBackground,
//   Pressable,
//   KeyboardAvoidingView,
//   // SafeAreaView,
//   //   Dimensions    /* orientation*/
// } from "react-native";
// // import { MaterialCommunityIcons } from "@expo/vector-icons";          /* icon eye*/

// export default function App() {
//   const { passwordVisibility, rightIcon, handlePasswordVisibility } =
//     useTogglePasswordVisibility();
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   // const [isShowKeyboard, setIsShowKeyboard] = useState(false);
//   const [loaded] = useFonts({
//     RobotoRegulal: require("./assets/fonts/Roboto-Regular.ttf"),
//     RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
//     RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
//   });
//   if (!loaded) {
//     return null;
//   }

//   const passwordHandler = (text) => setPassword(text);
//   const emailHandler = (text) => setEmail(text);

//   const onLogin = () => {
//     Alert.alert("Credentials", `${password} + ${email}`);
//   };
//   console.log(`${password} + ${email}`);

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS == "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         {/* <View style={styles.container}> */}
//           <ImageBackground
//             style={styles.imageBackground}
//             source={require("./assets/images/photoBg.jpg")}
//           >
//             <View style={styles.form}>
//               {/* <View style={{...styles.form, marginBottom: isShowKeyboard ? 32 : 61 }}> */}
//               <Text style={styles.text}>Войти</Text>
//               <View>
//                 <TextInput
//                   style={styles.input}
//                   value={email}
//                   placeholder={"Адрес электронной почты"}
//                   placeholderTextColor="#BDBDBD"
//                   onChangeText={emailHandler}
//                   // onFocus={()=>{setIsShowKeyboard(true)}}
//                 />
//               </View>
//               <View style={styles.inputWrapper}>
//                 <TextInput
//                   style={styles.inputPass}
//                   value={password}
//                   placeholder={"Пароль"}
//                   placeholderTextColor="#BDBDBD"
//                   onChangeText={passwordHandler}
//                   secureTextEntry={passwordVisibility}
//                   // onFocus={()=>{setIsShowKeyboard(true)}}
//                 />
//                 <Pressable onPress={handlePasswordVisibility}>
//                   {/* <MaterialCommunityIcons
//                   name={rightIcon}
//                   size={22}
//                   color="#232323"
//                 /> */}
//                   <Text style={styles.hiden}>Показать</Text>
//                 </Pressable>
//               </View>

//               <TouchableOpacity
//                 onPress={onLogin}
//                 activeOpacity={0.8}
//                 style={styles.btn}
//               >
//                 <Text style={styles.btnTitle}>Войти</Text>
//               </TouchableOpacity>

//               <View style={styles.wraperTextBottom}>
//                 <Text style={styles.textBottom}>Нет аккаунт? </Text>
//                 <TouchableOpacity style={styles.btnLogIn} onPress={onLogin}>
//                   <Text style={styles.textBottom}>Зарегистрироваться</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//             {/* </View> */}
//           </ImageBackground>
//         {/* </View> */}
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   imageBackground: {
//     flex: 1,
//     height: 812,
//     width: 375,
//     resizeMode: "cover",
//     justifyContent: "flex-end",
//     alignItems: "center",

//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     width: "100%",
//   },

//   form: {
//     height: 549,
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     backgroundColor: "#ffffff",
//     top: 397,
//     // ========================
//     //  alignItems: "center",
//     // justifyContent: "flex-end",
//     // marginTop: 263,
//     // marginBottom:15,

//     // alignItems: "center",
//   },

//   text: {
//     color: "#212121",
//     fontFamily: "RobotoMedium" /*RobotoRegulal RobotoMedium RobotoBold */,
//     fontSize: 30,
//     textAlign: "center",
//     marginBottom: 32,
//     marginTop: 32,
//   },

//   // inputContainer: {},

//   input: {
//     width: 343,
//     // width: '100%',
//     backgroundColor: "#F6F6F6",
//     height: 50,
//     flexDirection: "row",
//     borderRadius: 8,
//     paddingHorizontal: 16,
//     borderColor: "#E8E8E8",
//     borderWidth: 1,
//     marginHorizontal: 16,
//     marginBottom: 16,
//     fontFamily: "RobotoRegulal",
//     fontSize: 16,
//   },

//   inputWrapper: {
//     backgroundColor: "#F6F6F6",
//     // width: '100%',
//     // height: 50,
//     flexDirection: "row",
//     borderRadius: 8,
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//     borderColor: "#E8E8E8",
//     borderWidth: 1,
//     marginBottom: 16,
//     marginHorizontal: 16,
//     // fontFamily: "RobotoRegulal",
//     // fontSize: 16,
//   },
//   inputPass: {
//     width: "77%",
//     fontFamily: "RobotoRegulal",
//     fontSize: 16,
//   },

//   hiden: {
//     color: "#1B4371",
//     fontFamily: "RobotoRegulal",
//     fontSize: 16,
//   },

//   btn: {
//     backgroundColor: "#FF6C00",
//     height: 51,
//     borderRadius: 100,
//     marginTop: 27,
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: 16,
//     marginBottom: 16,
//   },

//   btnTitle: {
//     color: "#f0f8ff",
//     fontSize: 18,
//   },

//   wraperTextBottom: {
//     // marginBottom: 132,
//     flexDirection: "row",
//     // textAlign:"centr",
//     justifyContent: "center",
//     // flexWrap: 'nowrap',
//   },

//   // textBottom: {
//   //   color: "#212121",
//   //   fontSize: 16,
//   //   // textAlign: "center",
//   // },

//   // btnLogIn: {
//   //   // color: "#212121",
//   //   // fontSize: 16,
//   //   // textAlign: "center",
//   // },
// });
