// import { InMemoryCache } from "apollo-cache-inmemory";
import { Hermes } from "apollo-cache-hermes";
import { ApolloClient } from "apollo-client";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const host = "http://localhost:4000/graphql";
const httpLink = new HttpLink({
	uri: host,
});

const wsLink = new WebSocketLink({
	uri: `ws://localhost:4000/graphql`,
	options: {
		reconnect: true,
	},
});

const link = split(
	// split based on operation type
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

export const client = new ApolloClient({
	link,
	cache: new Hermes({}),
});
