import * as React from "react";
import { RegisterView } from "./screens/register";
import { AuthContext } from "../../Auth";
// tslint:disable-next-line: no-duplicate-imports
import { useContext } from "react";
import { useRegisterMutation, useLoginMutation } from "@doffy/controller";
import * as SecureStore from "expo-secure-store";

export function RegisterConnector() {
  const { login } = useContext(AuthContext);
  const [loginMutation] = useLoginMutation();
  const [registerMutation, { error }] = useRegisterMutation();
  if (error) {
    console.log(error);
  }
  const saveSessionID = (sid: string) => {
    SecureStore.setItemAsync("sid", sid);
  };
  const submit = async (values: any) => {
    const register = await registerMutation({
      variables: values,
    });

    if (register.data?.register?.length === null) {
      const loginDB = await loginMutation({ variables: values });
      if (!loginDB.data?.login.errors)
        if (loginDB.data?.login.sessionID != null) {
          saveSessionID(loginDB.data?.login.sessionID);
        }
      console.log(SecureStore.getItemAsync("sid"));
      login();
    }

    return null;
  };

  return <RegisterView submit={submit} />;
}
