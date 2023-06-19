import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
// components
import User from "../../components/User/User";
import Post from "../../components/Post/Post";
// image
import userPhoto from "../../assets/image/user-avatar.jpeg";
// data
// import { posts } from "../../data/posts";

const PostsScreen = ({ route }) => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params) {
      const { photo, photoName, photoNameLocation, photoLocation } =
        route.params;
      const newPhoto = {
        id: new Date(),
        postName: photoName,
        imgSource: photo,
        commentsCount: "0",
        likesCount: "0",
        fullLocation: photoNameLocation,
        country: "Ukraine",
        location: photoLocation,
      };

      setData((prev) => [newPhoto, ...prev]);
    }
  }, [route]);

  // console.log(route);
  // console.log("===========================================");
  // console.log(route.params?.photo);
  // console.log(route.params?.photoName);
  // console.log(route.params?.photoNameLocation);
  // console.log(route.params?.photoLocation);

  // route.params.photo;
  // route.params.photoName;
  // route.params.photoNameLocation;
  // route.params.photoLocation;

  // console.log("=== ", data);

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
          data={data}
          renderItem={({ item }) => (
            <View style={styles.postWrapper}>
              <Post
                id={item.id}
                postName={item.postName}
                imgSource={item.imgSource}
                commentsCount={item.commentsCount}
                fullLocation={item.fullLocation}
                colorText="#BDBDBD"
                photoLocation={item?.location}
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
