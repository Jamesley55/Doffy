import * as React from "react";
import { Context } from "vm";

export const context = React.createContext<{
	loadingValues: boolean;
	loading: () => any;
}>({
	loadingValues: true,

	// tslint:disable-next-line: no-empty
	loading: async () => {},
});

export const SearchQuery: React.FC<Context> = ({ children }) => {
	const [loadingValues, setLoading] = React.useState(true);
	return (
		<context.Provider
			value={{
				loadingValues,
				loading: async () => {
					console.log("context");
					setLoading(false);
				},
			}}
		>
			{children}
		</context.Provider>
	);
};
