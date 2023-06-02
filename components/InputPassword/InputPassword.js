import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Input from "../Input/Input";
import ButtonText from "../Buttons/ButtonText";

const InputPassword = (props) => {
  const [isPasswordShow, setIsPasswordShow] = useState(true);

  return (
    <View>
      <ButtonText
        style={styles.btnInputPassShow}
        onPress={() => setIsPasswordShow((prev) => !prev)}
        textStyle={styles.btnInputPassShowText}
      >
        {isPasswordShow ? "Show" : "Hide"}
      </ButtonText>

      <Input {...props} secureTextEntry={isPasswordShow} />
    </View>
  );
};

const styles = StyleSheet.create({
  btnInputPassShow: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 2,
    width: 72,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  btnInputPassShowText: {
    color: "#1B4371",
  },
});

export default InputPassword;
