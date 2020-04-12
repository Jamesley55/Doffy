import * as React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo";
import { View, Text } from "react-native";
import { Suspense } from "react";
import { Providers } from "../routes/providers";

export default class Index extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <Suspense
          fallback={
            <View>
              <Text>loading...</Text>
            </View>
          }
        >
          <Providers />
        </Suspense>
      </ApolloProvider>
    );
  }
}
