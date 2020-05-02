import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { Platform } from "react-native";

const host =
  Platform.OS === "ios"
    ? "http://18.222.24.245:443/graphql"
    : "http://10.0.2.2:4000";

export const client = new ApolloClient({
  link: createUploadLink({
    uri: host,
  }),
  cache: new InMemoryCache(),
});
