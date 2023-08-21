import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const User = ({ userPhoto, userName, userEmail }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        resizeMode="cover"
        source={{ uri: userPhoto }}
      />

      <View style={styles.description}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userEmail}>{userEmail}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  description: {
    flexDirection: "column",
    marginLeft: 8,
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});

export default User;
