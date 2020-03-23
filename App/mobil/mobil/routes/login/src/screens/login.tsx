import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Button
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialMessageTextbox from "../components/MaterialMessageTextbox";
import * as Font from "expo-font";
import MaterialMessagePassword from "../components/MaterialMessagePassword";
import { AppLoading } from "expo";

export function login({ navigation }) {
  return (
    <ScrollView style={styles.container}>
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
            textInput1="Email"
            style={styles.materialMessageTextbox}
          ></MaterialMessageTextbox>
          <MaterialMessagePassword
            textInput1="Password"
            style={styles.materialMessageTextbox1}
          ></MaterialMessagePassword>
        </View>
      </View>
      <Text
        style={styles.lOgIn1}
        onPress={() => navigation.navigate("register")}
      >
        lOG IN
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
    width: 296,
    height: 70,
    marginTop: 109,
    marginLeft: 37
  },
  loremIpsum: {
    width: 296,
    height: 16,
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    fontFamily: "armata-regular",
    lineHeight: 15,
    textAlign: "center",
    marginTop: 100,
    marginBottom: 60,
    alignSelf: "center"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginBottom: 14
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 35
  },
  iconColumn: {
    width: 24,
    marginTop: 37
  },
  materialMessageTextbox: {
    width: 320,
    height: 57,
    marginLeft: 3,
    marginBottom: 20
  },
  materialMessageTextbox1: {
    width: 320,
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
    marginTop: 169,
    marginLeft: 108
  }
});
