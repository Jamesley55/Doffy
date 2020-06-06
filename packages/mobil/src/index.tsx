import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./apollo";
import { Providers } from "../routes/providers";
import { Routes } from "../routes";

export default class Index extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}
