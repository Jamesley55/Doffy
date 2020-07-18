import { RegisterValidationSchema } from "@doffy/common";
import { Field, FormikErrors, FormikProps, withFormik } from "formik";
import { Item } from "native-base";
import * as React from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { InputField } from "../../../../Component/InputField";
import { registerStyle } from "../style/style";
interface FormValues {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}

interface Props {
	submit: (values: FormValues) => Promise<FormikErrors<FormValues> | any>;
	navigation: any;
}

export class R extends React.PureComponent<FormikProps<FormValues> & Props> {
	render() {
		const { handleSubmit } = this.props;
		const { navigation } = this.props;
		return (
			<ScrollView style={registerStyle.container}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("firstPage");
					}}
				>
					<Image
						source={require("../../../../logo/LogoJamesleyApp.png")}
						style={registerStyle.doffyImage}
					/>
				</TouchableOpacity>
				<Text style={registerStyle.Title}>
					Pease enter a username, Email &amp; password
				</Text>
				<Item style={registerStyle.input}>
					<Field
						leftIcon={{ type: "Octicons", name: "email" }}
						name="username"
						placeholder="Username"
						component={InputField}
						autoCapitalize="none"
						returnKeyType="done"
						keyboardAppearance="dark"
					/>
				</Item>
				<Item style={registerStyle.input}>
					<Field
						leftIcon={{ type: "Octicons", name: "email" }}
						name="email"
						placeholder="Email"
						component={InputField}
						autoCapitalize="words"
						returnKeyType="done"
						keyboardAppearance="dark"
					/>
				</Item>
				<Item style={registerStyle.input}>
					<Field
						leftIcon={{ type: "Octicons", name: "lock" }}
						name="password"
						secureTextEntry={true}
						placeholder="password"
						component={InputField}
						autoCapitalize="none"
						returnKeyType="done"
						keyboardAppearance="dark"
					/>
				</Item>
				<Item style={registerStyle.input}>
					<Field
						leftIcon={{ type: "Octicons", name: "lock" }}
						secureTextEntry={true}
						keyboardAppearance="dark"
						autoCapitalize="none"
						name="confirmPassword"
						placeholder="Re-enter Password"
						component={InputField}
						containerStyle={{ width: "100%" }}
						returnKeyType="done"
						onSubmitEditing={handleSubmit}
					/>
				</Item>

				<Text onPress={handleSubmit} style={registerStyle.Submit}>
					SIGN IN
				</Text>
				<Text
					style={registerStyle.Submit}
					onPress={async () => {
						navigation.navigate("login");
					}}
				>
					Login
				</Text>
			</ScrollView>
		);
	}
}

export const RegisterView = withFormik<Props, FormValues>({
	validationSchema: RegisterValidationSchema,
	handleSubmit: async (values, { props, setFieldError }) => {
		const submit = await props.submit(values);
		if (submit) {
			if (submit.path === "email") {
				setFieldError(submit.path, submit.message);
			} else if (submit.path === "password") {
				setFieldError(submit.path, submit.message);
				setFieldError("confirmPassword", submit.message);
			}
		}
	},
})(R);
