import * as React from "react";
import { Routes } from ".";
import { AuthProvider } from "../shareFuction/userContext";
interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
	return (
		<AuthProvider>
			<Routes />
		</AuthProvider>
	);
};
