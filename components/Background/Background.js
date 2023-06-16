import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import BgImage from "../../assets/image/photo-bg.jpeg";

const Background = ({ children }) => {
  return (
    <ImageBackground source={BgImage} resizeMode="cover" style={styles.bgImage}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
});

export default Background;
