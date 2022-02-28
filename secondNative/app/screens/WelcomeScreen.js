import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";
import AppsComponent from '../components/AppsComponent';
function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>Sell What you Don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppsComponent
          title="login"
          onPress={() => {
            console.log("login");
          }}
        />
        <AppsComponent
          title="register"
          color="secondary"
          onPress={() => {
            console.log("register");
          }}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    width: 100,
    backgroundColor: "white",
    borderRadius: 20,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline:{
    fontSize: 25,
    fontWeight: "600",
    paddingVertical:20
  }
});
export default WelcomeScreen;