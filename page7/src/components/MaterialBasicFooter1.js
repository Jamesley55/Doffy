import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialBasicFooter1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name={props.icon1Name || "television"}
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn1Text}>{props.text1 || "Movies"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activebtnWrapper}>
        <MaterialCommunityIconsIcon
          name={props.icon2Name || "music-note"}
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.activeText}>{props.text2 || "Music"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2}>
        <MaterialCommunityIconsIcon
          name={props.icon3Name || "book"}
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn2Text}>{props.text3 || "Books"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper3}>
        <MaterialCommunityIconsIcon
          name={props.icon4Name || "calendar-text"}
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn3Text}>{props.text4 || "Calendar"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(65,65,65,1)",
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowOffset: {
      height: -2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  btn1Text: {
    color: "#FFFFFF",
    opacity: 0.8,
    fontFamily: "roboto-regular"
  },
  activebtnWrapper: {
    flex: 1,
    alignItems: "center",
    paddingTop: 6,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 1
  },
  activeText: {
    color: "#FFFFFF",
    opacity: 1,
    paddingTop: 4,
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  btn2Text: {
    color: "#FFFFFF",
    opacity: 0.8,
    fontFamily: "roboto-regular"
  },
  btnWrapper3: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  btn3Text: {
    color: "#FFFFFF",
    opacity: 0.8,
    fontFamily: "roboto-regular"
  }
});

export default MaterialBasicFooter1;
