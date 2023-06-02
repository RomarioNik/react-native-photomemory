import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ style, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[
        styles.input,
        style,
        { borderColor: isFocused ? "#FF6C00" : "#E8E8E8" },
      ]}
      placeholderTextColor="#BDBDBD"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "",
    padding: 16,
    backgroundColor: "#F6F6F6",
  },
});

export default Input;
