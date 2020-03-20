import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialMessageTextbox from "../components/MaterialMessageTextbox";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/shappeal.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <Text style={styles.loremIpsum}>
        PLease enter a username &amp; password
      </Text>
      <View style={styles.iconColumnRow}>
        <View style={styles.iconColumn}>
          <EntypoIcon name="mail" style={styles.icon}></EntypoIcon>
          <EntypoIcon name="lock" style={styles.icon2}></EntypoIcon>
        </View>
        <View style={styles.materialMessageTextboxColumn}>
          <MaterialMessageTextbox
            text1="Input "
            textInput1="Email"
            style={styles.materialMessageTextbox}
          ></MaterialMessageTextbox>
          <MaterialMessageTextbox
            text1="Input "
            textInput1="Password"
            style={styles.materialMessageTextbox1}
          ></MaterialMessageTextbox>
        </View>
      </View>
      <Text style={styles.lOgIn1}>lOG IN</Text>
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
  loremIpsum: {
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
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 24
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 31
  },
  iconColumn: {
    width: 24,
    marginTop: 40
  },
  materialMessageTextbox: {
    width: 269,
    height: 57,
    marginLeft: 3
  },
  materialMessageTextbox1: {
    width: 269,
    height: 57,
    marginTop: 3
  },
  materialMessageTextboxColumn: {
    width: 272,
    marginBottom: 2
  },
  iconColumnRow: {
    height: 119,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 37,
    marginRight: 42
  },
  lOgIn1: {
    width: 161,
    height: 21,
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "armata-regular",
    textAlign: "center",
    marginTop: 69,
    marginLeft: 108
  }
});

export default Untitled1;
