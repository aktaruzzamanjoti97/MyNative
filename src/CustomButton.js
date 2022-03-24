import React from "react";
import { StyleSheet, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const CustomButton = (props) => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      hitSlop={{ top: 0, bottom: 0, right: 10, left: 10 }}
      android_ripple={{ color: "#00f" }}
      style={({ pressed }) => [
        { backgroundColor: pressed ? "#dddddd" : props.color },
        styles.button,
        { ...props.style },
      ]}
    >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
  button: {
    width: 150,
    height: 50,
    alignItems: "center",
  },
});

export default CustomButton;
