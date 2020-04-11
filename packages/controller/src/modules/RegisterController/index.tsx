import * as React from "react";
import gql from "graphql-tag";
import { ChildMutateProps, graphql } from "react-apollo";
interface Props {
  children: (data: {
    submit: (values: any) => Promise<null>;
  }) => JSX.Element | null;
}

class C extends React.PureComponent<ChildMutateProps<Props, any, any>> {
  submit = async (values: any) => {
    await this.props.mutate({
      variables: values,
    });
    console.log(values);
    return null;
  };
  render() {
    return this.props.children({ submit: this.submit });
  }
}
const registerMutation = gql`
  mutation($email: String!, $password: String!, $password2: String!) {
    register(email: $email, password: $password, password2: $password2)
  }
`;

export const RegisterController = () => {
  return graphql(registerMutation)(C);
};
