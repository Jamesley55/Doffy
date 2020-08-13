/* eslint-disable react/jsx-no-undef */
import { BlueButton } from "@doffy/component";
import * as React from "react";
import {
	Linking,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export const Appclone: React.FC = () => {
	return (
		<View>
			<ScrollView style={{ flex: 1 }}>
				<View>
					<View>
						<TouchableOpacity onPress={() => console.log("serviceHomePage")} />
						<TouchableOpacity>
							<Text
								style={{ alignSelf: "center" }}
								onPress={() => console.log("serviceHomePage")}
							>
								find a Service
							</Text>
						</TouchableOpacity>
					</View>
					<View>
						<TouchableOpacity onPress={() => console.log("serviceHomePage")} />
						<TouchableOpacity>
							<Text
								style={{ alignSelf: "center" }}
								onPress={() => console.log("serviceHomePage")}
							>
								provide a Service
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<Text
					style={{ alignSelf: "center" }}
					onPress={() => console.log("welcomePage")}
				>
					Register
				</Text>
				<Text
					style={{ alignSelf: "center" }}
					onPress={() => console.log("login")}
				>
					lOG IN
				</Text>
				<App2 />
			</ScrollView>
			<View style={style.appFooter}>
				<Footer footerText="About Us" linkAddress="https://www.google.com" />
				<Footer footerText="Contact Us" linkAddress="https://www.yahoo.com" />
				<Footer footerText="Site Map" linkAddress="https://www.github.com" />
			</View>
		</View>
	);
};

const App2: React.FC = () => {
	return (
		<ScrollView style={{ flex: 1 }}>
			<View>
				<View>
					<TouchableOpacity>
						<Text>App clone </Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text
							style={{ alignSelf: "center" }}
							onPress={() => console.log("serviceHomePage")}
						>
							find a Service
						</Text>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity onPress={() => console.log("serviceHomePage")} />
					<BlueButton
						Text1="download For ios"
						onPress={async () => {
							await Linking.openURL(
								"https://apps.apple.com/ca/app/doffy/id1510079483"
							);
						}}
						style={{
							width: 200,
							alignSelf: "center",
							backgroundColor: "green",
							borderRadius: 30,
						}}
					/>
				</View>
			</View>
			<Text
				style={{ alignSelf: "center" }}
				onPress={() => console.log("welcomePage")}
			>
				Register
			</Text>
			<Text
				style={{ alignSelf: "center" }}
				onPress={() => console.log("login")}
			>
				lOG IN
			</Text>
		</ScrollView>
	);
};

const Footer = (props: CompProps) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<TouchableOpacity onPress={() => Linking.openURL(props.linkAddress)}>
				<Text style={textStyle}> {props.footerText}</Text>
			</TouchableOpacity>
		</View>
	);
};

interface CompProps {
	footerText: string;
	linkAddress: string;
}

const styles = {
	textStyle: {
		fontSize: 18,
	},
	viewStyle: {
		flex: 1,

		flexDirection: "row" as "row",
		alignItems: "center" as "center",
		justifyContent: "center" as "center",
	},
};
const style = StyleSheet.create({
	appFooter: {
		height: 300,
		flexDirection: "row" as "row",
		alignItems: "center" as "center",
		backgroundColor: "gray",
		marginTop: 400,
	},
});
