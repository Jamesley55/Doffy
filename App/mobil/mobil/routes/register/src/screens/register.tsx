import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../../../Auth";
import { Input } from "react-native-elements";
import { Item } from "native-base";

interface Props {
  navigation: any;
}
interface state {
  email: string;
  emailError: boolean;
  password: string;
  passwordError: boolean;
  confirmPassword: string;
  confirmPasswordError: boolean;
}

export class register extends React.PureComponent<Props, state> {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: false,
      password: "",
      passwordError: false,
      confirmPassword: "",
      confirmPasswordError: false,
    };
  }

  handleInputChange = (field, value) => {
    const newState = {
      ...this.state,
      [field]: value,
    };
    this.setState(newState);
  };

  render() {
    const { register } = this.context;
    const { emailError, passwordError, confirmPasswordError } = this.state;
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
        <Item error={emailError}>
          <Input
            leftIcon={{ type: "MaterialIcons", name: "email" }}
            placeholder="Email"
            style={styles.materialMessageTextbox1}
            onChangeText={(value) => this.handleInputChange("email", value)}
            autoCorrect={false}
            keyboardAppearance="dark"
            returnKeyType="next"
          />
        </Item>
        <Item error={passwordError}>
          <Input
            leftIcon={{ type: "Octicons", name: "lock" }}
            placeholder="Password"
            style={styles.materialMessageTextbox2}
            onChangeText={(value) => this.handleInputChange("password", value)}
            autoCorrect={false}
            secureTextEntry
            keyboardAppearance="dark"
            returnKeyType="next"
          />
        </Item>
        <Item last error={confirmPasswordError}>
          <Input
            leftIcon={{ type: "Octicons", name: "lock" }}
            placeholder="Re-enter Passwor"
            style={styles.materialMessageTextbox3}
            onChangeText={(value) =>
              this.handleInputChange("confirmPassword", value)
            }
            autoCorrect={false}
            secureTextEntry
            keyboardAppearance="dark"
            returnKeyType="done"
          />
        </Item>

        <Text
          style={styles.signIn}
          onPress={() => {
            register(
              this.state.email,
              this.state.password,
              this.state.confirmPassword
            );
          }}
        >
          SIGN IN
        </Text>
        <Text
          style={styles.logIn}
          onPress={() => {
            this.props.navigation.navigate("login");
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
