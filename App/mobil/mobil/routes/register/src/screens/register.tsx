import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialMessageTextbox from "../Component/MaterialMessageTextbox";
import * as Font from "expo-font";
import MaterialMessagePassword from "../Component/MaterialMessagePassword.js";

export function register({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => alert("image clicked")}>
        <Image
          source={require("../assets/images/shappeal.png")}
          resizeMode="contain"
          style={styles.image1}
        />
      </TouchableOpacity>
      <Text style={styles.loremIpsum1}>
        Pease enter a username &amp; password
      </Text>
      <View style={styles.icon1ColumnRow}>
        <View style={styles.icon1Column}>
          <EntypoIcon name="mail" style={styles.icon1}></EntypoIcon>
          <EntypoIcon name="lock" style={styles.icon2}></EntypoIcon>
          <EntypoIcon name="lock" style={styles.icon3}></EntypoIcon>
        </View>
        <View style={styles.materialMessageTextbox1Column}>
          <MaterialMessageTextbox
            textInput1="Email"
            style={styles.materialMessageTextbox1}
          ></MaterialMessageTextbox>
          <MaterialMessagePassword
            textInput1="Password"
            style={styles.materialMessageTextbox2}
          ></MaterialMessagePassword>
          <MaterialMessagePassword
            text1="Input "
            textInput1="Re-enter Password"
            style={styles.materialMessageTextbox3}
          ></MaterialMessagePassword>
        </View>
      </View>
      <Text
        style={styles.signIn}
        onPress={() => {
          navigation.navigate("homepage");
        }}
      >
        SIGN IN
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(155,145,145,30)"
  },
  image1: {
    alignContent: "center",
    width: 296,
    height: 70,
    marginTop: 109,
    marginLeft: 37
  },
  loremIpsum1: {
    alignContent: "center",

    width: 296,
    height: 18,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "armata-regular",
    lineHeight: 20,
    textAlign: "center",
    marginTop: 68,
    alignSelf: "center"
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 24
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 31
  },
  icon1Column: {
    width: 24,
    marginTop: 40
  },
  materialMessageTextbox1: {
    alignContent: "center",

    width: 320,
    height: 57,
    marginLeft: 3
  },
  materialMessageTextbox2: {
    width: 320,
    height: 67,
    marginTop: 3,
    marginBottom: 10
  },
  materialMessageTextbox1Column: {
    width: 272,
    marginBottom: 2
  },
  icon1ColumnRow: {
    height: 119,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 37,
    marginRight: 42
  },
  signIn: {
    alignContent: "center",
    width: 161,
    height: 21,
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "armata-regular",
    textAlign: "center",
    marginTop: 195,
    marginLeft: 108
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 31
  },
  materialMessageTextbox3: {
    width: 320,
    height: 57
  },
  icon3Row: {
    height: 57,
    flexDirection: "row",
    marginTop: -115,
    marginLeft: 37,
    marginRight: 45
  }
});
