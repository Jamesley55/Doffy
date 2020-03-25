import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialSwitch2 from "../components/MaterialSwitch2";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

export function schedulePage({ navigation }) {
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
        <IoniconsIcon
          name="md-help-circle-outline"
          style={styles.icon2}
          onPress={() => {
            navigation.navigate("help");
          }}
        ></IoniconsIcon>
      </View>
      <View style={styles.rect1}>
        <View style={styles.fromRow}>
          <Text style={styles.from}>From</Text>
          <Text style={styles.to}>To</Text>
        </View>
        <View style={styles.materialSwitch2Row}>
          <MaterialSwitch2 style={styles.materialSwitch2}></MaterialSwitch2>
          <View style={styles.sundayStack}>
            <Text style={styles.sunday}>Sunday</Text>
            <View style={styles.rect2}></View>
          </View>
          <View style={styles.rect3}></View>
        </View>
        <View style={styles.materialSwitch3Row}>
          <MaterialSwitch2 style={styles.materialSwitch3}></MaterialSwitch2>
          <View style={styles.monday1Stack}>
            <Text style={styles.monday1}>Monday</Text>
            <View style={styles.rect4}></View>
          </View>
          <View style={styles.rect10}></View>
        </View>
        <View style={styles.materialSwitch4Row}>
          <MaterialSwitch2 style={styles.materialSwitch4}></MaterialSwitch2>
          <View style={styles.tuesdayStack}>
            <Text style={styles.tuesday}>Tuesday</Text>
            <View style={styles.rect5}></View>
          </View>
          <View style={styles.rect11}></View>
        </View>
        <View style={styles.materialSwitch5Row}>
          <MaterialSwitch2 style={styles.materialSwitch5}></MaterialSwitch2>
          <View style={styles.wednesdayStack}>
            <Text style={styles.wednesday}>Wednesday</Text>
            <View style={styles.rect6}></View>
          </View>
          <View style={styles.rect12}></View>
        </View>
        <View style={styles.materialSwitch6Row}>
          <MaterialSwitch2 style={styles.materialSwitch6}></MaterialSwitch2>
          <View style={styles.thursdayStack}>
            <Text style={styles.thursday}>Thursday</Text>
            <View style={styles.rect7}></View>
          </View>
          <View style={styles.rect13}></View>
        </View>
        <View style={styles.materialSwitch7Row}>
          <MaterialSwitch2 style={styles.materialSwitch7}></MaterialSwitch2>
          <View style={styles.fridayStack}>
            <Text style={styles.friday}>Friday</Text>
            <View style={styles.rect8}></View>
          </View>
          <View style={styles.rect14}></View>
        </View>
        <View style={styles.materialSwitch8Row}>
          <MaterialSwitch2 style={styles.materialSwitch8}></MaterialSwitch2>
          <View style={styles.saturdayStack}>
            <Text style={styles.saturday}>Saturday</Text>
            <View style={styles.rect9}></View>
          </View>
          <View style={styles.rect15}></View>
        </View>
        <Text style={styles.loremIpsum}>
          Would you like your adresse to be accesible by your client?
        </Text>
        <MaterialSwitch2></MaterialSwitch2>
        <MaterialButtonPrimary
          text1="Continue"
          style={styles.materialButtonPrimary1}
        ></MaterialButtonPrimary>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 248
  },
  icon1Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 14,
    marginRight: 40
  },
  rect1: {
    width: 336,
    height: 648,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 12,
    marginLeft: 17
  },
  from: {
    width: 56,
    height: 22,
    color: "rgba(59,33,33,1)",
    fontSize: 21,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: -1
  },
  to: {
    width: 58,
    height: 22,
    color: "rgba(59,33,33,1)",
    fontSize: 21,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: -1,
    marginLeft: 12
  },
  fromRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 201,
    marginRight: 9
  },
  materialSwitch2: {
    width: 45,
    height: 23,
    marginTop: 10
  },
  sunday: {
    top: 13,
    left: 0,
    width: 113,
    height: 23,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: -1
  },
  rect2: {
    top: 0,
    left: 103,
    width: 56,
    height: 39,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  sundayStack: {
    width: 159,
    height: 39,
    marginLeft: 14
  },
  rect3: {
    width: 56,
    height: 39,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 13
  },
  materialSwitch2Row: {
    height: 39,
    flexDirection: "row",
    marginLeft: 32,
    marginRight: 17
  },
  materialSwitch3: {
    width: 45,
    height: 23,
    marginTop: 12
  },
  monday1: {
    top: 13,
    left: 0,
    width: 113,
    height: 23,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: -1
  },
  rect4: {
    top: 0,
    left: 103,
    width: 56,
    height: 39,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  monday1Stack: {
    width: 159,
    height: 39,
    marginLeft: 14
  },
  rect10: {
    width: 56,
    height: 39,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 13
  },
  materialSwitch3Row: {
    height: 39,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 32,
    marginRight: 17
  },
  materialSwitch4: {
    width: 45,
    height: 23,
    marginTop: 10
  },
  tuesday: {
    top: 13,
    left: 0,
    width: 113,
    height: 23,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: -1
  },
  rect5: {
    top: 0,
    left: 103,
    width: 56,
    height: 39,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  tuesdayStack: {
    width: 159,
    height: 39,
    marginLeft: 14,
    marginTop: 1
  },
  rect11: {
    width: 56,
    height: 39,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 13
  },
  materialSwitch4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 32,
    marginRight: 17
  },
  materialSwitch5: {
    width: 45,
    height: 23,
    marginTop: 6
  },
  wednesday: {
    top: 10,
    left: 0,
    width: 113,
    height: 23,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: -1
  },
  rect6: {
    top: 0,
    left: 103,
    width: 56,
    height: 39,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  wednesdayStack: {
    width: 159,
    height: 39,
    marginLeft: 14
  },
  rect12: {
    width: 56,
    height: 39,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 13,
    marginTop: 1
  },
  materialSwitch5Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 32,
    marginRight: 17
  },
  materialSwitch6: {
    width: 45,
    height: 23,
    marginTop: 11
  },
  thursday: {
    top: 13,
    left: 0,
    width: 113,
    height: 23,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: -1
  },
  rect7: {
    top: 0,
    left: 103,
    width: 56,
    height: 39,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  thursdayStack: {
    width: 159,
    height: 39,
    marginLeft: 14,
    marginTop: 2
  },
  rect13: {
    width: 56,
    height: 39,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 13
  },
  materialSwitch6Row: {
    height: 41,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 32,
    marginRight: 17
  },
  materialSwitch7: {
    width: 45,
    height: 23,
    marginTop: 12
  },
  friday: {
    top: 15,
    left: 0,
    width: 113,
    height: 23,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: -1
  },
  rect8: {
    top: 0,
    left: 103,
    width: 56,
    height: 39,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  fridayStack: {
    width: 159,
    height: 39,
    marginLeft: 14,
    marginTop: 3
  },
  rect14: {
    width: 56,
    height: 39,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 13
  },
  materialSwitch7Row: {
    height: 42,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 32,
    marginRight: 17
  },
  materialSwitch8: {
    width: 45,
    height: 23,
    marginTop: 22
  },
  saturday: {
    top: 21,
    left: 0,
    width: 113,
    height: 23,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: -1
  },
  rect9: {
    top: 0,
    left: 103,
    width: 56,
    height: 39,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  saturdayStack: {
    width: 159,
    height: 44,
    marginLeft: 14,
    marginTop: 3
  },
  rect15: {
    width: 56,
    height: 39,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 13
  },
  materialSwitch8Row: {
    height: 47,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 32,
    marginRight: 17
  },
  loremIpsum: {
    width: 286,
    height: 54,
    color: "rgba(59,33,33,1)",
    fontSize: 21,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1,
    marginTop: 40,
    marginLeft: 32
  },
  materialChipWithCloseButton: {
    width: 80,
    height: 32,
    marginTop: 10,
    marginLeft: 116
  },
  materialChipWithCloseButton1: {
    width: 80,
    height: 32,
    marginTop: 8,
    marginLeft: 116
  },
  materialButtonPrimary1: {
    width: 294,
    height: 66,
    borderRadius: 100,
    marginTop: 22,
    marginLeft: 41
  }
});
