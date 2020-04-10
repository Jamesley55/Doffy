import { FlatList, TouchableOpacity, Button } from "react-native";
import React, { Component } from "react";
import faker from "faker";
import { useNavigation } from "@react-navigation/native";

function List(props) {
  const navigation = useNavigation();
  return (
    <FlatList
      horizontal={true}
      style={{ flex: 1 }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("requestPage");
            }}
            style={{
              flex: 1,
              borderWidth: 1,
              borderRadius: 1,
              width: 300,
              height: 150,
              justifyContent: "center",
              marginLeft: 40,
              backgroundColor: "rgba(45,45,45,1)"
            }}
          >
            <Button
              title={item}
              onPress={() => {
                navigation.navigate("requestPage");
              }}
            />
          </TouchableOpacity>
        );
      }}
      keyExtractor={(product, idx) => product + idx}
      data={Array.from(Array(50), () => faker.commerce.product())}
    />
  );
}
export default List;
