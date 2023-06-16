import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Comment = ({ avatar, text, data, authorPhoto }) => {
  return (
    <View
      style={[
        styles.commentWrapper,
        authorPhoto && styles.commentWrapperReverse,
      ]}
    >
      <Image style={styles.avatar} resizeMode="cover" source={avatar} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.data}>{data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentWrapper: {
    flexDirection: "row",
    gap: 16,
  },
  commentWrapperReverse: {
    flexDirection: "row-reverse",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 100,
  },
  textWrapper: {
    flexShrink: 1,
    flexGrow: 1,
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#F7F7F7",
  },
  text: {
    marginBottom: 8,
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  data: {
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
    color: "#BDBDBD",
  },
});

export default Comment;
