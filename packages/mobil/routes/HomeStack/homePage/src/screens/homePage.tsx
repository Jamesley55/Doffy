import * as React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../../../../../shareFuction/userContext";
import List from "../components/List";
import MaterialButtonHamburger from "../components/MaterialButtonHamburger";

interface Props {
	navigation: any;
}

export function HomePage({ navigation }) {
	const { me, user } = React.useContext(AuthContext);
	me();
	return (
		<View style={styles.container}>
			<View style={styles.rectStack}>
				<View style={styles.rect}>
					<View style={styles.rect2StackStack}>
						<View style={styles.rect2Stack}>
							<View style={styles.rect2}>
								<Text
									style={styles.helloName}
									onPress={async () => {
										console.log("kaka");
									}}
								>
									Hello, {user ? user : "User"}
								</Text>
							</View>

							<MaterialButtonHamburger
								style={styles.materialButtonHamburger}
							></MaterialButtonHamburger>
							<Icon
								name="md-search"
								style={styles.icon}
								onPress={() => {
									navigation.navigate("searchPage");
								}}
							></Icon>
						</View>
						<Image
							source={require("../../../../../logo/LogoJamesleyApp.png")}
							resizeMode="contain"
							style={styles.image}
						></Image>
					</View>
					<ScrollView style={{ marginBottom: 10 }}>
						<Text style={styles.yourRecentServices}>your recent services</Text>
						<List></List>
						<Text style={styles.popularNearYou}>Popular near you</Text>
						<List></List>
						<Text style={styles.barbershop}>Barbershop</Text>
						<List></List>
						<Text style={styles.nailSalon}>Nail Salon</Text>
						<List></List>
						<Text style={styles.nailSalon}>Nail Salon</Text>
						<List></List>
						<Text style={styles.nailSalon}>Nail Salon</Text>
						<List></List>
						<Text style={styles.nailSalon}>Nail Salon</Text>
						<List></List>
						<Text style={styles.nailSalon}>Nail Salon</Text>
						<List></List>
					</ScrollView>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		borderWidth: 1,
		width: "100%",
		justifyContent: "center",
		borderColor: "#000000",
	},
	rect: {
		top: 0,
		left: 1,
		width: "100%",
		height: 812,
		backgroundColor: "rgba(230, 230, 230,1)",
		position: "absolute",
	},
	rect2: {
		top: 43,
		left: 7,
		width: "100%",
		height: 46,
		backgroundColor: "rgba(230, 230, 230,1)",
		position: "absolute",
	},
	helloName: {
		width: 237,
		height: 23,
		color: "#121212",
		fontSize: 20,
		fontFamily: "roboto-regular",
		textAlign: "center",
		marginTop: 14,
		marginLeft: 49,
	},
	materialButtonHamburger: {
		top: 0,
		left: 0,
		width: 57,
		height: 57,
		backgroundColor: "rgba(66,66,66,1)",
		position: "absolute",
		borderRadius: 100,
	},
	icon: {
		top: 0,
		left: 330,
		position: "absolute",
		color: "rgba(128,128,128,1)",
		fontSize: 40,
		height: 40,
		width: 30,
	},
	rect2Stack: {
		top: 47,
		left: 0,
		width: "100%",
		height: 89,
		position: "absolute",
	},
	image: {
		top: 0,
		left: 80,
		width: 191,
		height: 64,
		position: "absolute",
	},
	rect2StackStack: {
		width: "100%",
		height: 136,
		marginTop: 30,
		marginLeft: 15,
	},
	yourRecentServices: {
		width: 193,
		height: 25,
		color: "#121212",
		fontSize: 20,
		fontFamily: "roboto-700",
		marginTop: 16,
		marginLeft: 15,
	},
	rect3: {
		width: 188,
		height: 82,
		backgroundColor: "rgba(45,45,45,1)",
	},
	rect6: {
		width: 188,
		height: 82,
		backgroundColor: "rgba(45,45,45,1)",
		marginLeft: 14,
	},
	rect3Row: {
		height: 82,
		flexDirection: "row",
		marginTop: 6,
		marginLeft: 17,
		marginRight: 28,
	},
	popularNearYou: {
		width: "100%",
		height: 25,
		color: "#121212",
		fontSize: 20,
		fontFamily: "roboto-700",
		marginTop: 26,
		marginLeft: 15,
	},
	rect7: {
		width: 188,
		height: 82,
		backgroundColor: "rgba(45,45,45,1)",
	},
	rect8: {
		width: 188,
		height: 82,
		backgroundColor: "rgba(45,45,45,1)",
		marginLeft: 14,
	},
	rect7Row: {
		height: 82,
		flexDirection: "row",
		marginTop: 7,
		marginLeft: 17,
		marginRight: 28,
	},
	barbershop: {
		width: 193,
		height: 25,
		color: "#121212",
		fontSize: 20,
		fontFamily: "roboto-700",
		marginTop: 11,
		marginLeft: 15,
	},
	rect9: {
		width: 188,
		height: 82,
		backgroundColor: "rgba(45,45,45,1)",
		marginTop: 1,
	},
	rect10: {
		width: 188,
		height: 82,
		backgroundColor: "rgba(45,45,45,1)",
		marginLeft: 14,
	},
	rect9Row: {
		height: 83,
		flexDirection: "row",
		marginTop: 4,
		marginLeft: 17,
		marginRight: 28,
	},
	nailSalon: {
		width: 193,
		height: 25,
		color: "#121212",
		fontSize: 20,
		fontFamily: "roboto-700",
		marginTop: 22,
		marginLeft: 15,
	},
	rect11: {
		width: 188,
		height: 82,
		backgroundColor: "rgba(45,45,45,1)",
	},
	rect12: {
		width: 188,
		height: 82,
		backgroundColor: "rgba(45,45,45,1)",
		marginLeft: 16,
	},
	rect11Row: {
		height: 82,
		flexDirection: "row",
		marginTop: 1,
		marginLeft: 15,
		marginRight: 28,
	},
	rectStack: {
		flex: 1,
		width: "100%",
		height: 812,
		marginLeft: -1,
	},
});
