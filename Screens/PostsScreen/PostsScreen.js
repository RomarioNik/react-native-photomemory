import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
// components
import User from "../../components/User/User";
import Post from "../../components/Post/Post";
import {
  selectIsLoggedIn,
  selectUserAvatarUrl,
  selectUserEmail,
  selectUserId,
  selectUserName,
} from "../../redux/auth-selectors";
import { getUserPosts } from "../../redux/posts-operations";
import { selectUserPosts } from "../../redux/posts-selectors";

const PostsScreen = () => {
  const avatar = useSelector(selectUserAvatarUrl);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPosts = useSelector(selectUserPosts);
  const userIsLoggedIn = useSelector(selectIsLoggedIn);

  const userId = useSelector(selectUserId);

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && userIsLoggedIn) dispatch(getUserPosts({ userId }));
  }, [isFocused, userIsLoggedIn]);

  return (
    <View style={styles.content}>
      <View style={styles.main}>
        <View style={styles.user}>
          <User userPhoto={avatar} userName={userName} userEmail={userEmail} />
        </View>

        {userPosts && (
          <FlatList
            data={userPosts}
            renderItem={({ item }) => (
              <View style={styles.postWrapper}>
                <Post
                  id={item.id}
                  postName={item.data.postName}
                  imgSource={item.data.imgSource}
                  commentsCount={item.data.commentsCount}
                  fullLocation={item.data.fullLocation}
                  colorText="#BDBDBD"
                  photoLocation={item?.data.location}
                />
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  main: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 160,
  },
  user: {
    marginBottom: 32,
  },
  postWrapper: {
    marginBottom: 32,
  },
});

export default PostsScreen;
