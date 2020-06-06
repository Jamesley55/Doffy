import * as React from "react";
import { RegisterView } from "./screens/register";
import { useRegisterMutation } from "@doffy/controller";
import { saveSessionID, getSessionID } from "../../../shareFuction/sessionId";

export function RegisterConnector({ navigation }) {
  const [registerMutation] = useRegisterMutation();

  const submit = async (values: any) => {
    const register = await registerMutation({
      variables: values,
    });

    if (
      !register.data?.register.errors &&
      register?.data?.register?.sessionId
    ) {
      const sessionId = register?.data?.register?.sessionId;
      console.log(sessionId);
      saveSessionID(sessionId);
      await getSessionID("sid");
      return null;
    } else if (
      register.data?.register.errors &&
      register.data.register.errors[0]
    ) {
      return register.data.register.errors[0];
    }
    return null;
  };

  return <RegisterView submit={submit} navigation={navigation} />;
}
