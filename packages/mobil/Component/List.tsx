import * as faker from "faker";
import * as React from "react";
import { Button, FlatList, TouchableOpacity } from "react-native";

interface Props {
	navigation: any;
}
export class List extends React.PureComponent<Props> {
	render() {
		const { navigation } = this.props;
		return (
			<FlatList
				horizontal={true}
				style={{ flex: 1 }}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("requestPage");
							}}
							style={{
								flex: 1,
								borderWidth: 1,
								borderRadius: 1,
								width: 300,
								height: 150,
								justifyContent: "center",
								marginLeft: 40,
								backgroundColor: "rgba(45,45,45,1)",
							}}
						>
							<Button
								title={item}
								onPress={() => {
									navigation.navigate("requestPage");
								}}
							/>
						</TouchableOpacity>
					);
				}}
				keyExtractor={(product, idx) => product + idx}
				data={Array.from(Array(50), () => faker.commerce.product())}
			/>
		);
	}
}
export default List;
