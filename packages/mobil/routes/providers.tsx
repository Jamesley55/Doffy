import * as React from "react";
import { Routes } from ".";
import { Intercommunication } from "../shareFuction/IntercommunicationContext";
import { AuthProvider } from "../shareFuction/userContext";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
	return (
		<AuthProvider>
			<Intercommunication>
				<Routes />
			</Intercommunication>
		</AuthProvider>
	);
};
