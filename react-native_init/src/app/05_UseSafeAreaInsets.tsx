import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import {
  initialWindowMetrics,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const homeScreen = () => {
  const insets = useSafeAreaInsets();

  console.log(insets);
  console.log(initialWindowMetrics);
  return (
    <>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          // backgroundColor: "red",
        }}
      >
        <StatusBar barStyle={"dark-content"} />
        <Text>Home Screen</Text>
      </View>

      {/* <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Text>Home Screen</Text>
      </SafeAreaProvider> */}
    </>
  );
};

export default homeScreen;

const styles = StyleSheet.create({});
