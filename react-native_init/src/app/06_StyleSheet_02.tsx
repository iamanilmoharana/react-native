import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const homeScreen = () => {
  const isActive = true;

  const buttonStyle: StyleProp<ViewStyle> = StyleSheet.compose(
    styles.button,
    isActive ? styles.activeButton : null,
  );

  return (
    <>
      <StatusBar style="auto" animated />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* Normal Condtion */}
          <View style={[styles.button, isActive && styles.activeButton]}>
            <Text style={styles.buttonText}>Composed Style</Text>
          </View>

          {/* Composed Style */}
          <View style={buttonStyle}>
            <Text style={styles.buttonText}>Composed Style 2</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default homeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "#ccc",
    marginBottom: 2,
  },
  activeButton: {
    backgroundColor: "#6C63FF",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
