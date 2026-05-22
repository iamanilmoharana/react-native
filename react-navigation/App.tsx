import * as React from "react";
import { View, Text } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Details: DetailScreen,
    Profile: ProfileScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}

// 1. navigate() Go to a screen by name.
// 2. goBack() Go to prev screen.
// 3. push() Alaways adds a new instanc.
// 4. replace() Replace current screen.
// 5. popToTop() Go back to first screen.
// 6. popTo("")
