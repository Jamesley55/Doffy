import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { Routes } from "../routes";
import { client } from "./apollo";
import { Providers } from "../routes/providers";

export default class Index extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <Providers />
      </ApolloProvider>
    );
  }
}
