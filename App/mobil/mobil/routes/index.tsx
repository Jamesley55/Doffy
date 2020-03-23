import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { firstPage } from "./firstPage/src/screens/firstPage";
import { connection } from "./connectionPage/src/screens/connect";
import { login } from "./login/src/screens/login";
import { register } from "./register/src/screens/register";
import { RouteProps } from "react-router-native";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo/build/launch/AppLoading";

const Stack = createStackNavigator();
const getFont = () =>
  Font.loadAsync({
    "armata-regular": require("../assets/fonts/armata-regular.ttf"),
    "alef-regular": require("../assets/fonts/alef-regular.ttf"),
    "arial-regular": require("../assets/fonts/arial-regular.ttf"),
    "caliri-bold": require("../assets/fonts/calibri-bold.ttf"),
    "roboto-700": require("../assets/fonts/roboto-700.ttf"),
    "roboto-regular": require("../assets/fonts/roboto-regular.ttf")
  });

export const Routes: React.FC<RouteProps> = ({}) => {
  const [fontLoaded, setFontisLoaded] = useState(false);
  if (fontLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name="login" component={login} />
          <Stack.Screen name="connection" component={connection} />
          <Stack.Screen name="register" component={register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontisLoaded(true)} />
    );
  }
};
