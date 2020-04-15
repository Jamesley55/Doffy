import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { firstPage } from "./firstPage/src/screens/firstPage";
import { connection } from "./connectionPage/src/screens/connect";
import { login } from "./login/src/screens/login";
import { RouteProps } from "react-router-native";
import * as Font from "expo-font";
import AppLoading from "expo/build/launch/AppLoading";
import { firstPage2 } from "./firstPage2/src/screens/firstPage2";
import { firstPage3 } from "./firstPage3/src/screens/firstPage3";
import { HomePage } from "./homePage/src/screens/homePage";
import { CustomDrawerContent } from "./option/src/screens/option";
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
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { AuthContext } from "./Auth";
import { useContext } from "react";
import { Notification } from "./Notification/notification";
import { Message } from "./Message/Message";
import { RegisterConnector } from "./register/src/registerConnector";
import { useState } from "react";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const profilStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      gestureEnabled: false,
    }}
    headerMode="none"
  >
    <HomeStack.Screen name="homepage" component={HomePage} />
    <HomeStack.Screen name="requestPage" component={requestPage} />
    <HomeStack.Screen name="payement" component={payement} />
    <HomeStack.Screen name="location" component={locationPage} />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <profilStack.Navigator screenOptions={{ header: () => null }}>
    <profilStack.Screen name="search" component={searchPage} />
  </profilStack.Navigator>
);
const tabs = () => (
  <Tabs.Navigator
    tabBarOptions={{ activeTintColor: "tomato", inactiveTintColor: "gray" }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "homepage") {
          iconName = "home";
          return <Ionicons name={"ios-home"} size={size} color={color} />;
        } else if (route.name === "searchPage") {
          iconName = "search";
          return <Ionicons name={"md-search"} size={size} color={color} />;
        } else if (route.name === "notification") {
          iconName = "notification";
          return (
            <MaterialCommunityIcons
              name={"notification-clear-all"}
              size={size}
              color={color}
            />
          );
        } else if (route.name === "message") {
          iconName = "message";
          return (
            <MaterialCommunityIcons
              name={"message-reply"}
              size={size}
              color={color}
            />
          );
        }

        // You can return any component that you like here!
        return <AntDesign name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tabs.Screen name="homepage" component={HomeStackScreen} />
    <Tabs.Screen name="searchPage" component={SearchStackScreen} />
    <Tabs.Screen name="notification" component={Notification} />
    <Tabs.Screen name="message" component={Message} />
  </Tabs.Navigator>
);
const sellerPage = () => (
  <Stack.Navigator
    screenOptions={{ header: () => null, gestureEnabled: false }}
  >
    <Stack.Screen name="Page3" component={firstPage3} />
    <Stack.Screen name="sellerSteps" component={sellerSteps} />
    <Stack.Screen name="schedulePage" component={schedulePage} />
    <Stack.Screen name="pricePage" component={pricePage} />
    <Stack.Screen name="picDownload" component={picDownload} />
    <Stack.Screen name="help" component={help} />
    <Stack.Screen name="payout" component={payout} />
    <Stack.Screen name="serviceProvider" component={serviceProvider} />
  </Stack.Navigator>
);

const drawer = (login, logout) => (
  <Drawer.Navigator
    drawerContent={(props) => CustomDrawerContent(props, logout)}
    drawerStyle={{
      width: "65%",
    }}
    drawerContentOptions={{
      activeTintColor: "#e91e63",
      itemStyle: { marginVertical: 10 },
    }}
  >
    <Drawer.Screen name="home" component={tabs} />
    <Drawer.Screen name="become a seller" component={sellerPage} />
    <Drawer.Screen name="payment Methode" component={payement} />
    <Drawer.Screen name="help" component={help} />
    <Drawer.Screen name="pricePage" component={pricePage} />
  </Drawer.Navigator>
);

const creationPage = () => (
  <Stack.Navigator
    screenOptions={{ header: () => null, gestureEnabled: false }}
  >
    <Stack.Screen name="Page1" component={firstPage} />
    <Stack.Screen name="connection" component={connection} />
    <Stack.Screen name="register" component={RegisterConnector} />
    <Stack.Screen name="login" component={login} />
    <Stack.Screen name="Page2" component={firstPage2} />
    <Stack.Screen name="seller" component={sellerPage} />
  </Stack.Navigator>
);

const getFont = () =>
  Font.loadAsync({
    "armata-regular": require("../assets/fonts/armata-regular.ttf"),
    "alef-regular": require("../assets/fonts/alef-regular.ttf"),
    "arial-regular": require("../assets/fonts/arial-regular.ttf"),
    "calibri-bold": require("../assets/fonts/calibri-bold.ttf"),
    "roboto-700": require("../assets/fonts/roboto-700.ttf"),
    "roboto-regular": require("../assets/fonts/roboto-regular.ttf"),
  });

export const Routes: React.FC<RouteProps> = ({}) => {
  const [fontLoaded, setFontisLoaded] = useState(false);
  const { userToken, login, logout } = useContext(AuthContext);

  if (fontLoaded) {
    return (
      <NavigationContainer>
        {userToken ? drawer(login, logout) : creationPage()}
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontisLoaded(true)} />
    );
  }
};
