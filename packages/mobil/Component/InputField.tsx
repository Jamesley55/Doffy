import { FieldProps } from "formik";
import * as React from "react";
import { Input } from "react-native-elements";

const errStyle = {
	color: "red",
};
export class InputField extends React.Component<
	FieldProps<any> & { name: string }
> {
	onChangeText = (text: string) => {
		const {
			form: { setFieldValue },
			field: { name },
		} = this.props;
		setFieldValue(name, text);
	};
	render() {
		const {
			field,
			form: { touched, errors },
			...props
		} = this.props;
		const errorMsg = touched[field.name] && errors[field.name];
		return (
			<Input
				{...props}
				errorStyle={errStyle}
				errorMessage={errorMsg}
				onChangeText={this.onChangeText}
				value={field.value}
				onBlur={field.onBlur}
			/>
		);
	}
}
