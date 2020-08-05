import * as React from "react";
import {
	SearchServicesUserDocument,
	SearchServicesUserQuery,
	SearchServicesUserQueryVariables,
} from "../../controller/src/generated/graphql-hooks";
import { client } from "../src/apollo";

export const SearchQueryContext = React.createContext<{
	SearchQuery: (search: SearchServicesUserQueryVariables) => any;
}>({
	SearchQuery: async () => {},
});

interface intercommunicationContextProps {}

export const SearchQuery: React.FC<intercommunicationContextProps> = ({
	children,
}) => {
	return (
		<SearchQueryContext.Provider
			value={{
				SearchQuery: async (search) => {
					console.log("entre4r fans context");
					const SearchResponse = await client.query<SearchServicesUserQuery>({
						query: SearchServicesUserDocument,
						variables: search,
					});
					console.log(SearchResponse.data.searchServicesUser);
					return SearchResponse.data.searchServicesUser;
				},
			}}
		>
			{children}
		</SearchQueryContext.Provider>
	);
};
