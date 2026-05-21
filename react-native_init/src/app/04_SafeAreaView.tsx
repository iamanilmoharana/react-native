import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function UnsafeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1c1c1e" }}>
      <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
        Header (bleeds under notch!)
      </Text>
      <Text style={{ color: "#aaa", padding: 16 }}>
        This content might be hidden the status bar in dark mode.
      </Text>
    </View>
  );
}

function SafeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1c1c1e" }}>
      <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
        Header (bleeds under notch ✅)
      </Text>
      <Text style={{ color: "#aaa", padding: 16 }}>
        This content respects the safe area on all devices.
      </Text>
    </SafeAreaView>
  );
}

const homeScreen = () => {
  return (
    <>
      <SafeScreen />
    </>
  );
};

export default homeScreen;

const styles = StyleSheet.create({});
