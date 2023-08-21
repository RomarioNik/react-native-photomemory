import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useSelector } from "react-redux";
import moment from "moment";
import { selectUserId } from "../../redux/auth-selectors";
import { getUserAvatarURL } from "../../firebase/user-operation";

const Comment = ({ owner, text, date }) => {
  const [avatar, setAvatar] = useState(null);

  const userId = useSelector(selectUserId);

  const authorPhoto = userId === owner;

  useEffect(() => {
    const fetchAvatar = async () => {
      const avatar = await getUserAvatarURL(owner);
      setAvatar(avatar);
    };

    fetchAvatar();
  }, []);

  const createDate = (sec) => {
    if (!sec) return "just now";
    const Date = moment.unix(sec);
    const dateFormat = Date.format("DD MMMM YYYY | HH:mm");
    // data: "09 червня, 2020 | 08:40",

    return dateFormat;
  };

  return (
    <View
      style={[
        styles.commentWrapper,
        authorPhoto && styles.commentWrapperReverse,
      ]}
    >
      <Image
        style={styles.avatar}
        resizeMode="cover"
        source={{ uri: avatar }}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{text}</Text>
        <Text style={[styles.data, authorPhoto && styles.dataLeft]}>
          {createDate(date)}
        </Text>
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
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  data: {
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "right",
    color: "#BDBDBD",
  },
  dataLeft: {
    textAlign: "left",
  },
});

export default Comment;
