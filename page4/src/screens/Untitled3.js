import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput
} from "react-native";

function Untitled3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/barbershop.jpg")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.rect2Row}>
            <View style={styles.rect2}>
              <Image
                source={require("../assets/images/cut.jpg")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
              <TextInput
                placeholder="Find a service"
                style={styles.textInput}
              ></TextInput>
            </View>
            <View style={styles.rect3Stack}>
              <View style={styles.rect3}></View>
              <Image
                source={require("../assets/images/barber.jpg")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.rect}>
          <TextInput
            placeholder="offer a service"
            style={styles.textInput1}
          ></TextInput>
        </View>
      </View>
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
    width: 375,
    height: 740,
    position: "absolute",
    flexDirection: "row"
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
    color: "rgba(0,0,0,1)",
    borderColor: "rgba(65,65,65,1)",
    borderWidth: 1,
    fontSize: 20,
    fontFamily: "arial-regular",
    textAlign: "center"
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
    marginTop: 587
  },
  rect: {
    top: 618,
    left: 0,
    width: 375,
    height: 322,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 27
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
    marginTop: 83,
    marginLeft: 199
  },
  imageStack: {
    width: 375,
    height: 940,
    marginTop: -100
  }
});

export default Untitled3;
