import * as React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Entypo";
import { getSessionID } from "../../../../shareFuction/sessionId";
import { serviceHomePageStyle } from "../style/style";
export function serviceHomePage({ navigation }) {
	return (
		<SafeAreaView>
			<Icon name="chevron-thin-up" style={serviceHomePageStyle.upIcon}></Icon>
			<Text
				style={serviceHomePageStyle.goBack}
				onPress={() => {
					navigation.goBack();
				}}
			>
				Go back
			</Text>
			<ScrollView>
				<View style={serviceHomePageStyle.rectRow}>
					<TouchableOpacity
						onPress={async () =>
							(await getSessionID("sid"))
								? navigation.navigate("welcomePage")
								: navigation.navigate("welcomePage")
						}
					>
						<View style={serviceHomePageStyle.rect} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={async () =>
							(await getSessionID("sid"))
								? navigation.navigate("welcomePage")
								: navigation.navigate("welcomePage")
						}
					>
						<View style={serviceHomePageStyle.rect} />
					</TouchableOpacity>
				</View>
				<View style={serviceHomePageStyle.rectRow}>
					<TouchableOpacity
						onPress={async () =>
							(await getSessionID("sid"))
								? navigation.navigate("welcomePage")
								: navigation.navigate("welcomePage")
						}
					>
						<View style={serviceHomePageStyle.rect} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={async () =>
							(await getSessionID("sid"))
								? navigation.navigate("welcomePage")
								: navigation.navigate("welcomePage")
						}
					>
						<View style={serviceHomePageStyle.rect} />
					</TouchableOpacity>
				</View>
				<View style={serviceHomePageStyle.rectRow}>
					<TouchableOpacity
						onPress={async () =>
							(await getSessionID("sid"))
								? navigation.navigate("welcomePage")
								: navigation.navigate("welcomePage")
						}
					>
						<View style={serviceHomePageStyle.rect} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={async () =>
							(await getSessionID("sid"))
								? navigation.navigate("welcomePage")
								: navigation.navigate("welcomePage")
						}
					>
						<View style={serviceHomePageStyle.rect} />
					</TouchableOpacity>
				</View>
				<View style={serviceHomePageStyle.rectRow}>
					<TouchableOpacity
						onPress={async () =>
							(await getSessionID("sid"))
								? navigation.navigate("welcomePage")
								: navigation.navigate("welcomePage")
						}
					>
						<View style={serviceHomePageStyle.rect} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={async () =>
							(await getSessionID("sid"))
								? navigation.navigate("welcomePage")
								: navigation.navigate("welcomePage")
						}
					>
						<View style={serviceHomePageStyle.rect} />
					</TouchableOpacity>
				</View>
				<View style={serviceHomePageStyle.rectRow}>
					<TouchableOpacity
						onPress={async () =>
							(await getSessionID("sid"))
								? navigation.navigate("welcomePage")
								: navigation.navigate("welcomePage")
						}
					>
						<View style={serviceHomePageStyle.rect} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={async () =>
							(await getSessionID("sid"))
								? navigation.navigate("welcomePage")
								: navigation.navigate("welcomePage")
						}
					>
						<View style={serviceHomePageStyle.rect} />
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
