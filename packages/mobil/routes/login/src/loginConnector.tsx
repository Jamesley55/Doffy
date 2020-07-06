import * as React from "react";
import { AuthContext } from "../../../shareFuction/userContext";
import { LoginView } from "./screens/login";

export function LoginConnector({ navigation }) {
	const { login } = React.useContext(AuthContext);
	return <LoginView submit={login} navigation={navigation} />;
}
