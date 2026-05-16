import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const USERS = [
  { id: 1, name: "Anil Moharana", role: "Developer" },
  { id: 2, name: "Dipu Kumar", role: "Project Manager" },
  { id: 3, name: "Subhasmita Rout", role: "UI/UX Designer" },
  { id: 4, name: "Rajesh Panda", role: "QA Engineer" },
  { id: 5, name: "Pooja Mishra", role: "Backend Developer" },
];

const homeScreen = () => {
  return (
    <FlatList
      data={USERS}
      // horizontal
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: "black" }} />
      )}
    />
  );
};

export default homeScreen;

const styles = StyleSheet.create({});
