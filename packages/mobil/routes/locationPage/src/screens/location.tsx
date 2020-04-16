import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialMapView1 from "../components/MaterialMapView1";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export function locationPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.icon1Row}>
        <EntypoIcon
          name="arrow-left"
          style={styles.icon1}
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
      <MaterialMapView1 style={styles.materialMapView1}></MaterialMapView1>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}>Location and disponibility</Text>
        <EntypoIcon name="location-pin" style={styles.icon2}></EntypoIcon>
        <Text style={styles.adressOfTheShop}>$Adress of the shop$</Text>
      </View>
      <MaterialButtonPrimary
        text1="Copy adresse"
        style={styles.materialButtonPrimary1}
      ></MaterialButtonPrimary>
      <View style={styles.icon3Row}>
        <FontAwesomeIcon name="calendar" style={styles.icon3}></FontAwesomeIcon>
        <Text style={styles.disponibility}>Disponibility</Text>
      </View>
      <View style={styles.rect}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 25,
  },
  image1: {
    width: 191,
    height: 64,
    marginLeft: 27,
  },
  icon1Row: {
    height: 65,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 14,
    marginRight: 103,
  },
  materialMapView1: {
    width: 375,
    height: 208,
  },
  loremIpsum: {
    top: 0,
    left: 0,
    width: 281,
    height: 58,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-700",
    lineHeight: 23,
    letterSpacing: -1,
  },
  icon2: {
    top: 43,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },
  adressOfTheShop: {
    top: 48,
    left: 40,
    width: 277,
    height: 31,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1,
  },
  loremIpsumStack: {
    width: 317,
    height: 83,
    marginTop: 16,
    marginLeft: 14,
  },
  materialButtonPrimary1: {
    width: 218,
    height: 32,
    borderRadius: 100,
    marginTop: 4,
    marginLeft: 63,
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },
  disponibility: {
    width: 218,
    height: 34,
    color: "rgba(59,33,33,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1,
    marginLeft: 12,
    marginTop: 6,
  },
  icon3Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 16,
    marginRight: 92,
  },
  rect: {
    width: 347,
    height: 268,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 11,
    marginLeft: 16,
  },
});
