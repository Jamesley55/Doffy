import React, { Component } from "react";
import { welcomePageStyle } from "../style/style";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";

function MaterialButtonGrey(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(props.navigation);
      }}
      style={[styles.container, props.style]}
    >
      <IoniconsIcon name={props.Appleicon} style={welcomePageStyle.iconApple} />
      <EvilIconsIcon
        name={props.googleIcon}
        style={welcomePageStyle.iconFacebook}
      />
      <Text style={styles.caption}>{props.text1 || "BUTTON"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#999999",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
  caption: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "roboto-regular",
  },
});

export default MaterialButtonGrey;
