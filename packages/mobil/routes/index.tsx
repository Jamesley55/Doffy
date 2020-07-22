import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import * as SecureStore from "expo-secure-store";
import AppLoading from "expo/build/launch/AppLoading";
import * as React from "react";
import { ActivityIndicator } from "react-native";
import { RouteProps } from "react-router-native";
import { AuthPages } from "../screenStack/creation";
import { drawer } from "../screenStack/drawers";
import { AuthContext } from "../shareFuction/userContext";

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
	const [loading, setLoading] = React.useState(true);
	const [fontLoaded, setFontisLoaded] = React.useState(false);
	const { user, token, homeScreen, me, logout } = React.useContext(AuthContext);

	React.useEffect(() => {
		SecureStore.getItemAsync("sid")
			.then((tk) => {
				if (tk) {
					console.log("tk", tk);
					homeScreen(tk);
					me();
					console.log("me", user);
					setLoading(false);
				} else {
					setLoading(false);
				}
			})
			.catch((err) => {
				console.log(err);
				console.log(
					"errors                                                     ",
					err.networkError.result.errors
				);
				logout();

				setLoading(false);
			});
	}, []);

	if (loading) {
		return <ActivityIndicator size="large" style={{ flex: 1 }} />;
	}
	if (fontLoaded) {
		return (
			<NavigationContainer>
				{token ? drawer() : AuthPages()}
			</NavigationContainer>
		);
	} else {
		return (
			<AppLoading startAsync={getFont} onFinish={() => setFontisLoaded(true)} />
		);
	}
};
