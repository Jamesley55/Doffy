import * as React from "react";
import { AuthStackNavProps } from "../../../../screenStack/Tydefs/AuthParamList";
import { AuthContext } from "../../../../shareFuction/userContext";
import { LoginView } from "./screens/login";

export function LoginConnector({ navigation }: AuthStackNavProps<"login">) {
	const { login } = React.useContext(AuthContext);
	return <LoginView submit={login} navigation={navigation} />;
}
