import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const homeScreen = () => {
  const styleA = StyleSheet.create({ text: { color: "red", fontSize: 16 } });
  const styleB = StyleSheet.create({
    text: { fontSize: 24, fontWeight: "bold" },
  });

  const flat = StyleSheet.flatten([styleA.text, styleB.text]);

  return (
    <>
      <StatusBar style="auto" animated />
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text style={flat}>Flattened Style</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default homeScreen;

const styles = StyleSheet.create({});
