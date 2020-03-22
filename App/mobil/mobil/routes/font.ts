import * as Font from "expo-font";
import React from "react";

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      "amarta-regular": require("../fonts/fonts/amarta-regular.ttf"),
      "alef-regular": require("../fonts/fonts/alef-regular.ttf"),
      "arial-regular": require("../fonts/fonts/arial-regular.ttf"),
      "caliri-bold": require("../fonts/fonts/calibri-bold.ttf"),
      "roboto-700": require("../fonts/fonts/roboto-700.ttf"),
      "roboto-regular": require("../fonts/fonts/roboto-regular.ttf")
    });
  }
}
