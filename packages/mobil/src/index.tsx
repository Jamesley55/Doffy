import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { Routes } from "../routes/index";
import { client } from "./apollo";

export default class Index extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}
