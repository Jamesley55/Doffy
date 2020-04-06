import React from "react";
import { FlatList } from "react-native-gesture-handler";
import faker from "faker";
import { Button, Text, TouchableOpacity } from "react-native";

export function Notification() {
  return (
    <FlatList
      style={{ flex: 1 }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={{
              flex: 1,
              borderWidth: 1,
              borderRadius: 3,
              width: "100%",
              height: 80,
            }}
          >
            <Button title={item} onPress={() => {}} />
          </TouchableOpacity>
        );
      }}
      keyExtractor={(product, idx) => product + idx}
      data={Array.from(Array(50), () => faker.commerce.product())}
    />
  );
}

function Product() {
  return <Text style={{ flex: 1 }}>Product</Text>;
}
