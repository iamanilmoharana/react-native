import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const homeScreen = () => {
  return (
    <>
      <StatusBar style="auto" animated />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.card}>
          <Text style={styles.title}>Home Screen</Text>
          <Text style={styles.subtitile}>Hello</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default homeScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    margin: 16,
    elevation: 4, //shadow
    // FOR IOS
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 4,
  },

  subtitile: {},
});
