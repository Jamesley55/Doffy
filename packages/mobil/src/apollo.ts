import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import { Platform } from "react-native";

const host =
	Platform.OS === "ios"
		? "https://685a6d35f4d0.ngrok.io/graphql"
		: "http://10.0.2.2:4000";

export const client = new ApolloClient({
	link: createUploadLink({
		uri: host,
		credentials: "include",
	}),
	cache: new InMemoryCache(),
});
