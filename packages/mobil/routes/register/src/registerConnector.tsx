import React, { useContext } from "react";
import { RegisterView } from "./screens/register";
import { AuthContext } from "../../Auth";
import { useRegisterMutation } from "@abb/controller";

interface Props {}

export function RegisterConnector() {
  const { login } = useContext(AuthContext);

  const [registerMutation, { error }] = useRegisterMutation();
  if (error) {
    console.log(error);
  }
  const submit = async (values: any) => {
    const register = await registerMutation({
      variables: values,
    });

    if (register.data.register === null) {
      login();
    } else {
      let i: number;
      for (i = 0; i < register.data.register.length; i++) {
        alert(register.data.register[i].message);
      }
    }
    return null;
  };

  return <RegisterView submit={submit} />;
}
