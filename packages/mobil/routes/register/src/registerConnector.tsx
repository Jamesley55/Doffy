import * as React from "react";
import { RegisterView } from "./screens/register";
import { useRegisterMutation } from "@abb/controller";
import { useContext } from "react";
import { AuthContext } from "../../Auth";
import { useQuery } from "@apollo/react-hooks";
import { RegisterDocument } from "@abb/controller";
import { useQueryQuery } from "@abb/controller";
interface Props {}

export function RegisterConnector() {
  const { login } = useContext(AuthContext);
  // const [registerMutation, { data, loading, error }] = useRegisterMutation();
  // const [registerMutation, { data, loading, error }] = useMutation(
  //   RegisterDocument
  // );
  // if (error) {
  //   console.log(error);
  // }
  const { data } = useQueryQuery();

  const submit = async (values: any) => {
    // const url = "https://api.randomuser.me/";
    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);
    //const response2 = await registerMutation({ variables: values }).then(
    //  (data) => data.data
    //);
    //const data2 = response2.data;
    // console.log(data2);
    fetch("https://a4e9d8c2.ngrok.io/graphql", {
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
    return null;
  };

  return <RegisterView submit={submit} />;
}
