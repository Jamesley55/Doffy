import React, { Component, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import * as Font from "expo-font";
import AppLoading from "expo/build/launch/AppLoading";
import { TouchableOpacity } from "react-native-gesture-handler";

export function firstPage2({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon name="chevron-thin-up" style={styles.icon}></Icon>
      <Text
        style={styles.goBack}
        onPress={() => {
          navigation.goBack();
        }}
      >
        Go back
      </Text>
      <Text style={styles.loremIpsum}>
        Choose the service that you need at the moment
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("homepage");
        }}
      >
        <View style={styles.rectRow}>
          <View style={styles.rect}></View>
          <View style={styles.rect1}></View>
        </View>
        <View style={styles.rect2Row}>
          <View style={styles.rect2}></View>
          <View style={styles.rect3}></View>
        </View>
        <View style={styles.rect4Row}>
          <View style={styles.rect4}></View>
          <View style={styles.rect5}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 24,
    marginTop: 36,
    alignSelf: "center"
  },
  goBack: {
    width: 118,
    height: 30,
    color: "rgba(179,179,179,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign: "center",
    alignSelf: "center"
  },
  loremIpsum: {
    width: 327,
    height: 66,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 18,
    marginLeft: 12
  },
  rect: {
    width: 158,
    height: 120,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30
  },
  rect1: {
    width: 158,
    height: 120,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    marginLeft: 24
  },
  rectRow: {
    height: 120,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 19,
    marginRight: 16
  },
  rect2: {
    width: 158,
    height: 120,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30
  },
  rect3: {
    width: 158,
    height: 120,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    marginLeft: 23
  },
  rect2Row: {
    height: 120,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 17,
    marginRight: 19
  },
  rect4: {
    width: 158,
    height: 120,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    marginTop: 1
  },
  rect5: {
    width: 158,
    height: 120,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    marginLeft: 23
  },
  rect4Row: {
    height: 121,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 17,
    marginRight: 19
  }
});
