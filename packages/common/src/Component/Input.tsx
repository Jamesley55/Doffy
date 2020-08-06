import * as React from "react";
import { StyleProp, Text, TextInput, TextStyle, View } from "react-native";

interface Props {
	viewStyle?: StyleProp<TextStyle>;
	TextStyle: StyleProp<TextStyle>;
	TextInputStyle: StyleProp<TextStyle>;
	Text: string;
	placeHolder: string;
	onSubmit: any;
	keyboardType?: any;
	multiline?: any;
	blurOnSubmit?: any;
}
export class Input extends React.PureComponent<Props> {
	render() {
		return (
			<View style={this.props.viewStyle || undefined}>
				<Text style={this.props.TextStyle || undefined}>{this.props.Text}</Text>
				<TextInput
					{...this.props}
					keyboardAppearance="dark"
					returnKeyType="done"
					style={this.props.TextInputStyle || undefined}
					placeholder={this.props.placeHolder}
					onBlur={this.props.onSubmit}
				/>
			</View>
		);
	}
}
