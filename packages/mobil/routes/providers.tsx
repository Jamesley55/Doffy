import * as React from "react";
import { Routes } from ".";
import { Booking } from "../shareFuction/booking";
import { Intercommunication } from "../shareFuction/IntercommunicationContext";
import { SearchQuery } from "../shareFuction/Searchcontext";
import { ServiceByCategoryProvider } from "../shareFuction/serviceByCategory";
import { ServiceCreationProviders } from "../shareFuction/serviceCreation";
import { AuthProvider } from "../shareFuction/userContext";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
	return (
		<AuthProvider>
			<ServiceByCategoryProvider>
				<Intercommunication>
					<SearchQuery>
						<ServiceCreationProviders>
							<Booking>
								<Routes />
							</Booking>
						</ServiceCreationProviders>
					</SearchQuery>
				</Intercommunication>
			</ServiceByCategoryProvider>
		</AuthProvider>
	);
};
