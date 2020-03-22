import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import MaterialButtonGrey from "../components/MaterialButtonGrey";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import MaterialButtonDark from "../components/MaterialButtonDark";
import * as Font from "expo-font";

export class connection extends React.PureComponent {
  async UNSAFE_componentWillMount() {
    await Font.loadAsync({
      "armata-regular": require("../../../../assets/fonts/armata-regular.ttf")
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated={false} hidden={false}></StatusBar>
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
          <EvilIconsIcon
            name="sc-facebook"
            style={styles.icon2}
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
        <Text style={styles.lOgIn}>lOG IN</Text>
        <View style={styles.materialButtonGrey1Stack}>
          <MaterialButtonGrey
            text1="Continue With Google"
            style={styles.materialButtonGrey1}
          ></MaterialButtonGrey>
          <EvilIconsIcon
            name="sc-google-plus"
            style={styles.icon4}
          ></EvilIconsIcon>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(13,0,0,1)",
    justifyContent: "space-between"
  },
  materialButtonGrey: {
    top: 0,
    left: 0,
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
    left: 23,
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
    left: 0,
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
    left: 9,
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
    width: 217,
    height: 47,
    borderRadius: 100,
    marginTop: 285,
    marginLeft: 80
  },
  image: {
    width: 296,
    height: 108,
    marginTop: -519,
    marginLeft: 37
  },
  lOgIn: {
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
    top: 0,
    left: 0,
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
    top: 10,
    left: 11,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 24
  },
  materialButtonGrey1Stack: {
    width: 217,
    height: 46,
    marginTop: -199,
    marginLeft: 80
  }
});
