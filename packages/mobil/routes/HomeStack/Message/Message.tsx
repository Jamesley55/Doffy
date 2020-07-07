import * as React from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { TabsStackNavProps } from "../../../screenStack/Tydefs/tabsParamsList";
import { IntercommunicationContext } from "../../../shareFuction/IntercommunicationContext";

export function Message({ navigation }: TabsStackNavProps<"message">) {
	const { MessageQuery } = React.useContext(IntercommunicationContext);
	const [loading, setLoading] = React.useState(true);
	const [array, setArray] = React.useState<any[]>([]);

	React.useEffect(() => {
		MessageQuery()
			.then((index: any) => {
				console.log("variables ", index);
				setArray(index);
				setLoading(false);
			})
			.catch((err: any) => {
				console.log(err);
				setLoading(false);
			});
	}, []);
	if (loading || array.length === 0) {
		console.log("cette fonction sanbs flatlist");
		return (
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
						position: "absolute",
					}}
				>
					no data
				</Text>
			</View>
		);
	} else {
		console.log("cette fontion avec flatlist", array);

		return (
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
							<Button
								title={item.content}
								onPress={() => {
									navigation.navigate("DirectMessage", {
										kaka: "kaka",
									});
								}}
							/>
						</TouchableOpacity>
					);
				}}
				keyExtractor={(_item, index) => index.toString()}
				data={array}
			/>
		);
	}
}

export function DirectMessage({
	route,
}: TabsStackNavProps<"NotifDescription">) {
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
					position: "absolute",
				}}
			>
				{route.params.kaka}
			</Text>
		</View>
	);
}
