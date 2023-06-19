import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
// components
import Background from "../../components/Background/Background";
import Avatar from "../../components/Avatar/Avatar";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import Post from "../../components/Post/Post";
// icons
import IconLogOut from "../../components/Icons/IconLogOut/IconLogOut";
// image
import ava from "../../assets/image/user-avatar-120.jpeg";
// data
import { posts } from "../../data/posts";

const ProfileScreen = () => {
  const [data, setData] = useState(() => posts);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Background>
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <ButtonIcon
              style={styles.btnLogOut}
              onPress={() => navigation.navigate("Login")}
            >
              <IconLogOut style={styles.btnIconLogOut} width={24} height={24} />
            </ButtonIcon>

            <Avatar style={styles.avatar} avatarSourse={ava} />

            <Text style={styles.authorName}>Nataly Romanova</Text>
            <View style={styles.postsList}>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <View style={styles.postWrapper}>
                    <Post
                      id={item.id}
                      postName={item.postName}
                      imgSource={item.imgSource}
                      commentsCount={item.commentsCount}
                      likesCount={item.likesCount}
                      fullLocation={item.fullLocation}
                      colorText="#212121"
                      colorIcon="#FF6C00"
                    />
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </Background>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  content: {
    height: "82%",
    paddingTop: 94,
    paddingBottom: 100,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  btnLogOut: {
    position: "absolute",
    top: 22,
    right: 16,
    height: "auto",
    backgroundColor: "transparent",
  },
  btnIconLogOut: {
    stroke: "#BDBDBD",
  },
  avatar: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
  },
  authorName: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.16,
    color: "#212121",
    textAlign: "center",
  },
  postsList: {
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  postWrapper: {
    marginBottom: 32,
  },
});

export default ProfileScreen;
