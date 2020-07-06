import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { AppRegistry } from "react-native";
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

AppRegistry.registerComponent("Appname", () => Index);
