import * as React from "react";
import { AppRegistry } from "react-native";
import { SearchQuery } from "./routes/context";
import { Routes } from "./routes/index";
import * as serviceWorker from "./serviceWorker";

export default class Index extends React.PureComponent {
	render() {
		return (
			<SearchQuery>
				<Routes />
			</SearchQuery>
		);
	}
}
// register the app
AppRegistry.registerComponent("App", () => Routes);

AppRegistry.runApplication("App", {
	initialProps: {},
	rootTag: document.getElementById("root"),
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
