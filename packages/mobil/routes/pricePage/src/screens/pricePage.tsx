import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialSwitch from "../components/MaterialSwitch";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

export function pricePage({ navigator }) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.price}>Price</Text>
          <View style={styles.rect2Row}>
            <View style={styles.rect2}></View>
            <MaterialSwitch style={styles.materialSwitch}></MaterialSwitch>
            <Text style={styles.beardIncluded}>Beard included</Text>
          </View>
          <Text style={styles.beardPrice}>Beard price</Text>
          <View style={styles.rect3}></View>
          <View style={styles.materialSwitch1Row}>
            <MaterialSwitch style={styles.materialSwitch1}></MaterialSwitch>
            <Text style={styles.beardIncluded2}>
              initial deposit for booking
            </Text>
          </View>
          <View style={styles.rect4Row}>
            <View style={styles.rect4}></View>
            <Text style={styles.beardIncluded3}>
              percentage of your price that the customer will have to pay
              forward
            </Text>
          </View>
          <Text style={styles.advanceOption1}>Advance option</Text>
        </View>
        <Text style={styles.cuttingHair}>Cutting hair</Text>
      </View>
      <View style={styles.rect5Stack}>
        <View style={styles.rect5}>
          <Text style={styles.price1}>Price</Text>
          <View style={styles.rect6}></View>
          <View style={styles.materialSwitch2Row}>
            <MaterialSwitch style={styles.materialSwitch2}></MaterialSwitch>
            <Text style={styles.beardIncluded4}>
              initial deposit for booking
            </Text>
          </View>
          <View style={styles.rect7Row}>
            <View style={styles.rect7}></View>
            <Text style={styles.beardIncluded5}>
              percentage of your price that the customer will have to pay
              forward
            </Text>
          </View>
          <Text style={styles.advanceOption}>Advance option</Text>
        </View>
        <Text style={styles.nailSalon}>Nail salon</Text>
      </View>
      <MaterialButtonPrimary
        text1="Continue "
        style={styles.materialButtonPrimary1}
      ></MaterialButtonPrimary>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    top: 26,
    left: 0,
    width: 332,
    height: 271,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 34,
  },
  price: {
    width: 140,
    height: 18,
    color: "#121212",
    fontSize: 26,
    fontFamily: "roboto-regular",
    lineHeight: 9,
    marginTop: 25,
    marginLeft: 20,
  },
  rect2: {
    width: 70,
    height: 32,
    backgroundColor: "rgba(0,0,0,1)",
  },
  materialSwitch: {
    width: 45,
    height: 23,
    marginLeft: 31,
    marginTop: 6,
  },
  beardIncluded: {
    width: 152,
    height: 20,
    color: "#121212",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 9,
    marginLeft: 8,
    marginTop: 12,
  },
  rect2Row: {
    height: 32,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 14,
    marginRight: 12,
  },
  beardPrice: {
    width: 140,
    height: 18,
    color: "#121212",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 9,
    marginTop: 13,
    marginLeft: 14,
  },
  rect3: {
    width: 70,
    height: 32,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 2,
    marginLeft: 14,
  },
  materialSwitch1: {
    width: 45,
    height: 23,
  },
  beardIncluded2: {
    width: 202,
    height: 20,
    color: "#121212",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 9,
    marginLeft: 17,
    marginTop: 2,
  },
  materialSwitch1Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 15,
    marginRight: 53,
  },
  rect4: {
    width: 70,
    height: 32,
    backgroundColor: "rgba(0,0,0,1)",
  },
  beardIncluded3: {
    width: 216,
    height: 19,
    color: "#121212",
    fontSize: 9,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: -1,
    marginLeft: 5,
    marginTop: 7,
  },
  rect4Row: {
    height: 32,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 14,
    marginRight: 27,
  },
  advanceOption1: {
    width: 90,
    height: 20,
    color: "rgba(59,33,33,1)",
    fontSize: 10,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: -1,
    textAlign: "center",
    marginTop: 4,
    marginLeft: 122,
  },
  cuttingHair: {
    top: 0,
    left: 0,
    width: 216,
    height: 36,
    color: "#121212",
    position: "absolute",
    fontSize: 26,
    fontFamily: "roboto-regular",
  },
  rectStack: {
    width: 332,
    height: 297,
    marginTop: 54,
    marginLeft: 28,
  },
  rect5: {
    top: 27,
    left: 0,
    width: 332,
    height: 210,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 34,
  },
  price1: {
    width: 140,
    height: 18,
    color: "#121212",
    fontSize: 26,
    fontFamily: "roboto-regular",
    lineHeight: 9,
    marginTop: 20,
    marginLeft: 19,
  },
  rect6: {
    width: 70,
    height: 32,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 8,
    marginLeft: 17,
  },
  materialSwitch2: {
    width: 45,
    height: 23,
    marginTop: 1,
  },
  beardIncluded4: {
    width: 202,
    height: 20,
    color: "#121212",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 9,
    marginLeft: 17,
  },
  materialSwitch2Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 18,
    marginRight: 50,
  },
  rect7: {
    width: 70,
    height: 32,
    backgroundColor: "rgba(0,0,0,1)",
  },
  beardIncluded5: {
    width: 216,
    height: 19,
    color: "#121212",
    fontSize: 9,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: -1,
    marginLeft: 5,
    marginTop: 8,
  },
  rect7Row: {
    height: 32,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 17,
    marginRight: 24,
  },
  advanceOption: {
    width: 90,
    height: 20,
    color: "rgba(59,33,33,1)",
    fontSize: 10,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: -1,
    textAlign: "center",
    marginTop: 7,
    marginLeft: 125,
  },
  nailSalon: {
    top: 0,
    left: 3,
    width: 216,
    height: 36,
    color: "#121212",
    position: "absolute",
    fontSize: 26,
    fontFamily: "roboto-regular",
  },
  rect5Stack: {
    width: 332,
    height: 237,
    marginTop: 19,
    marginLeft: 25,
  },
  materialButtonPrimary1: {
    width: 294,
    height: 66,
    borderRadius: 100,
    marginTop: 22,
    marginLeft: 41,
  },
});
