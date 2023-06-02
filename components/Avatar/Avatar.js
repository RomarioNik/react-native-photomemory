import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import ButtonIcon from "../Buttons/ButtonIcon";

const Avatar = ({ style, ...props }) => {
  return (
    <View style={[styles.avatar, style]} {...props}>
      <ButtonIcon style={styles.btnAvatar}>
        <Svg
          style={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          fill="none"
        >
          <Circle cx={12.5} cy={12.5} r={12} fill="#fff" stroke="#FF6C00" />
          <Path
            fill="#FF6C00"
            fillRule="evenodd"
            d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
            clipRule="evenodd"
          />
        </Svg>
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
  },
  svg: {
    stroke: "#FF6C00",
    fill: "#ffffff",
  },
});

export default Avatar;
