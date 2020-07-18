import {
	useCreateServiceMutation,
	useLogoutMutation,
} from "@doffy/controller/src/generated/graphql-hooks";
import { SecureStore } from "expo";
import * as React from "react";

type User = null | string | undefined;

export const ServiceCreationContext = React.createContext<{
	categorie: string | null | undefined;
	ServiceCategorie: (categorie: any) => void;
	logout: () => void;
}>({
	categorie: null,
	ServiceCategorie: (categorie: any) => {},
	logout: () => {},
});

interface serviceCreationProps {}

export const ServiceCreationProviders: React.FC<serviceCreationProps> = ({
	children,
}) => {
	const [categorie, setCategory] = React.useState<string | null | undefined>(
		null
	);
	const [token, setToken] = React.useState<string | null | undefined>(null);

	const [registerMutation] = useCreateServiceMutation();
	const [logoutMutation] = useLogoutMutation();
	return (
		<ServiceCreationContext.Provider
			value={{
				categorie,
				ServiceCategorie: async (c: any) => {
					setCategory(c);
					console.log("categorie", categorie);
				},
				logout: async () => {
					logoutMutation();
					setToken(null);
					await SecureStore.deleteItemAsync("sid");
				},
			}}
		>
			{children}
		</ServiceCreationContext.Provider>
	);
};
