import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
// components
import User from "../../components/User/User";
import Post from "../../components/Post/Post";
// image
import userPhoto from "../../assets/image/user-avatar.jpeg";
// data
import { posts } from "../../data/posts";

const PostsScreen = () => {
  return (
    <View style={styles.content}>
      <View style={styles.main}>
        <View style={styles.user}>
          <User
            userPhoto={userPhoto}
            userName="Natali Romanova"
            userEmail="email@example.com"
          />
        </View>

        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.postWrapper}>
              <Post
                id={item.id}
                postName={item.postName}
                imgSource={item.imgSource}
                commentsCount={item.commentsCount}
                fullLocation={item.fullLocation}
                colorText="#BDBDBD"
                // colorIcon="#BDBDBD"
              />
            </View>
          )}
        />
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
    paddingVertical: 32,
  },
  user: {
    marginBottom: 32,
  },
  postWrapper: {
    marginBottom: 32,
  },
});

export default PostsScreen;
