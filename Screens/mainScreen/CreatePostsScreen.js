import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { FontAwesome5 } from "@expo/vector-icons";
{
  /* <FontAwesome5 name="trash-alt" size={24} color="black" /> */
}
{
  /* <Feather name="map-pin" size={24} color="black" /> */
}

export default function CreatePostsScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-105}
    >
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
      >
        <View style={styles.photoView}>
          {/* <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                // await MediaLibrary.createAssetAsync(uri);
              }
            }}
          >
            <View style={styles.takePhotoOut}>
              <View style={styles.takePhotoInner}></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
      <Text style={styles.textLoadPhoto}>Загрузите фото</Text>
      <View>
        <TextInput
          style={styles.input}
          //   value={state.email}
          placeholder={"Название"}
          placeholderTextColor="#BDBDBD"
          // onChangeText={(value) =>
          //   setstate((prevState) => ({ ...prevState, email: value }))
          // }
          // onFocus={()=>{setIsShowKeyboard(true)}}
        />
        <Feather name="map-pin" size={24} color="black" />
        <TextInput
          style={styles.input}
          // value={state.email}
          placeholder={"Месность"}
          placeholderTextColor="#BDBDBD"
          // onChangeText={(value) =>
          //   setstate((prevState) => ({ ...prevState, email: value }))
          // }
          // onFocus={()=>{setIsShowKeyboard(true)}}
        />
        <TouchableOpacity style={styles.sendBtn}>
          <Text style={styles.sendBtnText}>Опубликовать</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn}>
          <FontAwesome5 name="trash-alt" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  camera: {
    // flex: 1,
    width: 343,
    height: 240,
    top: 32,
    left: 16,
    bottom: 8,
    justifyContent: "center",
    borderRadius: 8,
  },
  photoView: {
    // // flex: 1,
    // backgroundColor: "transparent",
    // justifyContent: "flex-end",
    // borderRadius: 8,
  },

  //   flipContainer: {
  //     flex: 0.1,
  //     alignSelf: "flex-end",
  //   },

  button: {
    width: "100%",
    height: "100%",
  },

  //   takePhotoOut: {
  //     borderWidth: 2,
  //     borderColor: "white",
  //     height: 50,
  //     width: 50,
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     borderRadius: 50,
  //   },

  //   takePhotoInner: {
  //     borderWidth: 2,
  //     borderColor: "white",
  //     height: 40,
  //     width: 40,
  //     backgroundColor: "white",
  //     borderRadius: 50,
  //   },

  textLoadPhoto: {
    top: 38,
    left: 16,
    color: "#BDBDBD",
    fontFamily: "RobotoMedium",
    fontSize: 16,
  },

  input: {
    height: 50,
    marginTop: 32,
    marginHorizontal: 16,
    // color:"#BDBDBD",
    fontFamily: "RobotoMedium",
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },

  sendBtn: {
    marginHorizontal: 16,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  sendBtnText: {
    color: "#BDBDBD",
    fontFamily: "RobotoMedium",
    fontSize: 16,
  },

  deleteBtn: {
    marginHorizontal: 16,
    height: 51,
    width: 70,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 72,
    marginHorizontal: 152,
  },
});
