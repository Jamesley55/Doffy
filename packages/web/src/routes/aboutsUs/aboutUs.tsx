/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export const AboutUs: React.FC = () => {
	return (
		<ScrollView style={{ flex: 1 }}>
			<View>
				<View>
					<TouchableOpacity onPress={() => console.log("serviceHomePage")} />
					<TouchableOpacity>
						<Text
							style={{ alignSelf: "center" }}
							onPress={() => console.log("serviceHomePage")}
						>
							About us
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
		</ScrollView>
	);
};
