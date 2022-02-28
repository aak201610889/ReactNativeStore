import React from 'react';
import { Image, StyleSheet, Text, View, Platform } from "react-native-web";
import {MaterialCommunityIcons}from '@expo/vector-icons';
import colors from '../config/colors';
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
      </View>
      {/* <MaterialCommunityIcons name="email" size={200} color='red' /> */}
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair1.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
    borderRadius: 50,
    shadowColor: "blue",
    // shadowOffset: { width: 5, height: 5 },
    // shadowOpacity: 0.5,
    // shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  deleteText: {
    fontSize: 20,
    color:Platform.OS==="android"?"tomato":"white",
    textAlign: 'center',
    marginBottom: 50,
    fontWeight: "600",
    textTransform: "uppercase",
    textDecorationLine: "line-through",
    letterSpacing: 3,
    
  }
});

export default ViewImageScreen;