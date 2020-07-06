import React, { Component, useState } from "react";
import { StyleSheet, View, Switch } from "react-native";

function MaterialSwitch2(props) {
  const [value, setValue] = useState(false);
  return (
    <View style={[styles.container, props.style]}>
      <Switch
        value={value}
        thumbColor={props.value ? "#3F51B5" : null}
        disabled={false}
        trackColor={{
          true: "green",
          false: "rgba(230, 230, 230,1)"
        }}
        style={styles.switch1}
        onChange={() => setValue(!value)}
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
