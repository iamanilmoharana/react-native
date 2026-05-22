import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const homeScreen = () => {
  return (
    <>
      <StatusBar style="auto" animated />
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text>Home Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default homeScreen;

const styles = StyleSheet.create({});
