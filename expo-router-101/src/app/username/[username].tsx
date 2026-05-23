import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const userNameScreen = () => {
  const { username } = useLocalSearchParams();
  return (
    <View>
      <Text>{username} user name page</Text>
    </View>
  );
};

export default userNameScreen;

const styles = StyleSheet.create({});
