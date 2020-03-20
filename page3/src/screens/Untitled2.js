import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialMessageTextbox from "../components/MaterialMessageTextbox";

function Untitled2(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/shappeal.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <Text style={styles.loremIpsum1}>
        PLease enter a username &amp; password
      </Text>
      <View style={styles.icon1ColumnRow}>
        <View style={styles.icon1Column}>
          <EntypoIcon name="mail" style={styles.icon1}></EntypoIcon>
          <EntypoIcon name="lock" style={styles.icon2}></EntypoIcon>
        </View>
        <View style={styles.materialMessageTextbox1Column}>
          <MaterialMessageTextbox
            text1="Input "
            textInput1="Email"
            style={styles.materialMessageTextbox1}
          ></MaterialMessageTextbox>
          <MaterialMessageTextbox
            text1="Input "
            textInput1="Password"
            style={styles.materialMessageTextbox2}
          ></MaterialMessageTextbox>
        </View>
      </View>
      <Text style={styles.signIn}>SIGN IN</Text>
      <View style={styles.icon3Row}>
        <EntypoIcon name="lock" style={styles.icon3}></EntypoIcon>
        <MaterialMessageTextbox
          text1="Input "
          textInput1="Re-enter Password"
          style={styles.materialMessageTextbox3}
        ></MaterialMessageTextbox>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(13,0,0,1)"
  },
  image1: {
    width: 296,
    height: 108,
    marginTop: 109,
    marginLeft: 37
  },
  loremIpsum1: {
    width: 296,
    height: 18,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "armata-regular",
    lineHeight: 9,
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
    width: 269,
    height: 57,
    marginLeft: 3
  },
  materialMessageTextbox2: {
    width: 269,
    height: 57,
    marginTop: 3
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
    width: 161,
    height: 21,
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "armata-regular",
    textAlign: "center",
    marginTop: 95,
    marginLeft: 108
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 31
  },
  materialMessageTextbox3: {
    width: 269,
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

export default Untitled2;
