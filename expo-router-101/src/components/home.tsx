import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const home = () => {
  return (
    <View>
      <Text>home</Text>
      <Link href={"/profile/details"}>User Profile</Link>
      <Link href={{ pathname: "/user/[userId]", params: { userId: "1232" } }}>
        User ID Page
      </Link>
      <Link
        href={{
          pathname: "/username/[username]",
          params: { username: "anil" },
        }}
      >
        User Name Page
      </Link>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
