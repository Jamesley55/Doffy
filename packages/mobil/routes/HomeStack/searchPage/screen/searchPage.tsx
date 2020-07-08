import { SearchServicesUserQueryVariables } from "@doffy/controller";
import * as React from "react";
import {
	Button,
	FlatList,
	Image,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { SearchInput } from "../../../../Component/SearchInput";
import { TabsStackNavProps } from "../../../../screenStack/Tydefs/tabsParamsList";
import { SearchQueryContext } from "../../../../shareFuction/Searchcontext";
import { SearchPageStyle } from "../style/style";

export function searchPage({ navigation }: TabsStackNavProps<"searchPage">) {
	const { SearchQuery } = React.useContext(SearchQueryContext);
	const [loading, setLoading] = React.useState(true);
	const [array, setArray] = React.useState<any[]>([]);
	const [SearchInputState, setSearchInputState] = React.useState<
		SearchServicesUserQueryVariables
	>({ search: "", offset: 1, limit: 3 });

	console.log(SearchInputState.search);
	React.useEffect(() => {
		SearchQuery(SearchInputState)
			.then((index: any) => {
				console.log("variables ", index);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, [SearchInputState]);
	console.log(SearchInputState);
	console.log("array sa mere ", array);

	return (
		<React.Fragment>
			<SafeAreaView style={{ marginTop: -50 }} />
			<View style={SearchPageStyle.container}>
				<View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
					<EntypoIcon
						name="arrow-left"
						style={SearchPageStyle.iconFleche}
						onPress={() => {
							navigation.goBack();
						}}
					/>
					<Image
						source={require("../../../../logo/LogoJamesleyApp.png")}
						resizeMode="contain"
						style={SearchPageStyle.doffyImage}
					/>
				</View>
				<EntypoIcon name="cross" style={SearchPageStyle.iconDelete} />
				<Text style={SearchPageStyle.Submit}>What are you looking for?</Text>
				<SearchInput
					SearchInputState={setSearchInputState}
					setSearchInput={setSearchInputState}
					textInput1="What are you looking for?"
					style={SearchPageStyle.materialUnderlineTextbox}
				></SearchInput>
			</View>
			<FlatList
				style={{ flex: 1 }}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							style={{
								flex: 1,
								borderWidth: 1,
								borderRadius: 3,
								width: "100%",
								height: 80,
							}}
						>
							<Button title={item.username} onPress={() => {}} />
						</TouchableOpacity>
					);
				}}
				keyExtractor={(_item, index) => index.toString()}
				data={array}
			/>
		</React.Fragment>
	);
}
