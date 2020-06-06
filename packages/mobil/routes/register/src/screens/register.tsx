import * as React from "react";
import { Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { Item } from "native-base";
import { Field, FormikErrors, FormikProps, withFormik } from "formik";
import { validationSchema } from "@doffy/common";
import { InputField } from "../../../Conponent/InputField";
import { registerStyle } from "../style/style";
import { getSessionID } from "../../../../shareFuction/sessionId";
interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | any>;
  navigation: any;
}

export class R extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    const { navigation } = this.props;
    return (
      <ScrollView style={registerStyle.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("firstPage");
          }}
        >
          <Image
            source={require("../../../../logo/LogoJamesleyApp.png")}
            style={registerStyle.doffyImage}
          />
        </TouchableOpacity>
        <Text style={registerStyle.Title}>
          Pease enter a username &amp; password
        </Text>
        <Item style={registerStyle.input}>
          <Field
            leftIcon={{ type: "Octicons", name: "email" }}
            name="username"
            placeholder="Username"
            component={InputField}
            autoCapitalize="none"
            returnKeyType="next"
          />
        </Item>
        <Item style={registerStyle.input}>
          <Field
            leftIcon={{ type: "Octicons", name: "email" }}
            name="email"
            placeholder="Email"
            component={InputField}
            autoCapitalize="none"
            returnKeyType="next"
          />
        </Item>
        <Item style={registerStyle.input}>
          <Field
            leftIcon={{ type: "Octicons", name: "lock" }}
            name="password"
            secureTextEntry={true}
            placeholder="password"
            component={InputField}
            returnKeyType="next"
          />
        </Item>
        <Item style={registerStyle.input}>
          <Field
            leftIcon={{ type: "Octicons", name: "lock" }}
            secureTextEntry={true}
            name="confirmPassword"
            placeholder="Re-enter Password"
            component={InputField}
            containerStyle={{ width: "100%" }}
            returnKeyType="done"
          />
        </Item>

        <Text onPress={handleSubmit} style={registerStyle.Submit}>
          SIGN IN
        </Text>
        <Text
          style={registerStyle.Submit}
          onPress={async () => {
            navigation.navigate("login");
          }}
        >
          Login
        </Text>
      </ScrollView>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    const submit = await props.submit(values);
    if (submit) {
      if (submit.path === "email") {
        setFieldError(submit.path, submit.message);
      } else if (submit.path === "password") {
        setFieldError(submit.path, submit.message);
        setFieldError("confirmPassword", submit.message);
      }
    }
  },
})(R);
