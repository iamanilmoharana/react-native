import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const homeScreen = () => {
  const items = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
      {items.map((item) => (
        <Text style={{ fontSize: 16 }} key={item}>
          {item}
        </Text>
      ))}
    </ScrollView>
  );
};

export default homeScreen;

const styles = StyleSheet.create({});
