import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import User from "../../components/User/User";
import userPhoto from "../../assets/image/user-avatar.jpeg";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import Svg, { Path } from "react-native-svg";

const userData = [
  {
    id: "1",
    userPhoto: userPhoto,
    userName: "Natali Romanova",
    userEmail: "email@example.com",
  },
  {
    id: "2",
    userPhoto: userPhoto,
    userName: "Natali Romanova",
    userEmail: "email@example.com",
  },
  {
    id: "3",
    userPhoto: userPhoto,
    userName: "Natali Romanova",
    userEmail: "email@example.com",
  },
];

const PostsScreen = () => {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <View style={styles.btnWrapperHeader}>
          <ButtonIcon style={styles.btnBack}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
            >
              <Path
                stroke="#212121"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity={0.8}
                d="M20 12H4m6 6-6-6 6-6"
              />
            </Svg>
          </ButtonIcon>
          <Text>Publications</Text>
          <ButtonIcon style={styles.btnLogOutHeader}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
            >
              <Path
                stroke="#BDBDBD"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5m7 14 4-4-4-4m4 4H9"
              />
            </Svg>
          </ButtonIcon>
        </View>
      </View>

      <View style={styles.main}>
        <FlatList
          data={userData}
          renderItem={(item) => (
            <User
              userPhoto={item.userPhoto}
              userName={item.userName}
              userEmail={item.userEmail}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        {/* {userData.map(({ id, userPhoto, userName, userEmail }) => (
          <User
            key={id}
            userPhoto={userPhoto}
            userName={userName}
            userEmail={userEmail}
          />
        ))} */}
        {/* <User
          userPhoto={userPhoto}
          userName="Natali Romanova"
          userEmail="email@example.com"
        /> */}
      </View>

      <View style={styles.footer}>
        <View style={styles.btnWrapperFooter}>
          <ButtonIcon style={styles.btnGallery}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
            >
              <Path fill="#fff" d="M0 0h24v24H0z" />
              <Path
                stroke="#212121"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity={0.8}
                d="M3 3h7v7H3V3Zm11 0h7v7h-7V3Zm0 11h7v7h-7v-7ZM3 14h7v7H3v-7Z"
                clipRule="evenodd"
              />
            </Svg>
          </ButtonIcon>
          <ButtonIcon style={styles.btnAdd}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              fill="none"
            >
              <Path
                fill="#fff"
                fillRule="evenodd"
                d="M7.5.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z"
                clipRule="evenodd"
              />
            </Svg>
          </ButtonIcon>
          <ButtonIcon style={styles.btnProfile}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
            >
              <Path
                stroke="#212121"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity={0.8}
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
              />
              <Path
                stroke="#212121"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity={0.8}
                d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                clipRule="evenodd"
              />
            </Svg>
          </ButtonIcon>
        </View>
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
  header: {
    height: 88,
    paddingHorizontal: 16,
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  btnWrapperHeader: {
    height: 44,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnBack: {
    height: "auto",
    backgroundColor: "transparent",
  },
  titleHeader: {
    height: "auto",
  },
  btnLogOutHeader: {
    height: "auto",
    backgroundColor: "transparent",
  },
  main: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    // backgroundColor: "red",
    borderBottomColor: "#E8E8E8",
  },
  footer: {
    height: 84,
    paddingTop: 8,
    alignItems: "center",
    borderTopColor: "#E8E8E8",
    // backgroundColor: "yellow",
  },
  btnWrapperFooter: {
    height: 40,
    flexDirection: "row",
    gap: 32,
  },
  btnGallery: {
    height: "auto",
    backgroundColor: "transparent",
  },
  btnAdd: {
    width: 70,
    height: "auto",
  },
  btnProfile: {
    height: "auto",
    backgroundColor: "transparent",
  },
});

export default PostsScreen;
