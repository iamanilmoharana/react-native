import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function index() {
  const [name, setName] = useState("");

  return (
    <View>
      <Text numberOfLines={2}>Hello World</Text>

      <Image
        source={{
          uri: "https://t4.ftcdn.net/jpg/02/96/18/67/360_F_296186747_eH56U4NmqJSjvMStTuzpORl0UAO6c0I7.jpg",
        }}
        width={200}
        height={200}
        blurRadius={2}
      />

      <TextInput
        placeholder="Enter You Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={"blue"}
        style={{
          borderColor: "#ddd",
          borderWidth: 1,
          marginTop: 10,
          fontSize: 20,
          marginLeft: 5,
          marginRight: 5,
          borderRadius: 10,
        }}
      />

      <Pressable
        // onLongPress={}
        // onPressIn={}
        // onHoverOut={}
        onPress={() => alert("Button Pressed")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#4a42d4" : "#6c63ff",
        })}
      >
        <Text>Press Me</Text>
      </Pressable>
    </View>
  );
}
