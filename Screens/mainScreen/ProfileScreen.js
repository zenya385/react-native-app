import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native";



export default  function ProfileScreen () {
    
    return ( 
        <View  style={styles.container}>
        <Text>ProfileScreen</Text>
        </View>
     );
}


const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor:"#ffffff",
    justifyContent:"center",
    alignItems:"center",
},
})