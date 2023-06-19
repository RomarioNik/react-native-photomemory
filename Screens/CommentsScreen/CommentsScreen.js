import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
// components
import Comment from "../../components/Comment/Comment";
import Input from "../../components/Input/Input";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
// image
import photo from "../../assets/image/photo-place-2.jpeg";
import guestAvatar from "../../assets/image/guest-avatar.jpeg";
import authorAvatar from "../../assets/image/user-avatar.jpeg";
// icons
import IconArrowLeft from "../../components/Icons/IconArrowLeft/IconArrowLeft";

const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");

  // console.log(route);

  const handleSubmitComment = () => {
    Alert.alert(`You send comment:\n ${comment}`);
  };

  const testArray = [
    {
      id: 1,
      avatar: guestAvatar,
      text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
      data: "09 червня, 2020 | 08:40",
      authorPhoto: false,
    },
    {
      id: 2,
      avatar: authorAvatar,
      text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
      data: "09 червня, 2020 | 09:14",
      authorPhoto: true,
    },
    {
      id: 3,
      avatar: guestAvatar,
      text: "Thank you! That was very helpful!",
      data: "09 червня, 2020 | 09:20",
      authorPhoto: false,
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.touch}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.wrapper}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={-175}
        >
          <View style={styles.content}>
            <View style={styles.thumb}>
              <Image style={styles.img} resizeMode="cover" source={photo} />
            </View>

            <FlatList
              data={testArray}
              renderItem={({ item }) => (
                <View style={styles.commentWrap}>
                  <Comment
                    avatar={item.avatar}
                    text={item.text}
                    data={item.data}
                    authorPhoto={item.authorPhoto}
                  />
                </View>
              )}
            />
          </View>

          <View style={styles.inputWrap}>
            <Input
              style={styles.input}
              placeholder="Write a comment..."
              multiline
              onChangeText={setComment}
              value={comment}
            />
            <ButtonIcon style={styles.btnSend} onPress={handleSubmitComment}>
              <IconArrowLeft
                style={styles.iconArrowTop}
                stroke="#ffffff"
                width={24}
                height={24}
              />
            </ButtonIcon>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#ffffff",
  },
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    gap: 24,
  },
  content: {},
  thumb: {
    maxWidth: "100%",
    maxHeight: 240,
    marginBottom: 32,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  commentWrap: {
    marginBottom: 24,
  },
  input: {
    height: 50,
    paddingTop: 16,
    borderRadius: 100,
  },
  btnSend: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 34,
    height: 34,
    borderRadius: 100,
  },
  iconArrowTop: {
    transform: [{ rotate: "90deg" }],
  },
});

export default CommentsScreen;
