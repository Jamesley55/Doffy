import * as React from "react";
import { StyleProp, TextStyle, View } from "react-native";
import AddressItem from "./adresseItem";

interface Props {
	styleTextInput: StyleProp<TextStyle>;
	StreetValues: any;
	cityValues: any;
	stateValues: any;
	Country: any;
}
export class AddressInput extends React.PureComponent<Props> {
	state = {
		streetValue: "",
		CityValue: "",
		stateValue: "",
		Country: "",
	};

	render() {
		return (
			<View>
				<View>
					<AddressItem
						styleTextInput={this.props.styleTextInput}
						onChange={(e: any) => {
							console.log(e.nativeEvent);
							this.setState({ streetValue: e.nativeEvent.text }, () => {
								console.log("street values", this.state.streetValue);
								this.props.StreetValues(this.state.streetValue);
							});
						}}
						label="Adress"
						value={this.state.streetValue}
						placeholder="Adresse"
					/>
					<AddressItem
						styleTextInput={this.props.styleTextInput}
						onChange={(e: any) =>
							this.setState({ CityValue: e.nativeEvent.text }, () => {
								this.props.cityValues(this.state.CityValue);
							})
						}
						label="City"
						value={this.state.CityValue}
						placeholder="City"
					/>
					<AddressItem
						styleTextInput={this.props.styleTextInput}
						onChange={(e: any) =>
							this.setState({ stateValue: e.nativeEvent.text }, () => {
								this.props.stateValues(this.state.stateValue);
							})
						}
						label="State"
						value={this.state.stateValue}
						placeholder="State"
					/>
					<AddressItem
						styleTextInput={this.props.styleTextInput}
						onChange={(e: any) =>
							this.setState({ Country: e.nativeEvent.text }, () => {
								this.props.Country(this.state.Country);
							})
						}
						label="Country"
						value={this.state.Country}
						placeholder="Country"
					/>
				</View>
			</View>
		);
	}
}
