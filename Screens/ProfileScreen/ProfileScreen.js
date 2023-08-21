import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import {
  StackActions,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
// components
import Background from "../../components/Background/Background";
import Avatar from "../../components/Avatar/Avatar";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { useDispatch, useSelector } from "react-redux";
// components
import Post from "../../components/Post/Post";
import { logout } from "../../redux/auth-operations";
import {
  selectIsLoggedIn,
  selectUserAvatarUrl,
  selectUserName,
} from "../../redux/auth-selectors";
import { selectPosts } from "../../redux/posts-selectors";
import { getAllPosts } from "../../redux/posts-operations";
// icons
import IconLogOut from "../../components/Icons/IconLogOut/IconLogOut";

const ProfileScreen = (props) => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  const avatar = useSelector(selectUserAvatarUrl);
  const userName = useSelector(selectUserName);
  const posts = useSelector(selectPosts);
  const userIsLoggedIn = useSelector(selectIsLoggedIn);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && userIsLoggedIn) dispatch(getAllPosts());
  }, [isFocused, userIsLoggedIn]);

  useEffect(() => {
    navigation.push("Profile");
  }, []);
  // StackActions.push("Profile");
  // const pushAction = StackActions.push("Home");

  // navigation.goBack(null);
  // props.navigation("Profile");
  // console.log(props);
  // console.log(navigation());

  const getAvatarUrl = (url) => {
    setAvatarUrl(url);
  };

  const handelPressLogOut = () => {
    // dispatch(logout())
    //   .unwrap()
    //   .then(() => navigation.navigate("Login"));
    navigation.push("Profile");
  };

  return (
    <View style={styles.container}>
      <Background>
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <ButtonIcon style={styles.btnLogOut} onPress={handelPressLogOut}>
              <IconLogOut style={styles.btnIconLogOut} width={24} height={24} />
            </ButtonIcon>

            <Avatar
              style={styles.avatar}
              avatarSourse={avatar}
              getAvatarUrl={getAvatarUrl}
            />

            <Text style={styles.authorName}>{userName}</Text>
            <View style={styles.postsList}>
              {posts && (
                <FlatList
                  data={posts}
                  renderItem={({ item }) => (
                    <View style={styles.postWrapper}>
                      <Post
                        id={item.id}
                        postName={item.data.postName}
                        imgSource={item.data.imgSource}
                        commentsCount={item.data.commentsCount}
                        likesCount={item.data.likesCount}
                        fullLocation={item.data.fullLocation}
                        colorText="#212121"
                        colorIcon="#FF6C00"
                        photoLocation={item?.data.location}
                      />
                    </View>
                  )}
                />
              )}
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
    fontWeight: "500",
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
