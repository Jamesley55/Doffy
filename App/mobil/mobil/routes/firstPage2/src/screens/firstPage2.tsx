import React, { Component, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { useContext } from "react";
import { AuthContext } from "../../../Auth";

export function firstPage2({ navigation }) {
  const { login } = useContext(AuthContext);
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
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            login();
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
          <View style={styles.rect4Row}>
            <View style={styles.rect4}></View>
            <View style={styles.rect5}></View>
          </View>
          <View style={styles.rect4Row}>
            <View style={styles.rect4}></View>
            <View style={styles.rect5}></View>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
    width: "100%",
    height: 66,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 18,
    marginLeft: 12
  },
  rect: {
    width: 168,
    height: 120,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30
  },
  rect1: {
    width: 168,
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
    width: 168,
    height: 120,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30
  },
  rect3: {
    width: 168,
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
    width: 168,
    height: 120,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    marginTop: 1
  },
  rect5: {
    width: 168,
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
