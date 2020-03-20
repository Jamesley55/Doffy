import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

function Untitled14(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon1Row}>
        <EntypoIcon name="arrow-left" style={styles.icon1}></EntypoIcon>
        <IoniconsIcon
          name="md-help-circle-outline"
          style={styles.icon2}
        ></IoniconsIcon>
      </View>
      <View style={styles.profilPictureStack}>
        <Text style={styles.profilPicture}>Profil picture</Text>
        <Text style={styles.loremIpsum}>
          Customers will use that photo to identify you or your brand.
        </Text>
      </View>
      <View style={styles.rect}>
        <MaterialIconsIcon
          name="add-to-photos"
          style={styles.icon3}
        ></MaterialIconsIcon>
      </View>
      <View style={styles.pictureOfYourWorkStack}>
        <Text style={styles.pictureOfYourWork}>Picture of your work</Text>
        <Text style={styles.loremIpsum1}>
          Customers will judge your work by looking at those pictures. This is
          an important step for your business growth
        </Text>
        <View style={styles.rect1}>
          <MaterialIconsIcon
            name="add-to-photos"
            style={styles.icon4}
          ></MaterialIconsIcon>
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
  profilPicture: {
    top: 0,
    left: 0,
    width: 160,
    height: 46,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "roboto-700",
    lineHeight: 23,
    letterSpacing: -1
  },
  loremIpsum: {
    top: 24,
    left: 0,
    width: 328,
    height: 60,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1
  },
  profilPictureStack: {
    width: 328,
    height: 84,
    marginTop: 40,
    marginLeft: 14
  },
  rect: {
    width: 170,
    height: 128,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 18,
    marginLeft: 103
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 100,
    height: 100,
    width: 100,
    marginTop: 14,
    marginLeft: 35
  },
  pictureOfYourWork: {
    top: 0,
    left: 0,
    width: 224,
    height: 46,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 21,
    fontFamily: "roboto-700",
    lineHeight: 23,
    letterSpacing: -1
  },
  loremIpsum1: {
    top: 34,
    left: 0,
    width: 328,
    height: 106,
    color: "rgba(59,33,33,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 23,
    letterSpacing: -1
  },
  rect1: {
    top: 112,
    left: 89,
    width: 170,
    height: 128,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 100,
    height: 100,
    width: 100,
    marginTop: 14,
    marginLeft: 35
  },
  pictureOfYourWorkStack: {
    width: 328,
    height: 240,
    marginTop: 60,
    marginLeft: 14
  },
  materialButtonPrimary1: {
    width: 294,
    height: 66,
    borderRadius: 100,
    marginTop: 37,
    marginLeft: 37
  }
});

export default Untitled14;
