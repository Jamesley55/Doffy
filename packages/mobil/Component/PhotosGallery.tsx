import * as React from "react";
import {
	FlatList,
	ImageBackground,
	TouchableOpacity,
	View,
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { requestPageStyle } from "../routes/bookingPages/requestPage/styles/style";
import { sellerStepsStyle } from "../routes/sellerStack/sellerSteps/style/style";
interface Props {
	data: any;
}

export class PhotoGalery extends React.PureComponent<Props> {
	flatListRef: any;
	scrollToIndex = (index) => {
		this.flatListRef.scrollToIndex({
			animated: true,
			index,
		});
	};
	state = {
		imageLoaded: false,
	};

	render() {
		const { data } = this.props;
		return (
			<FlatList
				horizontal={true}
				keyExtractor={(idem, index) => index.toString()}
				style={{ flex: 1 }}
				renderItem={({ item, index }) => {
					return (
						<View style={requestPageStyle.rect2}>
							<ImageBackground
								style={{
									flex: 1,
									width: "100%",
									height: "100%",
									backgroundColor: "gray",
								}}
								source={{ uri: item }}
							>
								{this.props.data[index - 1] && (
									<TouchableOpacity
										style={{
											backgroundColor: "rgba(230, 230, 230,1)",
											width: 40,
											height: 60,
											alignSelf: "flex-start",
											marginTop: "40%",
											justifyContent: "center",
											borderRadius: 100,
										}}
										onPress={() => this.scrollToIndex(index - 1)}
									>
										<EntypoIcon
											name="chevron-thin-left"
											style={[
												sellerStepsStyle.Nexticon,
												{ color: "black", alignSelf: "flex-start" },
											]}
										/>
									</TouchableOpacity>
								)}
								{this.props.data[index + 1] && (
									<TouchableOpacity
										style={{
											backgroundColor: "rgba(230, 230, 230,1)",
											width: 40,
											height: 60,
											alignSelf: "flex-end",
											marginTop: "40%",
											justifyContent: "center",
											borderRadius: 100,
										}}
										onPress={() => this.scrollToIndex(index + 1)}
									>
										<EntypoIcon
											name="chevron-thin-right"
											style={[
												sellerStepsStyle.Nexticon,
												{ color: "black", alignSelf: "flex-end" },
											]}
										/>
									</TouchableOpacity>
								)}
								{this.props.data[index - 1] && this.props.data[index + 1] && (
									<View
										style={{
											flexDirection: "row",
											marginTop: "40%",
											justifyContent: "space-between",
										}}
									>
										<TouchableOpacity
											style={{
												backgroundColor: "rgba(230, 230, 230,1)",
												width: 40,
												height: 60,
												justifyContent: "center",
												borderRadius: 100,
											}}
											onPress={() => this.scrollToIndex(index - 1)}
										>
											<EntypoIcon
												name="chevron-thin-left"
												style={[
													sellerStepsStyle.Nexticon,
													{ color: "black", alignSelf: "flex-start" },
												]}
											/>
										</TouchableOpacity>

										<TouchableOpacity
											style={{
												backgroundColor: "rgba(230, 230, 230,1)",
												width: 40,
												height: 60,
												justifyContent: "center",
												borderRadius: 100,
											}}
											onPress={() => this.scrollToIndex(index + 1)}
										>
											<EntypoIcon
												name="chevron-thin-right"
												style={[
													sellerStepsStyle.Nexticon,
													{ color: "black", alignSelf: "flex-end" },
												]}
											/>
										</TouchableOpacity>
									</View>
								)}
							</ImageBackground>
						</View>
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
				ref={(ref) => {
					this.flatListRef = ref;
				}}
			/>
		);
	}
}

export default PhotoGalery;
