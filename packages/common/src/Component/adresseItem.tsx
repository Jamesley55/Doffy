import * as React from "react";
import {
	NativeModules,
	StyleProp,
	Text,
	TextInput,
	TextStyle,
	View,
} from "react-native";
const { PlatformConstants } = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;
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
				<Text
					style={
						deviceType === "phone"
							? {
									marginLeft: 10,
									fontSize: 16,
									marginBottom: 10,
									marginTop: 10,
							  }
							: {
									marginLeft: 20,
									fontSize: 20,
									marginBottom: 15,
									marginTop: 15,
							  }
					}
				>
					{this.props.label}
				</Text>
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
