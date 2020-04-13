import * as React from "react";
import { RegisterView } from "./screens/register";
import { useContext } from "react";
import { AuthContext } from "../../Auth";
import { useRegisterMutation } from "@abb/controller";
interface Props {}

export function RegisterConnector() {
  const { login } = useContext(AuthContext);

  const [registerMutation, { data, loading, error }] = useRegisterMutation();
  if (error) {
    console.log(error);
  }
  const submit = async (values: any) => {
    const register2 = await registerMutation({ variables: values });
    return null;
  };

  return <RegisterView submit={submit} />;
}
