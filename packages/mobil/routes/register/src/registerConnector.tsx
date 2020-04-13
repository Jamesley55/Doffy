import * as React from "react";
import { RegisterView } from "./screens/register";
import { useMutation } from "react-apollo";
import { useRegisterMutation } from "@abb/controller";
import { useContext } from "react";
import { AuthContext } from "../../Auth";
interface Props {}

export function RegisterConnector() {
  const { login } = useContext(AuthContext);
  // const [registerMutation, { data, loading, error }] = useRegisterMutation({
  //   variables: {
  //     email: "",
  //     password: "",
  //     password2: "",
  //   },
  // });
  // if (error) {
  //   console.log(error);
  // }

  const submit = async (values: any) => {
    // const url = "https://api.randomuser.me/";
    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);
    // const response2 = await registerMutation({ variables: values }).then(
    //   (data) => data.data
    // );
    // const data2 = response2.data;
    // console.log(data2);
    fetch("https://e055baa7.ngrok.io/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
			query{
				me{
				  id
				}
			  }`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
      });
    login();
    return null;
  };

  return <RegisterView submit={submit} />;
}
