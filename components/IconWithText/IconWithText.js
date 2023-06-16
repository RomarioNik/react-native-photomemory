import React from "react";
import { StyleSheet, View, Text } from "react-native";

const IconWithText = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      {/* <IconLike
        style={styles.iconComments}
        fill="#FF6C00"
        width={24}
        height={24}
      />
      <Text style={styles.commentsCount}>{likes}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});

export default IconWithText;
