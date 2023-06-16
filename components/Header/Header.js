import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
// components
import IconArrowLeft from "../Icons/IconArrowLeft/IconArrowLeft";
import IconLogOut from "../Icons/IconLogOut/IconLogOut";
import ButtonIcon from "../Buttons/ButtonIcon";

const Header = ({ route }) => {
  const navigation = useNavigation();

  const titleHeader = (name) => {
    switch (name) {
      case "HomeTabs":
        return "Posts";
      case "Create":
        return "Create post";
      case "Comments":
        return "Comments";
      default:
        return "Profile";
    }
  };

  const isIconShow =
    route.name === "Create" || route.name === "Comments" ? true : false;
  console.log(route.name);
  console.log(route);
  // console.log(navigation.dispatch(CommonActions.goBack()));
  return (
    <View style={styles.header}>
      <View style={styles.btnWrapperHeader}>
        {isIconShow && (
          <ButtonIcon
            style={styles.btnBack}
            onPress={() => navigation.goBack()}
          >
            <IconArrowLeft style={styles.btnArrowLeft} width={24} height={24} />
          </ButtonIcon>
        )}

        <Text style={styles.titleHeader}>{titleHeader(route.name)}</Text>
        {!isIconShow && (
          <ButtonIcon
            style={styles.btnLogOutHeader}
            onPress={() => navigation.navigate("Login")}
          >
            <IconLogOut style={styles.btnIconLogOut} width={24} height={24} />
          </ButtonIcon>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 88,
    paddingHorizontal: 16,
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    backgroundColor: "#ffffff",
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
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
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
});

export default Header;
