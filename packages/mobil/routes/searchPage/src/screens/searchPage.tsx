import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";

export function searchPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <EntypoIcon
          name="arrow-left"
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}
        ></EntypoIcon>
        <Image
          source={require("../../../../logo/LogoJamesleyApp.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
      <EntypoIcon name="cross" style={styles.icon2}></EntypoIcon>
      <MaterialUnderlineTextbox
        textInput1="What are you looking for?"
        style={styles.materialUnderlineTextbox}
      ></MaterialUnderlineTextbox>
      <Text style={styles.loremIpsum}>What are you looking for?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    marginTop: 24,
  },
  image1: {
    width: 191,
    height: 64,
    marginLeft: 43,
  },
  iconRow: {
    height: 64,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 17,
    marginRight: 89,
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    marginTop: 29,
    marginLeft: 23,
  },
  materialUnderlineTextbox: {
    width: 336,
    height: 55,
    backgroundColor: "rgba(245,245,245,1)",
    marginTop: 39,
    marginLeft: 23,
  },
  loremIpsum: {
    width: 297,
    height: 26,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -83,
    marginLeft: 23,
  },
});
