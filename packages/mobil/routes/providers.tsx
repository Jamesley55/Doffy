import * as React from "react";
import { Routes } from ".";
import { Intercommunication } from "../shareFuction/IntercommunicationContext";
import { SearchQuery } from "../shareFuction/Searchcontext";
import { ServiceCreationProviders } from "../shareFuction/serviceCreation";
import { AuthProvider } from "../shareFuction/userContext";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
	return (
		<AuthProvider>
			<Intercommunication>
				<SearchQuery>
					<ServiceCreationProviders>
						<Routes />
					</ServiceCreationProviders>
				</SearchQuery>
			</Intercommunication>
		</AuthProvider>
	);
};
