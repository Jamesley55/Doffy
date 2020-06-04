import * as React from "react";
import { firstPageStyle } from "../style/stylesheet";
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";

const dim = Dimensions.get("window");

export function firstPage({ navigation }) {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/images/barbershop.jpg")}
        style={firstPageStyle.backgroundImage}
      />
      <View style={firstPageStyle.stack}>
        <View style={firstPageStyle.leftRectStack}>
          <TouchableOpacity onPress={() => navigation.navigate("Page2")}>
            <Image
              source={require("../assets/images/cut.jpg")}
              style={firstPageStyle.leftImage}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={firstPageStyle.chercherService}
              onPress={() => {
                console.log(dim);
              }}
            >
              chercher un service
            </Text>
          </TouchableOpacity>
        </View>
        <View style={firstPageStyle.rightRectStack}>
          <TouchableOpacity onPress={() => navigation.navigate("seller")}>
            <Image
              source={require("../assets/images/barber.jpg")}
              style={firstPageStyle.rightImage}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={firstPageStyle.offrirService}
              onPress={() => navigation.navigate("seller")}
            >
              offrir a service
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={firstPageStyle.Text}
        onPress={() => navigation.navigate("connection")}
      >
        Register
      </Text>
      <Text
        style={firstPageStyle.Text}
        onPress={() => navigation.navigate("login")}
      >
        lOG IN
      </Text>
    </SafeAreaView>
  );
}
