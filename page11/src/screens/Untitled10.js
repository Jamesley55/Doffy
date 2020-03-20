import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Untitled10(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <FeatherIcon name="x" style={styles.icon}></FeatherIcon>
        <Text style={styles.help}>Help</Text>
        <View style={styles.icon2Row}>
          <EntypoIcon name="chat" style={styles.icon2}></EntypoIcon>
          <Text style={styles.chatWithSupport}>Chat with support</Text>
        </View>
        <View style={styles.icon3Row}>
          <FeatherIcon name="phone-call" style={styles.icon3}></FeatherIcon>
          <Text style={styles.callSupport}>Call support</Text>
        </View>
        <View style={styles.rect2}>
          <Text style={styles.logOut}>Log out</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 336,
    height: 648,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 82,
    marginLeft: 17
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 6,
    marginLeft: 15
  },
  help: {
    width: 90,
    height: 56,
    color: "#121212",
    fontSize: 26,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginTop: 8,
    marginLeft: 15
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  chatWithSupport: {
    width: 216,
    height: 40,
    color: "#121212",
    fontSize: 26,
    fontFamily: "roboto-regular",
    marginLeft: 12,
    marginTop: 6
  },
  icon2Row: {
    height: 46,
    flexDirection: "row",
    marginLeft: 27,
    marginRight: 41
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  callSupport: {
    width: 216,
    height: 40,
    color: "#121212",
    fontSize: 26,
    fontFamily: "roboto-regular",
    marginLeft: 12,
    marginTop: 9
  },
  icon3Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 27,
    marginRight: 41
  },
  rect2: {
    width: 306,
    height: 68,
    backgroundColor: "rgba(144,144,144,1)",
    marginTop: 319,
    marginLeft: 15
  },
  logOut: {
    width: 254,
    height: 18,
    color: "#121212",
    fontSize: 26,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginTop: 23,
    marginLeft: 26
  }
});

export default Untitled10;
