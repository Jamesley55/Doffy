import * as React from "react";
import { NativeRouter, Route, Switch } from "react-router-native";
import { firstPage } from "./firstPage/src/screens/firstPage";

export const Routes = () => (
  <NativeRouter>
    <Switch>
      <Route exact={true} path="/" component={firstPage} />
    </Switch>
  </NativeRouter>
);
