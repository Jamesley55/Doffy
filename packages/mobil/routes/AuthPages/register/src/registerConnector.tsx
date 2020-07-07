import * as React from "react";
import { AuthStackNavProps } from "../../../../screenStack/Tydefs/AuthParamList";
import { AuthContext } from "../../../../shareFuction/userContext";
import { RegisterView } from "./screens/register";

export function RegisterConnector({
	navigation,
}: AuthStackNavProps<"register">) {
	const { register } = React.useContext(AuthContext);
	return <RegisterView submit={register} navigation={navigation} />;
}
