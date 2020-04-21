import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { Platform } from "react-native";

const host =
  Platform.OS === "ios"
    ? "https://b7a771c6.ngrok.io/graphql"
    : "http://10.0.2.2:4000";

export const client = new ApolloClient({
  link: createUploadLink({
    uri: host,
  }),
  cache: new InMemoryCache(),
});
