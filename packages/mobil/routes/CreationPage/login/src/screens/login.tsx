import { Field, FormikErrors, FormikProps, withFormik } from "formik";
import { Item } from "native-base";
import * as React from "react";
import { Image, ScrollView, Text } from "react-native";
import { InputField } from "../../../../../Component/InputField";
import { loginStyle } from "../style/styles";

interface FormValues {
	email: string;
	password: string;
}

interface Props {
	submit: (values: FormValues) => Promise<FormikErrors<FormValues> | any> | any;
	navigation: any;
}

export class L extends React.PureComponent<FormikProps<FormValues> & Props> {
	render() {
		const { handleSubmit } = this.props;
		const { navigation } = this.props;
		return (
			<ScrollView style={loginStyle.container}>
				<Image
					source={require("../../../../logo/LogoJamesleyApp.png")}
					resizeMode="contain"
					style={loginStyle.doffyImage}
				></Image>
				<Text style={loginStyle.Title}>
					PLease enter a username &amp; password
				</Text>
				<Item style={loginStyle.input}>
					<Field
						leftIcon={{ type: "Octicons", name: "email" }}
						name="email"
						placeholder="Email"
						autoCorrect={false}
						component={InputField}
						autoCapitalize="none"
						returnKeyType="next"
						keyboardAppearance="dark"
					/>
				</Item>
				<Item style={loginStyle.input}>
					<Field
						leftIcon={{ type: "Octicons", name: "lock" }}
						name="password"
						autoCorrect={false}
						secureTextEntry={true}
						placeholder="Password"
						component={InputField}
						returnKeyType="done"
						keyboardAppearance="dark"
					/>
				</Item>
				<Text onPress={handleSubmit} style={loginStyle.Submit}>
					lOG IN
				</Text>
				<Text
					onPress={() => navigation.navigate("welcomePage")}
					style={loginStyle.Submit}
				>
					sign up for free
				</Text>
			</ScrollView>
		);
	}
}

export const LoginView = withFormik<Props, FormValues>({
	handleSubmit: async (values, { props, setFieldError }) => {
		const submit = await props.submit(values);
		if (submit) {
			if (submit.path === "email" || submit.path === "user") {
				setFieldError("email", submit.message);
			} else if (submit.path === "password") {
				setFieldError("password", submit.message);
			}
		}
	},
})(L);
