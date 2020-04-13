import ApolloClient from "apollo-boost";
import { Platform } from "react-native";

// android
const host =
  Platform.OS === "ios" ? "https://a4e9d8c2.ngrok.io/graphql" : "10.0.2.2:4000";

// ios localhost

export const client = new ApolloClient({
  uri: host,
});
