import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialButtonHamburger from "../components/MaterialButtonHamburger";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialBasicFooter1 from "../components/MaterialBasicFooter1";
import { ScrollView } from "react-native-gesture-handler";

export function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.rect2StackStack}>
            <View style={styles.rect2Stack}>
              <View style={styles.rect2}>
                <Text style={styles.helloName}>Hello, $name$</Text>
              </View>

              <MaterialButtonHamburger
                style={styles.materialButtonHamburger}
              ></MaterialButtonHamburger>
              <Icon
                name="md-search"
                style={styles.icon}
                onPress={() => {
                  navigation.navigate("searchPage");
                }}
              ></Icon>
            </View>
            <Image
              source={require("../assets/images/shappeal1.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
          <ScrollView>
            <Text style={styles.yourRecentServices}>your recent services</Text>
            <ScrollView horizontal={true}>
              <View style={styles.rect3Row}>
                <View style={styles.rect3}></View>
                <View style={styles.rect6}></View>
              </View>
            </ScrollView>
            <Text style={styles.popularNearYou}>Popular near you</Text>
            <ScrollView horizontal={true}>
              <View style={styles.rect7Row}>
                <View style={styles.rect7}></View>
                <View style={styles.rect8}></View>
              </View>
            </ScrollView>
            <Text style={styles.barbershop}>Barbershop</Text>
            <ScrollView horizontal={true}>
              <View style={styles.rect9Row}>
                <View style={styles.rect9}></View>
                <View style={styles.rect10}></View>
              </View>
            </ScrollView>
            <Text style={styles.nailSalon}>Nail Salon</Text>
            <ScrollView horizontal={true}>
              <View style={styles.rect11Row}>
                <View style={styles.rect11}></View>
                <View style={styles.rect12}></View>
              </View>
            </ScrollView>
          </ScrollView>
        </View>
        <MaterialBasicFooter1
          icon1Name="heart"
          text1="Favourite"
          icon2Name="near-me"
          text2="Nearby"
          icon3Name="bell-ring"
          text3="notification"
          icon4Name="message"
          text4="message "
          style={styles.materialBasicFooter1}
        ></MaterialBasicFooter1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    borderColor: "#000000"
  },
  rect: {
    top: 0,
    left: 1,
    width: 375,
    height: 812,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  rect2: {
    top: 43,
    left: 7,
    width: 334,
    height: 46,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  helloName: {
    width: 237,
    height: 23,
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 14,
    marginLeft: 49
  },
  materialButtonHamburger: {
    top: 0,
    left: 0,
    width: 57,
    height: 57,
    backgroundColor: "rgba(66,66,66,1)",
    position: "absolute",
    borderRadius: 100
  },
  icon: {
    top: 17,
    left: 291,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 30
  },
  rect2Stack: {
    top: 47,
    left: 0,
    width: 341,
    height: 89,
    position: "absolute"
  },
  image: {
    top: 0,
    left: 80,
    width: 191,
    height: 64,
    position: "absolute"
  },
  rect2StackStack: {
    width: 341,
    height: 136,
    marginTop: 30,
    marginLeft: 15
  },
  yourRecentServices: {
    width: 193,
    height: 25,
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 16,
    marginLeft: 15
  },
  rect3: {
    width: 158,
    height: 82,
    backgroundColor: "rgba(45,45,45,1)"
  },
  rect6: {
    width: 158,
    height: 82,
    backgroundColor: "rgba(45,45,45,1)",
    marginLeft: 14
  },
  rect3Row: {
    height: 82,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 17,
    marginRight: 28
  },
  popularNearYou: {
    width: 193,
    height: 25,
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 26,
    marginLeft: 15
  },
  rect7: {
    width: 158,
    height: 82,
    backgroundColor: "rgba(45,45,45,1)"
  },
  rect8: {
    width: 158,
    height: 82,
    backgroundColor: "rgba(45,45,45,1)",
    marginLeft: 14
  },
  rect7Row: {
    height: 82,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 17,
    marginRight: 28
  },
  barbershop: {
    width: 193,
    height: 25,
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 11,
    marginLeft: 15
  },
  rect9: {
    width: 158,
    height: 82,
    backgroundColor: "rgba(45,45,45,1)",
    marginTop: 1
  },
  rect10: {
    width: 158,
    height: 82,
    backgroundColor: "rgba(45,45,45,1)",
    marginLeft: 14
  },
  rect9Row: {
    height: 83,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 17,
    marginRight: 28
  },
  nailSalon: {
    width: 193,
    height: 25,
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-700",
    marginTop: 22,
    marginLeft: 15
  },
  rect11: {
    width: 158,
    height: 82,
    backgroundColor: "rgba(45,45,45,1)"
  },
  rect12: {
    width: 158,
    height: 82,
    backgroundColor: "rgba(45,45,45,1)",
    marginLeft: 16
  },
  rect11Row: {
    height: 82,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 15,
    marginRight: 28
  },
  materialBasicFooter1: {
    top: 709,
    left: 0,
    width: 376,
    height: 103,
    position: "absolute"
  },
  rectStack: {
    width: 376,
    height: 812,
    marginLeft: -1
  }
});
