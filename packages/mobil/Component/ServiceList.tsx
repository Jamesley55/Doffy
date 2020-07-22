import * as React from "react";
import {
	ActivityIndicator,
	FlatList,
	ImageBackground,
	Text,
	TouchableOpacity,
} from "react-native";
interface Props {
	navigation: any;
	data: any;
}
export class List extends React.PureComponent<Props> {
	state = {
		imageLoaded: false,
	};

	render() {
		const { navigation, data } = this.props;
		if (data.length === 0) {
			return <Text> no data </Text>;
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
										profilPic: link,
										pictureUrl: item.picturesUrl,
										name: item.name,
										price: item.price,
									});
								}}
								style={{
									flex: 1,
									borderWidth: 1,
									borderRadius: 1,
									width: 300,
									height: 150,
									justifyContent: "center",
									marginLeft: 40,
									backgroundColor: "gray",
								}}
							>
								<ImageBackground
									style={{
										flex: 1,
										width: "100%",
										height: "100%",
									}}
									source={{
										uri: link ? link : undefined,
										cache: "force-cache",
									}}
									onLoadStart={() => {
										this.setState({ imageLoaded: false });
									}}
									onLoadEnd={() => {
										this.setState({ imageLoaded: true });
									}}
								>
									<ActivityIndicator
										style={{
											alignSelf: "center",
											justifyContent: "flex-start",
										}}
										animating={!this.state.imageLoaded}
									/>
								</ImageBackground>
							</TouchableOpacity>
						);
					}}
					keyExtractor={(product, idx) => product + idx}
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
