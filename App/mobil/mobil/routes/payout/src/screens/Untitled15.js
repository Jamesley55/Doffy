import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCheckbox5 from "../components/MaterialCheckbox5";
import MaterialRadio from "../components/MaterialRadio";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

function Untitled15(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon1StackRow}>
        <View style={styles.icon1Stack}>
          <EntypoIcon name="arrow-left" style={styles.icon1}></EntypoIcon>
          <EntypoIcon name="arrow-left" style={styles.icon2}></EntypoIcon>
        </View>
        <IoniconsIcon
          name="md-help-circle-outline"
          style={styles.icon3}
        ></IoniconsIcon>
      </View>
      <View style={styles.rect}>
        <View style={styles.materialCheckbox5Stack}>
          <MaterialCheckbox5
            style={styles.materialCheckbox5}
          ></MaterialCheckbox5>
          <Text style={styles.chargeTaxes}>Charge taxes on your services</Text>
          <Text style={styles.loremIpsum}>
            This is automatically calculated for Canada and the United States.
          </Text>
        </View>
      </View>
      <View style={styles.payoutDetailsStack}>
        <Text style={styles.payoutDetails}>Payout Details</Text>
        <Text style={styles.loremIpsum3}>
          Your earnings are deposited into your bank account. Choose the
          frequency of your payouts
        </Text>
      </View>
      <View style={styles.rect2}>
        <View style={styles.payoutScheduleStackStack}>
          <View style={styles.payoutScheduleStack}>
            <Text style={styles.payoutSchedule}>Payout Schedule</Text>
            <MaterialRadio style={styles.materialRadio}></MaterialRadio>
            <MaterialRadio style={styles.materialRadio1}></MaterialRadio>
            <Text style={styles.everyBusinessDay}>Every business day</Text>
            <Text style={styles.everyWeek}>Every week</Text>
            <View style={styles.rect3}></View>
          </View>
          <Text style={styles.loremIpsum4}></Text>
        </View>
        <View style={styles.materialRadio2Stack}>
          <MaterialRadio style={styles.materialRadio2}></MaterialRadio>
          <Text style={styles.everyMonth}>Every month</Text>
          <View style={styles.rect4}></View>
        </View>
      </View>
      <View style={styles.loremIpsum5Stack}>
        <Text style={styles.loremIpsum5}>Customer billing statement</Text>
        <Text style={styles.loremIpsum6}>
          Edit the way your store name appear on your customers’ bank statements
        </Text>
      </View>
      <View style={styles.rect5}>
        <View style={styles.loremIpsum7Stack}>
          <Text style={styles.loremIpsum7}>customer statement descriptor</Text>
          <MaterialFixedLabelTextbox
            textInput1="$name$"
            text1="luxes*"
            style={styles.materialFixedLabelTextbox}
          ></MaterialFixedLabelTextbox>
        </View>
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
    flex: 1
  },
  icon1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon2: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon1Stack: {
    width: 40,
    height: 40
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 248
  },
  icon1StackRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 14,
    marginRight: 40
  },
  rect: {
    width: 349,
    height: 94,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 46,
    marginLeft: 14
  },
  materialCheckbox5: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  chargeTaxes: {
    top: 10,
    left: 35,
    width: 279,
    height: 40,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1
  },
  loremIpsum: {
    top: 33,
    left: 35,
    width: 279,
    height: 25,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1
  },
  materialCheckbox5Stack: {
    width: 314,
    height: 58,
    marginTop: 8,
    marginLeft: 7
  },
  payoutDetails: {
    top: 0,
    left: 0,
    width: 125,
    height: 30,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1
  },
  loremIpsum3: {
    top: 23,
    left: 0,
    width: 349,
    height: 34,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1
  },
  payoutDetailsStack: {
    width: 349,
    height: 57,
    marginTop: 26,
    marginLeft: 14
  },
  rect2: {
    width: 349,
    height: 178,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 19,
    marginLeft: 14
  },
  payoutSchedule: {
    top: 0,
    left: 13,
    width: 181,
    height: 30,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1
  },
  materialRadio: {
    top: 21,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialRadio1: {
    top: 60,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  everyBusinessDay: {
    top: 29,
    left: 36,
    width: 127,
    height: 23,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1
  },
  everyWeek: {
    top: 66,
    left: 36,
    width: 127,
    height: 23,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1
  },
  rect3: {
    top: 66,
    left: 111,
    width: 123,
    height: 23,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  payoutScheduleStack: {
    top: 0,
    left: 0,
    width: 234,
    height: 100,
    position: "absolute"
  },
  loremIpsum4: {
    top: 37,
    left: 54,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1
  },
  payoutScheduleStackStack: {
    width: 234,
    height: 100,
    marginTop: 8,
    marginLeft: 3
  },
  materialRadio2: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  everyMonth: {
    top: 5,
    left: 36,
    width: 127,
    height: 23,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1
  },
  rect4: {
    top: 3,
    left: 111,
    width: 123,
    height: 23,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute"
  },
  materialRadio2Stack: {
    width: 234,
    height: 40,
    marginTop: 8,
    marginLeft: 3
  },
  loremIpsum5: {
    top: 0,
    left: 0,
    width: 254,
    height: 34,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1
  },
  loremIpsum6: {
    top: 22,
    left: 0,
    width: 349,
    height: 34,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1
  },
  loremIpsum5Stack: {
    width: 349,
    height: 56,
    marginTop: 21,
    marginLeft: 14
  },
  rect5: {
    width: 349,
    height: 66,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 14,
    marginLeft: 13
  },
  loremIpsum7: {
    top: 0,
    left: 5,
    width: 196,
    height: 20,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1
  },
  materialFixedLabelTextbox: {
    top: 14,
    left: 0,
    width: 306,
    height: 34,
    position: "absolute"
  },
  loremIpsum7Stack: {
    width: 306,
    height: 48,
    marginTop: 8,
    marginLeft: 11
  },
  materialButtonPrimary1: {
    width: 294,
    height: 66,
    borderRadius: 100,
    marginTop: 30,
    marginLeft: 37
  }
});

export default Untitled15;
