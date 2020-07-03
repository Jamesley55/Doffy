import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { Providers } from "../routes/providers";
import { client } from "./apollo";

export default class Index extends React.PureComponent {
	render() {
		return (
			<ApolloProvider client={client}>
				<Providers />
			</ApolloProvider>
		);
	}
}
