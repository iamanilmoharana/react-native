import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  const isLoggedIn = true;

  return (
    <Stack>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="Index" />
        <Stack.Screen name="About" />
      </Stack.Protected>
    </Stack>
  );
}

// <Stack
//   screenOptions={{
//     headerStyle: { backgroundColor: "#f4511e" },
//     headerTintColor: "#fff",
//     headerTitleStyle: { fontWeight: "bold" },
//   }}
// />
