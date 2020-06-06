import * as React from "react";
import { Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import MaterialButtonGrey from "../components/MaterialButtonGrey";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import MaterialButtonDark from "../components/MaterialButtonDark";
import { welcomePageStyle } from "../style/style";

export function welcomePage({ navigation }) {
  return (
    <SafeAreaView style={welcomePageStyle.container}>
      <TouchableOpacity onPress={() => navigation.push("firstPage")}>
        <Image
          source={require("../../../../logo/LogoJamesleyApp.png")}
          style={welcomePageStyle.image}
        />
      </TouchableOpacity>
      <Text style={welcomePageStyle.welcome}>Welcome</Text>
      <MaterialButtonGrey
        navigation="register"
        Appleicon="logo-apple"
        text1="Continue With Apple "
        style={welcomePageStyle.continueWithApple}
      ></MaterialButtonGrey>
      <MaterialButtonViolet1
        navigation="register"
        icon="sc-facebook"
        text1="Continue with Facebook "
        style={welcomePageStyle.continueWithFacebook}
      />
      <MaterialButtonGrey
        navigation="register"
        googleIcon="sc-google-plus"
        text1="Continue With Google"
        style={welcomePageStyle.continueWithGoogle}
      />

      <MaterialButtonDark
        navigation="register"
        text1="SIGN UP FREE"
        style={welcomePageStyle.signUpFree}
      />
      <Text
        style={welcomePageStyle.lOgIn}
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        lOG IN
      </Text>
    </SafeAreaView>
  );
}
