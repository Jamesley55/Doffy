import * as React from "react";
import { RegisterView } from "./screens/register";
import { useRegisterMutation } from "@abb/controller";
interface Props {}

export const RegisterConnector: React.FC<Props> = () => {
  const dummySubmit = async (values: any) => {
    const [Register] = useRegisterMutation();
    Register({ variables: values });
    console.log(values);
    return null;
  };

  return <RegisterView submit={dummySubmit} />;
};
