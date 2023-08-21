import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  // TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
// components
import Comment from "../../components/Comment/Comment";
import Input from "../../components/Input/Input";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { selectPostComments } from "../../redux/posts-selectors";
import { addComment, getPostComments } from "../../redux/posts-operations";
import { selectUserId } from "../../redux/auth-selectors";
// icons
import IconArrowLeft from "../../components/Icons/IconArrowLeft/IconArrowLeft";

const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");

  const postComments = useSelector(selectPostComments);
  const owner = useSelector(selectUserId);

  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const flatlistRef = useRef();

  const { id, imgSource } = route.params;

  useEffect(() => {
    if (isFocused) dispatch(getPostComments({ id }));
  }, [isFocused]);

  useEffect(() => {
    if (postComments.length > 0) flatlistRef.current.scrollToEnd();
  }, [postComments]);

  const handleSubmitComment = () => {
    if (comment.trim() === "") return;

    dispatch(
      addComment({
        postId: id,
        owner,
        text: comment,
      })
    );

    setComment("");
    dispatch(getPostComments({ id }))
      .unwrap()
      .then(() => flatlistRef.current.scrollToEnd());
  };

  const EmptyListMessage = () => {
    return <Text style={styles.emptyListStyle}>Nobody comment yet</Text>;
  };

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.touch}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.wrapper}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={-155}
        >
          <View style={styles.content}>
            <View style={styles.thumb}>
              <Image
                style={styles.img}
                resizeMode="cover"
                source={{ uri: imgSource }}
              />
            </View>

            <View style={styles.commentsWrapper}>
              <FlatList
                data={postComments}
                ref={flatlistRef}
                renderItem={({ item, index }) => (
                  <View
                    style={[
                      styles.commentWrap,
                      postComments.length - 1 === index &&
                        styles.commentWrapLastChild,
                    ]}
                  >
                    <Comment
                      owner={item.data.owner}
                      text={item.data.text}
                      date={item.data.timestamp?.seconds}
                    />
                  </View>
                )}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={EmptyListMessage}
              />
            </View>
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  touch: {
    flex: 1,
  },
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
  content: {
    flex: 1,
  },
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
  commentsWrapper: {
    flex: 1,
  },
  commentWrap: {
    marginBottom: 24,
  },
  commentWrapLastChild: {
    marginBottom: 0,
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
  emptyListStyle: {
    fontSize: 18,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 12,
    color: "#BDBDBD",
    textAlign: "center",
  },
});

export default CommentsScreen;
