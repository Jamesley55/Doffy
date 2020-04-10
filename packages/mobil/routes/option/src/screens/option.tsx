import React, { Component, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { Linking } from "react-native";
import { AuthContext } from "../../../Auth";
import { NavigationContainer } from "@react-navigation/native";

export function CustomDrawerContent(props, logout) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <TouchableOpacity
          style={{
            width: "100%",
            marginTop: -50,
            height: 250,
            backgroundColor: "gray",
          }}
          onPress={() => {
            props.navigation.navigate("homepage");
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../../../logo.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <DrawerItem
          label="Offer a service"
          onPress={() => {
            props.navigation.navigate("become a seller");
          }}
        />
        <DrawerItem
          label="Payement Methods"
          onPress={() => {
            props.navigation.navigate("pricePage");
          }}
        />
        <DrawerItem label="Get Discout" onPress={() => {}} />
        <DrawerItem
          label="help"
          onPress={() => {
            props.navigation.navigate("help");
          }}
        />
        <DrawerItem label="Setting" onPress={() => {}} />
        <DrawerItem
          label="Log Out"
          onPress={() => {
            logout();
          }}
          activeTintColor="#e91e63"
        />
        <DrawerItem
          label="Legal                      V.1.1.9"
          onPress={() => {
            Linking.openURL(
              "https://www.spotify.com/ca-en/legal/end-user-agreement/"
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    width: 263,
    height: 812,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderColor: "rgba(28,0,0,1)",
    borderWidth: 1,
  },
  rect2: {
    width: 263,
    height: 180,
    backgroundColor: "rgba(31,0,0,1)",
    flexDirection: "row",
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 70,
    height: 70,
    width: 70,
  },
  name: {
    width: 174,
    height: 35,
    color: "rgba(253,253,253,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 35,
  },
  iconRow: {
    height: 70,
    flexDirection: "row",
    flex: 1,
    marginLeft: 19,
    marginTop: 42,
  },
  offerAService: {
    width: 200,
    height: 24,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 33,
    marginLeft: 26,
  },
  paymentMethods: {
    width: 200,
    height: 24,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 26,
  },
  getDiscount: {
    width: 200,
    height: 24,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 26,
  },
  help: {
    width: 200,
    height: 24,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 26,
  },
  setting: {
    width: 200,
    height: 24,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 26,
  },
  logOut: {
    width: 200,
    height: 24,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 20,
    marginLeft: 26,
  },
  setting1: {
    width: 200,
    height: 24,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 98,
    marginLeft: 23,
  },
});
