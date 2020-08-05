import * as React from "react";
import { StyleProp, Text, TextInput, TextStyle, View } from "react-native";

interface Props {
	value: any;
	onChange: any;
	placeholder: any;
	label: any;
	styleTextInput: StyleProp<TextStyle>;
}
class AddressItem extends React.PureComponent<Props> {
	render() {
		return (
			<View>
				<Text>{this.props.label}</Text>
				<TextInput
					keyboardAppearance="dark"
					returnKeyType="done"
					value={this.props.value}
					onChange={this.props.onChange}
					placeholder={this.props.placeholder}
					style={this.props.styleTextInput || undefined}
				/>
			</View>
		);
	}
}

export default AddressItem;
