import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialMessageTextbox from "../components/MaterialMessageTextbox";
import MaterialMessagePassword from "../components/MaterialMessagePassword";
import { AuthContext } from "../../../Auth";
import { Item } from "native-base";
import { Input } from "react-native-elements";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { LoginMutation, LoginMutationVariables } from "../../../schemaTypes";

const loginMutation = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

export class login extends React.PureComponent {
  textInput: {};

  constructor(props) {
    super(props);
    this.textInput = {};
  }

  focusNextTextInput(id) {
    this.textInput[id].focus();
  }

  static contextType = AuthContext;
  render() {
    const {
      login,
      email,
      password,
      setEmail,
      setPassword,
      emailError,
      passwordError,
    } = this.context;

    return (
      <Mutation<LoginMutation, LoginMutationVariables> mutation={loginMutation}>
        {(mutate) => (
          <ScrollView style={styles.container}>
            <Image
              source={require("../assets/images/shappeal.png")}
              resizeMode="contain"
              style={styles.image1}
            ></Image>
            <Text style={styles.loremIpsum}>
              PLease enter a username &amp; password
            </Text>
            <Item error={emailError}>
              <Input
                ref={(input) => {
                  this.textInput["one"] = input;
                }}
                blurOnSubmit={false}
                leftIcon={{ type: "MaterialIcons", name: "email" }}
                placeholder="Email"
                style={styles.materialMessageTextbox}
                onChangeText={(value) => setEmail(value)}
                autoCorrect={false}
                keyboardAppearance="dark"
                onSubmitEditing={() => {
                  this.focusNextTextInput("two");
                }}
                returnKeyType="next"
              />
            </Item>
            <Item error={passwordError}>
              <Input
                ref={(input) => {
                  this.textInput["two"] = input;
                }}
                blurOnSubmit={false}
                leftIcon={{ type: "Octicons", name: "lock" }}
                placeholder="Password"
                style={styles.materialMessageTextbox1}
                onChangeText={(value) => setPassword(value)}
                autoCorrect={false}
                secureTextEntry
                keyboardAppearance="dark"
                onSubmitEditing={() => {
                  login();
                }}
                returnKeyType="next"
              />
            </Item>
            <Text
              style={styles.lOgIn1}
              onPress={() => {
                async () => {
                  const response = await mutate({
                    variables: { email, password },
                  });
                  console.log(response);
                };
                login();
              }}
            >
              lOG IN
            </Text>
          </ScrollView>
        )}
      </Mutation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(155,145,145,30)",
  },
  image1: {
    width: 296,
    height: 70,
    marginTop: 109,
    marginLeft: 37,
  },
  loremIpsum: {
    width: 296,
    height: 16,
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    fontFamily: "armata-regular",
    lineHeight: 15,
    textAlign: "center",
    marginTop: 100,
    marginBottom: 60,
    alignSelf: "center",
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginBottom: 14,
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 35,
  },
  iconColumn: {
    width: 24,
    marginTop: 37,
  },
  materialMessageTextbox: {
    width: 320,
    height: 57,
    marginLeft: 3,
    marginBottom: 20,
  },
  materialMessageTextbox1: {
    width: 320,
    height: 57,
    marginTop: 3,
  },
  materialMessageTextboxColumn: {
    width: 272,
    marginBottom: 2,
  },
  iconColumnRow: {
    height: 119,
    flexDirection: "row",
    marginLeft: 37,
    marginRight: 42,
  },
  lOgIn1: {
    width: 161,
    height: 21,
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "armata-regular",
    textAlign: "center",
    marginTop: 169,
    marginLeft: 108,
  },
});
