import React, { Component, useState } from "react";

import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import AppLoading from "expo/build/launch/AppLoading";

export function firstPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/barbershop.jpg")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        />
        <View style={styles.rect2Row}>
          <View style={styles.rect2}>
            <TouchableOpacity onPress={() => navigation.navigate("Page2")}>
              <Image
                source={require("../assets/images/cut.jpg")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.rect3Stack}>
            <View style={styles.rect3}></View>
            <TouchableOpacity onPress={() => navigation.navigate("Page3")}>
              <Image
                source={require("../assets/images/barber.jpg")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={{
            height: 40,
            width: 160,
            borderRadius: 10,
            marginLeft: 50,
            marginRight: 50,
            marginTop: 0,
            marginBottom: 160,
            zIndex: 4
          }}
        >
          <Text
            style={{
              height: 40,
              width: 160,
              marginTop: -30,
              marginRight: 50
            }}
            onPress={() => navigation.navigate("Page2")}
          >
            chercher un service
          </Text>
          <Text
            style={{
              height: 40,
              width: 160,
              marginLeft: 175,
              marginTop: -50,
              marginRight: 50
            }}
            onPress={() => navigation.navigate("Page3")}
          >
            offrir a service
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={styles.lOgIn1}
        onPress={() => navigation.navigate("connection")}
      >
        Register
      </Text>
      <Text style={styles.lOgIn1} onPress={() => navigation.navigate("login")}>
        lOG IN
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  image: {
    top: 0,
    left: 0,
    flex: 1,
    width: 425,
    height: 740,
    position: "absolute",
    flexDirection: "row",
    zIndex: -1
  },
  image_imageStyle: {},
  rect2: {
    width: 162,
    height: 153,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30
  },
  image2: {
    width: 162,
    height: 114,
    borderRadius: 30
  },
  textInput: {
    width: 162,
    height: 39,
    fontSize: 20,
    marginTop: 133
  },
  rect3: {
    top: 0,
    left: 1,
    width: 162,
    height: 153,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 30,
    borderColor: "#000000",
    borderWidth: 0
  },
  image3: {
    top: 0,
    left: 0,
    width: 164,
    height: 104,
    position: "absolute",
    borderRadius: 30
  },
  rect3Stack: {
    width: 164,
    height: 153,
    marginLeft: 11
  },
  rect2Row: {
    height: 153,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 26,
    marginTop: 587,
    zIndex: 2
  },
  rect: {
    top: 618,
    left: 0,
    width: 425,
    height: 422,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 27,
    zIndex: 0
  },
  textInput1: {
    width: 162,
    height: 39,
    color: "rgba(0,0,0,1)",
    borderColor: "rgba(65,65,65,1)",
    borderWidth: 1,
    fontSize: 20,
    fontFamily: "arial-regular",
    textAlign: "center",
    marginLeft: 199
  },
  lOgIn1: {
    width: 161,
    height: 25,
    color: "rgba(96,96,96,1)",
    fontSize: 18,
    fontFamily: "armata-regular",
    textAlign: "center",
    marginTop: -80,
    marginLeft: 108
  },
  imageStack: {
    width: 375,
    height: 940,
    marginTop: -100
  }
});
