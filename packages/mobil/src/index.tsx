import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./apollo";
import { Providers } from "../routes/providers";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";

export default class Index extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Providers />
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}
