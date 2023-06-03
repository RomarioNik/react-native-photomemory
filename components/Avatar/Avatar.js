import React from "react";
import { StyleSheet, View } from "react-native";
// components
import ButtonIcon from "../Buttons/ButtonIcon";
// icons
import IconPlus from "../Icons/IconPlus/IconPlus";

const Avatar = ({ style, ...props }) => {
  return (
    <View style={[styles.avatar, style]} {...props}>
      <ButtonIcon style={styles.btnAvatar}>
        <IconPlus style={styles.iconPlus} width={14} height={14} />
      </ButtonIcon>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  btnAvatar: {
    position: "absolute",
    bottom: 16,
    right: "-50%",
    transform: [{ translateX: -47 }],
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#FF6C00",
    backgroundColor: "transparent",
  },
  iconPlus: {
    stroke: "#FF6C00",
    fill: "#ffffff",
  },
});

export default Avatar;
