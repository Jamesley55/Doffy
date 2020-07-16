import * as React from "react";
import { Text, TextInput, View } from "react-native";

interface Props {
	value: any;
	onChange: any;
	placeholder: any;
	label: any;
}
class AddressItem extends React.PureComponent<Props> {
	render() {
		return (
			<View>
				<Text>{this.props.label}</Text>
				<TextInput
					value={this.props.value}
					onChangeText={this.props.onChange}
					placeholder={this.props.placeholder}
				/>
			</View>
		);
	}
}

export default AddressItem;
