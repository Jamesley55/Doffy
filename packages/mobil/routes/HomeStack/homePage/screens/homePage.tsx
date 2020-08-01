import * as React from "react";
import {
	ActivityIndicator,
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialButtonHamburger from "../../../../Component/MaterialButtonHamburger";
import List from "../../../../Component/ServiceList";
import { TabsStackNavProps } from "../../../../screenStack/Tydefs/tabsParamsList";
import { serviceByCategoryContext } from "../../../../shareFuction/serviceByCategory";
import { AuthContext } from "../../../../shareFuction/userContext";
import { HomePageStyle } from "../style/style";

const LeftAction = () => {
	return (
		<TouchableOpacity
			style={{ backgroundColor: "green" }}
			onPress={() => console.log("hello")}
		>
			<Text>Hello</Text>
		</TouchableOpacity>
	);
};

export function HomePage({ navigation }: TabsStackNavProps<"homepage">) {
	const { me, user } = React.useContext(AuthContext);
	const {
		BarbershopQuery,
		TatooQuery,
		HairstylistQuery,
		MakeupQuery,
		EyebrowQuery,
		LashQuery,
		NailQuery,
		AestheticianQuery,
	} = React.useContext(serviceByCategoryContext);
	const [loading, setLoading] = React.useState(true);
	const [barber, setbarber] = React.useState<any[]>([]);
	const [tatoo, settatoo] = React.useState<any[]>([]);
	const [Hair, setHair] = React.useState<any[]>([]);
	const [Makeup, setMakeup] = React.useState<any[]>([]);
	const [Eyebrows, setEyebrows] = React.useState<any[]>([]);
	const [Lash, setLash] = React.useState<any[]>([]);
	const [Nail, setNail] = React.useState<any[]>([]);
	const [Aesthetician, setAesthetician] = React.useState<any[]>([]);

	me();

	React.useEffect(() => {
		BarbershopQuery()
			.then((index: any) => {
				setbarber(index);
			})
			.catch((err: any) => {
				console.log(err);
			});

		TatooQuery()
			.then((index: any) => {
				settatoo(index);
			})
			.catch((err: any) => {
				console.log(err);
			});
		HairstylistQuery()
			.then((index: any) => {
				setHair(index);
			})
			.catch((err: any) => {
				console.log(err);
			});
		MakeupQuery()
			.then((index: any) => {
				setMakeup(index);
			})
			.catch((err: any) => {
				console.log(err);
			});
		EyebrowQuery()
			.then((index: any) => {
				setEyebrows(index);
			})
			.catch((err: any) => {
				console.log(err);
			});
		LashQuery()
			.then((index: any) => {
				setLash(index);
			})
			.catch((err: any) => {
				console.log(err);
			});
		NailQuery()
			.then((index: any) => {
				setNail(index);
			})
			.catch((err: any) => {
				console.log(err);
			});
		AestheticianQuery()
			.then((index: any) => {
				setAesthetician(index);
			})
			.catch((err: any) => {
				console.log(err);
			});
		setLoading(false);
	}, [user]);
	if (loading) {
		return <ActivityIndicator size="large" style={{ flex: 1 }} />;
	} else {
		return (
			<SafeAreaView style={HomePageStyle.Background}>
				<Image
					source={require("../../../../logo/LogoJamesleyApp.png")}
					resizeMode="contain"
					style={HomePageStyle.image}
				/>
				<MaterialButtonHamburger
					navigation={navigation}
					style={HomePageStyle.materialButtonHamburger}
				/>
				<Text
					style={HomePageStyle.Title}
					onPress={async () => {
						console.log("kaka");
					}}
				>
					Hello, {user ? user : "user"}
				</Text>

				{/*<Icon
									name="md-search"
									style={HomePageStyle.icon}
									onPress={() => {
										navigation.navigate("searchPage");
									}}
								/> */}
				<ScrollView>
					<Text style={HomePageStyle.TitleList}>Barbershop</Text>
					<List navigation={navigation} data={barber} Type="Barbershop" />
					<Text style={HomePageStyle.TitleList}>Tatoo Artist</Text>
					<List navigation={navigation} data={tatoo} Type="Tatoo Artist" />
					<Text style={HomePageStyle.TitleList}>Hairstylist</Text>
					<List navigation={navigation} data={Hair} Type="Hairstylist" />
					<Text style={HomePageStyle.TitleList}>Makeup Artist</Text>
					<List navigation={navigation} data={Makeup} Type="Makeup Artist" />
					<Text style={HomePageStyle.TitleList}>Eyebrow Technician</Text>
					<List
						navigation={navigation}
						data={Eyebrows}
						Type="Eyebrow Technician"
					/>
					<Text style={HomePageStyle.TitleList}>Lash Technician</Text>
					<List navigation={navigation} data={Lash} Type="Lash Technician" />
					<Text style={HomePageStyle.TitleList}>Nail Technician</Text>
					<List navigation={navigation} data={Nail} Type="Nail Technician" />
					<Text style={HomePageStyle.TitleList}>Aesthetician</Text>
					<List navigation={navigation} data={Aesthetician} Type="Barbershop" />
				</ScrollView>
			</SafeAreaView>
		);
	}
}
