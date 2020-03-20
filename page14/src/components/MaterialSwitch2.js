import React, { Component } from "react";
import { StyleSheet, View, Switch } from "react-native";

function MaterialSwitch2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Switch
        value={props.value ? true : false}
        thumbColor={props.value ? "#3F51B5" : null}
        disabled={false}
        trackColor={{
          true: "rgba(230, 230, 230,1)",
          false: "rgba(230, 230, 230,1)"
        }}
        style={styles.switch1}
      ></Switch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  switch1: {
    width: 45,
    height: 22
  }
});

export default MaterialSwitch2;
