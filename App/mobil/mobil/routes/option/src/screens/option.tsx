import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export class option extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rect}>
          <View style={styles.rect2}>
            <View style={styles.iconRow}>
              <Icon name="account" style={styles.icon}></Icon>
              <Text style={styles.name}>$name$</Text>
            </View>
          </View>
          <Text style={styles.offerAService}>Offer a service</Text>
          <Text style={styles.paymentMethods}>Payment methods</Text>
          <Text style={styles.getDiscount}>Get Discount</Text>
          <Text style={styles.help}>Help</Text>
          <Text style={styles.setting}>Setting</Text>
          <Text style={styles.logOut}>Log out</Text>
          <Text style={styles.setting1}>Legal v.1.1.9</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 263,
    height: 812,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderColor: "rgba(28,0,0,1)",
    borderWidth: 1
  },
  rect2: {
    width: 263,
    height: 180,
    backgroundColor: "rgba(31,0,0,1)",
    flexDirection: "row"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 70,
    height: 70,
    width: 70
  },
  name: {
    width: 174,
    height: 35,
    color: "rgba(253,253,253,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 35
  },
  iconRow: {
    height: 70,
    flexDirection: "row",
    flex: 1,
    marginLeft: 19,
    marginTop: 42
  },
  offerAService: {
    width: 200,
    height: 24,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 33,
    marginLeft: 26
  },
  paymentMethods: {
    width: 200,
    height: 24,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 26
  },
  getDiscount: {
    width: 200,
    height: 24,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 26
  },
  help: {
    width: 200,
    height: 24,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 26
  },
  setting: {
    width: 200,
    height: 24,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 26
  },
  logOut: {
    width: 200,
    height: 24,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 26
  },
  setting1: {
    width: 200,
    height: 24,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 98,
    marginLeft: 23
  }
});
