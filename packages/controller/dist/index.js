import ApolloClient from "apollo-boost";
export var apolloClient = new ApolloClient({
    uri: "http://localhost:4000/graphql",
});
export * from "./generated/graphql-hooks";
//# sourceMappingURL=index.js.map