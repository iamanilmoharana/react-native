import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const homeScreen = () => {
  const { height, width, fontScale, scale } = useWindowDimensions();
  // fontScale, scale

  console.log({
    height,
    width,
  });

  const isTablet = width >= 768;
  const isLandscape = width > height;

  const lockLandscape = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE,
    );
  };

  const lockPortrait = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT,
    );
  };

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
