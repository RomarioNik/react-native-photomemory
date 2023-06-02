import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { defaultStyles } from "./ButtonsStyle";

const ButtonText = ({ style, textStyle = {}, children, ...props }) => {
  return (
    <Pressable style={[styles.btn, style]} {...props}>
      <Text style={[styles.btnText, textStyle]}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ...defaultStyles,
  btnText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#ffffff",
  },
});

export default ButtonText;
