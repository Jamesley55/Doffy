import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import MaterialButtonGrey from "../components/MaterialButtonGrey";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import MaterialButtonDark from "../components/MaterialButtonDark";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo/build/launch/AppLoading";

export function connection({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonGreyStack}>
        <MaterialButtonGrey
          text1="Continue With Apple "
          style={styles.materialButtonGrey}
        ></MaterialButtonGrey>
        <IoniconsIcon name="logo-apple" style={styles.icon}></IoniconsIcon>
      </View>
      <View style={styles.materialButtonViolet1Stack}>
        <MaterialButtonViolet1
          text1="Continue with Facebook "
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet1>
        <EvilIconsIcon name="sc-facebook" style={styles.icon2}></EvilIconsIcon>
        <MaterialButtonGrey
          text1="Continue With Google"
          style={styles.materialButtonGrey1}
        ></MaterialButtonGrey>
        <EvilIconsIcon
          name="sc-google-plus"
          style={styles.icon4}
        ></EvilIconsIcon>
      </View>
      <Text style={styles.welcome}>Welcome</Text>
      <MaterialButtonDark
        text1="SIGN UP FREE"
        style={styles.materialButtonDark}
      ></MaterialButtonDark>
      <Image
        source={require("../assets/images/shappeal.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text
        style={styles.lOgIn}
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        lOG IN
      </Text>
      <View style={styles.materialButtonGrey1Stack}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(13,0,0,1)",
    justifyContent: "center"
  },
  materialButtonGrey: {
    top: 0,
    left: 20,
    width: 217,
    height: 46,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 99,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(224,224,224,1)"
  },
  icon: {
    top: 8,
    left: 43,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 24,
    width: 25,
    height: 24
  },
  materialButtonGreyStack: {
    width: 217,
    height: 46,
    marginTop: 322,
    marginLeft: 80
  },
  materialButtonViolet1: {
    top: 0,
    left: 20,
    width: 217,
    height: 46,
    position: "absolute",
    borderRadius: 100,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(82,155,251,1)"
  },
  icon2: {
    top: 10,
    left: 29,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    height: 24,
    width: 24
  },
  materialButtonViolet1Stack: {
    width: 217,
    height: 46,
    marginTop: 32,
    marginLeft: 80
  },
  welcome: {
    left: 20,
    width: 200,
    height: 47,
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    fontFamily: "armata-regular",
    textAlign: "center",
    marginTop: -197,
    marginLeft: 88
  },
  materialButtonDark: {
    left: 20,
    width: 217,
    height: 47,
    borderRadius: 100,
    marginTop: 285,
    marginLeft: 80
  },
  image: {
    left: 20,
    width: 296,
    height: 108,
    marginTop: -519,
    marginLeft: 37
  },
  lOgIn: {
    left: 20,
    top: 120,
    width: 161,
    height: 21,
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "armata-regular",
    textAlign: "center",
    marginTop: 432,
    marginLeft: 108
  },
  materialButtonGrey1: {
    top: 80,
    left: 20,
    width: 217,
    height: 46,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 99,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(224,224,224,1)"
  },
  icon4: {
    top: 90,
    left: 31,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 24
  },
  materialButtonGrey1Stack: {
    width: "100%",
    height: 46,
    marginTop: 199,
    marginLeft: 80
  }
});
