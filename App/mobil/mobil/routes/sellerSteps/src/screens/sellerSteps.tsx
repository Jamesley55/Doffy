import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

export function sellerSteps({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.image1Row}>
        <Image
          source={require("../assets/images/shappeal1.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <IoniconsIcon
          name="md-help-circle-outline"
          style={styles.icon}
          onPress={() => {
            navigation.navigate("help");
          }}
        ></IoniconsIcon>
      </View>
      <Text style={styles.welcomeName}>Welcome, $name$</Text>
      <View style={styles.requiredStepsStack}>
        <Text style={styles.requiredSteps}>Required steps</Text>
        <Text style={styles.requiredSteps3}>
          Here&#39;s what you need to do to set up your accout.
        </Text>
      </View>
      <View style={styles.rect}>
        <View style={styles.loremIpsumRow}>
          <Text style={styles.loremIpsum}>
            select the services that your offering
          </Text>
          <EntypoIcon
            name="chevron-thin-right"
            style={styles.icon2}
          ></EntypoIcon>
        </View>
      </View>
      <View style={styles.rect1}>
        <View style={styles.loremIpsum1Row}>
          <Text style={styles.loremIpsum1}>do your avabaility schedule</Text>
          <EntypoIcon
            name="chevron-thin-right"
            style={styles.icon3}
          ></EntypoIcon>
        </View>
        <Text style={styles.text}></Text>
      </View>
      <View style={styles.rect2}>
        <View style={styles.showYourTalentsRow}>
          <Text style={styles.showYourTalents}>Show your talents</Text>
          <EntypoIcon
            name="chevron-thin-right"
            style={styles.icon4}
          ></EntypoIcon>
        </View>
      </View>
      <View style={styles.rect3}>
        <View style={styles.billingInformationRow}>
          <Text style={styles.billingInformation}>Billing information</Text>
          <EntypoIcon
            name="chevron-thin-right"
            style={styles.icon5}
          ></EntypoIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center"
  },
  image1: {
    width: 191,
    height: 64
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 139,
    marginTop: 13
  },
  image1Row: {
    height: 64,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: -28,
    marginRight: 40
  },
  welcomeName: {
    width: 228,
    height: 42,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 19,
    marginLeft: 19
  },
  requiredSteps: {
    top: 0,
    left: 0,
    width: 228,
    height: 42,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  requiredSteps3: {
    top: 29,
    left: 0,
    width: 340,
    height: 42,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "roboto-regular"
  },
  requiredStepsStack: {
    width: 340,
    height: 71,
    marginTop: 15,
    marginLeft: 17
  },
  rect: {
    width: 340,
    height: 90,
    backgroundColor: "rgba(230, 230, 230,1)",
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 17
  },
  loremIpsum: {
    width: 281,
    height: 20,
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginTop: 11
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  loremIpsumRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: 14,
    marginTop: 22
  },
  rect1: {
    width: 340,
    height: 90,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 20,
    marginLeft: 17
  },
  loremIpsum1: {
    width: 281,
    height: 20,
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginTop: 10
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  loremIpsum1Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 14,
    marginRight: 5
  },
  text: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 5,
    marginLeft: 107
  },
  rect2: {
    width: 340,
    height: 90,
    backgroundColor: "rgba(230, 230, 230,1)",
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 17
  },
  showYourTalents: {
    width: 281,
    height: 20,
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginTop: 8
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  showYourTalentsRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: 14,
    marginTop: 22
  },
  rect3: {
    width: 340,
    height: 90,
    backgroundColor: "rgba(230, 230, 230,1)",
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 17
  },
  billingInformation: {
    width: 281,
    height: 20,
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginTop: 9
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  billingInformationRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: 14,
    marginTop: 22
  }
});
