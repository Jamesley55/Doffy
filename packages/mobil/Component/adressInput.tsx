import * as React from "react";
import { StyleProp, TextStyle, View } from "react-native";
import AddressItem from "./adresseItem";

interface Props {
	styleTextInput: StyleProp<TextStyle>;
}
export class AddressInput extends React.PureComponent<Props> {
	state = {
		streetValue: "",
		CityValue: "",
		stateValue: "",
		postcalCode: null,
		Country: "",
	};

	render() {
		return (
			<View>
				<View>
					<AddressItem
						styleTextInput={this.props.styleTextInput}
						onChange={(e: any) => this.setState({ streetValue: e })}
						label="Adress"
						value={this.state.streetValue}
						placeholder="Adresse"
					/>
					<AddressItem
						styleTextInput={this.props.styleTextInput}
						onChange={(e) => this.setState({ cityValue: e })}
						label="City"
						value={this.state.CityValue}
						placeholder="City"
					/>
					<AddressItem
						styleTextInput={this.props.styleTextInput}
						onChange={(e) => this.setState({ stateValue: e })}
						label="State"
						value={this.state.stateValue}
						placeholder="State"
					/>
					<AddressItem
						styleTextInput={this.props.styleTextInput}
						onChange={(e) => this.setState({ Country: e })}
						label="Country"
						value={this.state.Country}
						placeholder="Country"
					/>
				</View>
			</View>
		);
	}
}
