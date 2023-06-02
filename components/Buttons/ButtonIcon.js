import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { defaultStyles } from "./ButtonsStyle";

const ButtonText = ({ style, children, ...props }) => {
  return (
    <Pressable style={[styles.btn, style]} {...props}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ...defaultStyles,
});

export default ButtonText;
