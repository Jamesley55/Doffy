import * as React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity } from "react-native";
import MaterialButtonDark from "../../../../../Component/MaterialButtonDark";
import MaterialButtonGrey from "../../../../../Component/MaterialButtonGrey";
import MaterialButtonViolet1 from "../../../../../Component/MaterialButtonViolet1";
import { AuthStackNavProps } from "../../../../../screenStack/Tydefs/AuthParamList";
import { welcomePageStyle } from "../style/style";

export function welcomePage({ navigation }: AuthStackNavProps<"welcomePage">) {
	return (
		<SafeAreaView style={welcomePageStyle.container}>
			<TouchableOpacity onPress={() => navigation.push("firstPage")}>
				<Image
					source={require("../../../../../logo/LogoJamesleyApp.png")}
					style={welcomePageStyle.image}
				/>
			</TouchableOpacity>
			<Text style={welcomePageStyle.welcome}>Welcome</Text>
			<MaterialButtonGrey
				navigation={navigation}
				nextScreen="register"
				icon="logo-apple"
				text1="Continue With Apple "
				style={welcomePageStyle.continueWithApple}
			></MaterialButtonGrey>
			<MaterialButtonViolet1
				navigation={navigation}
				nextScreen="register"
				icon="sc-facebook"
				text1="Continue with Facebook "
				style={welcomePageStyle.continueWithFacebook}
			/>
			<MaterialButtonGrey
				navigation={navigation}
				nextScreen="register"
				icon="sc-google-plus"
				text1="Continue With Google"
				style={welcomePageStyle.continueWithGoogle}
			/>

			<MaterialButtonDark
				navigation={navigation}
				nextScreen="register"
				text1="SIGN UP FREE"
				style={welcomePageStyle.signUpFree}
			/>
			<Text
				style={welcomePageStyle.lOgIn}
				onPress={() => {
					navigation.navigate("login");
				}}
			>
				lOG IN
			</Text>
		</SafeAreaView>
	);
}
