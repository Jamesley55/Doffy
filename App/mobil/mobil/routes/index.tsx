import * as React from "react";
import { NativeRouter, Route, Switch } from "react-router-native";
import { firstPage } from "./firstPage/src/screens/firstPage";
import { connection } from "./connectionPage/src/screens/connect";
import { login } from "./login/src/screens/login";
import { register } from "./register/src/screens/register";

export const Routes = () => (
  <NativeRouter>
    <Switch>
      <Route exact={true} path="/login" component={login} />
      <Route exact={true} path="/connection" component={connection} />
      <Route exact={true} path="/register" component={register} />
      <Route exact={true} path="/" component={firstPage} />
    </Switch>
  </NativeRouter>
);
