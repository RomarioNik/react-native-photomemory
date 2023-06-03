import React from "react";
import { StyleSheet, View, Text } from "react-native";
// components
import User from "../../components/User/User";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
// image
import userPhoto from "../../assets/image/user-avatar.jpeg";
// icons
import IconArrowLeft from "../../components/Icons/IconArrowLeft/IconArrowLeft";
import IconLogOut from "../../components/Icons/IconLogOut/IconLogOut";
import IconGallery from "../../components/Icons/IconGallery/IconGallery";
import IconPlus from "../../components/Icons/IconPlus/IconPlus";
import IconProfile from "../../components/Icons/IconProfile/IconProfile";

const PostsScreen = () => {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <View style={styles.btnWrapperHeader}>
          {/* <ButtonIcon style={styles.btnBack}>
            <IconArrowLeft style={styles.btnArrowLeft} width={24} height={24} />
          </ButtonIcon> */}
          <Text>Publications</Text>
          <ButtonIcon style={styles.btnLogOutHeader}>
            <IconLogOut style={styles.btnIconLogOut} width={24} height={24} />
          </ButtonIcon>
        </View>
      </View>

      <View style={styles.main}>
        <User
          style={styles.user}
          userPhoto={userPhoto}
          userName="Natali Romanova"
          userEmail="email@example.com"
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.btnWrapperFooter}>
          <ButtonIcon style={styles.btnGallery}>
            <IconGallery style={styles.btnIconGallery} width={40} height={40} />
          </ButtonIcon>
          <ButtonIcon style={styles.btnAdd}>
            <IconPlus style={styles.btnIconAdd} width={14} height={14} />
          </ButtonIcon>
          <ButtonIcon style={styles.btnProfile}>
            <IconProfile style={styles.btnIconProfile} width={40} height={40} />
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
    justifyContent: "center",
    alignItems: "center",
  },
  btnBack: {
    position: "absolute",
    top: 12,
    left: 0,
    height: "auto",
    backgroundColor: "transparent",
  },
  btnArrowLeft: {
    stroke: "#212121",
  },
  titleHeader: {
    height: "auto",
  },
  btnLogOutHeader: {
    position: "absolute",
    top: 12,
    right: 0,
    height: "auto",
    backgroundColor: "transparent",
  },
  btnIconLogOut: {
    stroke: "#BDBDBD",
  },
  main: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  user: {
    marginBottom: 32,
  },
  footer: {
    height: 84,
    paddingTop: 8,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
  },
  btnWrapperFooter: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
  },
  btnGallery: {
    height: "auto",
    backgroundColor: "transparent",
  },
  btnIconGallery: {
    stroke: "#212121",
  },
  btnAdd: {
    width: 70,
    height: 40,
  },
  btnIconAdd: {
    fill: "#ffffff",
  },
  btnProfile: {
    height: "auto",
    backgroundColor: "transparent",
  },
  btnIconProfile: {
    stroke: "#212121",
  },
});

export default PostsScreen;
