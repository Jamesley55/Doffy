import { AntDesign } from "@expo/vector-icons";
import * as React from "react";
import { TouchableOpacity } from "react-native";

interface Props {
	handle?: any;
}

export class Checkbox extends React.PureComponent<Props> {
	state = {
		values: false,
	};

	render() {
		return (
			<TouchableOpacity
				style={{
					borderRadius: 30,
					marginLeft: 10,
					marginTop: "1%",
				}}
				onPress={() => {
					this.state.values
						? this.setState({ values: false }, () => {
								this.setState({ values: false });

								this.props.handle(this.state.values);
						  })
						: this.setState({ values: true }, () => {
								this.setState({ values: true });
								this.props.handle(this.state.values);
						  });
				}}
			>
				<AntDesign
					name="checkcircle"
					size={24}
					color={this.state.values ? "green" : "black"}
				/>
			</TouchableOpacity>
		);
	}
}
