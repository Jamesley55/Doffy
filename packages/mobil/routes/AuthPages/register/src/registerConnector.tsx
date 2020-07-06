import * as React from "react";
import { AuthContext } from "../../../../shareFuction/userContext";
import { RegisterView } from "./screens/register";

export function RegisterConnector({ navigation }) {
	const { register } = React.useContext(AuthContext);
	return <RegisterView submit={register} navigation={navigation} />;
}
