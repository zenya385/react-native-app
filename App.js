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

