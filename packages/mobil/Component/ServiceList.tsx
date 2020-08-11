import { View } from "native-base";
import * as React from "react";
import {
	ActivityIndicator,
	Button,
	FlatList,
	NativeModules,
	Text,
	TouchableOpacity,
} from "react-native";
import FastImage from "react-native-fast-image";
import HomePageStyle from "../routes/HomeStack/homePage/style/style";
import { getHours } from "../shareFuction/milisecondTohours";
interface Props {
	navigation: any;
	data: any;
	Type: string;
	Loading?: any;
}

const { PlatformConstants } = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;
export class List extends React.PureComponent<Props> {
	state = {
		imageLoaded: false,
	};

	render() {
		const { navigation, data, Loading } = this.props;
		if (Loading) {
			return <ActivityIndicator style={{ flex: 1 }} />;
		}
		if (data.length === 0) {
			return (
				<View>
					<Text
						style={[
							{ textAlign: "center" },
							deviceType !== "phone" && {
								fontSize: 20,
								marginBottom: 30,
								marginTop: 30,
							},
						]}
					>
						They're currently no {this.props.Type} in your Area
					</Text>
					<Button
						title={`Become a ${this.props.Type}`}
						onPress={() => navigation.navigate("becomeAseller")}
					/>
				</View>
			);
		} else {
			return (
				<FlatList
					horizontal={true}
					style={{ flex: 1 }}
					renderItem={({ item }) => {
						const link = item.profilPicture;

						return (
							<TouchableOpacity
								onPress={() => {
									console.log(item.profilPicture);
									navigation.navigate("requestPage", {
										id: item.id,
										description: item.description,
										Adresse: item.Adress,
										countryId: item.coutryId,
										stateId: item.stateId,
										cityId: item.cityId,
										ownerId: item.ownerId,
										adresseVisible: item.adresseVisible,
										profilPic: link,
										pictureUrl: item.picturesUrl,
										name: item.name,
										price: item.price,
										averageTime: getHours(item.averageTime, true),
										category: item.category,
									});
								}}
								style={HomePageStyle.ListRectStyle}
							>
								<FastImage
									style={{
										flex: 1,
										width: "100%",
										height: "100%",
									}}
									source={{
										uri: link ? link : undefined,
										priority: FastImage.priority.normal,
									}}
								/>
							</TouchableOpacity>
						);
					}}
					data={data}
					showsHorizontalScrollIndicator={false}
					// Performance settings
					removeClippedSubviews={true} // Unmount components when outside of window
					initialNumToRender={2} // Reduce initial render amount
					maxToRenderPerBatch={1} // Reduce number in each render batch
					updateCellsBatchingPeriod={100} // Increase time between renders
					windowSize={7} // Reduce the window size
				/>
			);
		}
	}
}
export default List;
