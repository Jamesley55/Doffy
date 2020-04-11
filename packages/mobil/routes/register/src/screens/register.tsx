import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AuthContext, AuthProvider } from "../../../Auth";
import { Item } from "native-base";
import { RouteComponentProps } from "react-router";
import {
  FieldProps,
  Field,
  FormikErrors,
  FormikProps,
  withFormik,
} from "formik";
import { validationSchema } from "@abb/common";
import { InputField } from "../../../Conponent/InputField";
interface FormValues {
  email: string;
  password: string;
}
interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}
interface state {
  email: string;
  emailError: boolean;
  password: string;
  passwordError: boolean;
  confirmPassword: string;
  confirmPasswordError: boolean;
}

export class register extends React.PureComponent<
  FormikProps<FormValues> & Props,
  state,
  RouteComponentProps<{}>
> {
  textInput: {};

  //constructor(props) {
  //  super(props);
  //  this.textInput = {};
  //}
  //
  //focusNextTextInput(id) {
  //  this.textInput[id].focus();
  //}

  //static contextType = AuthContext;
  render() {
    const {
      handleBlur,
      handleChange,
      handleSubmit,
      touched,
      errors,
    } = this.props;
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => alert("image clicked")}>
          <Image
            source={require("../assets/images/shappeal.png")}
            resizeMode="contain"
            style={styles.image1}
          />
        </TouchableOpacity>
        <Text style={styles.loremIpsum1}>
          Pease enter a username &amp; password
        </Text>
        <Item>
          <Field
            leftIcon={{ type: "Octicons", name: "email" }}
            name="email"
            placeholder="Email"
            component={InputField}
            autoCapitalize="none"
          />
        </Item>
        <Item>
          <Field
            leftIcon={{ type: "Octicons", name: "lock" }}
            name="password"
            secureTextEntry={true}
            placeholder="password"
            component={InputField}
          />
        </Item>
        <Item>
          <Field
            leftIcon={{ type: "Octicons", name: "lock" }}
            secureTextEntry={true}
            name="password2"
            placeholder="Re-enter Password"
            component={InputField}
            containerStyle={{ width: "100%" }}
          />
        </Item>

        <Text style={styles.signIn} onPress={handleSubmit as any}>
          SIGN IN
        </Text>
        <Text
          style={styles.logIn}
          onPress={() => {
            //      this.props.navigation.navigate("login");
          }}
        >
          Login
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(155,145,145,30)",
  },
  image1: {
    alignContent: "center",
    width: 296,
    height: 70,
    marginTop: 109,
    marginLeft: 37,
  },
  loremIpsum1: {
    alignContent: "center",

    width: 296,
    height: 18,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "armata-regular",
    lineHeight: 20,
    textAlign: "center",
    marginTop: 68,
    alignSelf: "center",
  },

  materialMessageTextbox1: {
    alignContent: "center",
    width: "80%",
  },
  materialMessageTextbox2: {
    width: "20%",
  },

  signIn: {
    alignContent: "center",
    width: 161,
    height: 21,
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "armata-regular",
    textAlign: "center",
    marginTop: 195,
    marginLeft: 108,
  },
  logIn: {
    alignContent: "center",
    width: 161,
    height: 24,
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "armata-regular",
    textAlign: "center",
    marginTop: 95,
    marginLeft: 108,
  },
  materialMessageTextbox3: {
    width: 320,
  },
});

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(register);
