import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, TabActions } from "@react-navigation/native";
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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from "./Auth";
import { useContext } from "react";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const profilStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ header: () => null }}>
    <HomeStack.Screen
      options={{ header: () => null }}
      name="homepage"
      component={HomePage}
    />
    <HomeStack.Screen name="requestPage" component={requestPage} />
    <HomeStack.Screen name="option" component={option} />
    <HomeStack.Screen name="searchPage" component={searchPage} />
    <HomeStack.Screen name="payement" component={payement} />
    <HomeStack.Screen name="location" component={locationPage} />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <profilStack.Navigator>
    <profilStack.Screen name="search" component={searchPage} />
  </profilStack.Navigator>
);
const tabs = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="homepage" component={HomeStackScreen} />
    <Tabs.Screen name="searchPage" component={SearchStackScreen} />
  </Tabs.Navigator>
);

const getFont = () =>
  Font.loadAsync({
    "armata-regular": require("../assets/fonts/armata-regular.ttf"),
    "alef-regular": require("../assets/fonts/alef-regular.ttf"),
    "arial-regular": require("../assets/fonts/arial-regular.ttf"),
    "calibri-bold": require("../assets/fonts/calibri-bold.ttf"),
    "roboto-700": require("../assets/fonts/roboto-700.ttf"),
    "roboto-regular": require("../assets/fonts/roboto-regular.ttf")
  });

export const Routes: React.FC<RouteProps> = ({}) => {
  const [fontLoaded, setFontisLoaded] = useState(false);
  const { userToken } = useContext(AuthContext);

  if (fontLoaded) {
    return (
      <NavigationContainer>
        {userToken ? (
          <Drawer.Navigator>
            <Drawer.Screen name="home" component={tabs} />
            <Drawer.Screen name="option" component={option} />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="Page1" component={firstPage} />
            <Stack.Screen name="Page2" component={firstPage2} />
            <Stack.Screen name="Page3" component={firstPage3} />
            <Stack.Screen name="connection" component={connection} />
            <Stack.Screen name="register" component={register} />
            <Stack.Screen name="login" component={login} />
            <Stack.Screen name="sellerSteps" component={sellerSteps} />
            <Stack.Screen name="schedulePage" component={schedulePage} />
            <Stack.Screen name="pricePage" component={pricePage} />
            <Stack.Screen name="picDownload" component={picDownload} />
            <Stack.Screen name="help" component={help} />
            <Stack.Screen name="payout" component={payout} />
            <Stack.Screen name="serviceProvider" component={serviceProvider} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontisLoaded(true)} />
    );
  }
};
