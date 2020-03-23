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
import { firstPage2 } from "./firstPage2/src/screens/firstPage2";
import { firstPage3 } from "./firstPage3/src/screens/firstPage3";
import { HomePage } from "./homePage/src/screens/homePage";
import { option } from "./option/src/screens/option";
import { searchPage } from "./searchPage/src/screens/searchPage";
import { sellerSteps } from "./sellerSteps/src/screens/sellerSteps";
import { help } from "./help/src/screens/help";
import { serviceProvider } from "./serviceProvider/src/screens/serviceProvider";
import { pricePage } from "./pricePage/src/screens/pricePage";
import { schedulePage } from "./schedulePage/src/screens/schedulePage";
import { picDownload } from "./picDownload/src/screens/picDownload";
import { payout } from "./payout/src/screens/payout";
import { requestPage } from "./requestPage/src/screens/request";
import { locationPage } from "./locationPage/src/screens/location";
import { payement } from "./payementPage/src/screens/payement";

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
          <Stack.Screen name="Page1" component={firstPage} />
          <Stack.Screen name="Page2" component={firstPage2} />
          <Stack.Screen name="Page3" component={firstPage3} />
          <Stack.Screen name="connection" component={connection} />
          <Stack.Screen name="register" component={register} />
          <Stack.Screen name="login" component={login} />
          <Stack.Screen name="homepage" component={HomePage} />
          <Stack.Screen name="option" component={option} />
          <Stack.Screen name="searchPage" component={searchPage} />
          <Stack.Screen name="sellersSteps" component={sellerSteps} />
          <Stack.Screen name="help" component={help} />
          <Stack.Screen name="serviceProvider" component={serviceProvider} />
          <Stack.Screen name="pricePage" component={pricePage} />
          <Stack.Screen name="schedulePage" component={schedulePage} />
          <Stack.Screen name="picDownload" component={picDownload} />
          <Stack.Screen name="payout" component={payout} />
          <Stack.Screen name="requestPage" component={requestPage} />
          <Stack.Screen name="location" component={locationPage} />
          <Stack.Screen name="payement" component={payement} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontisLoaded(true)} />
    );
  }
};
