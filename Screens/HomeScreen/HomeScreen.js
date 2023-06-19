import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// screens
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CommentsScreen from "../CommentsScreen/CommentsScreen";
import MapScreen from "../MapScreen/MapScreen";
// components
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import Header from "../../components/Header/Header";
// icons
import IconGallery from "../../components/Icons/IconGallery/IconGallery";
import IconPlus from "../../components/Icons/IconPlus/IconPlus";
import IconProfile from "../../components/Icons/IconProfile/IconProfile";

const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 84,
          paddingTop: 8,
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColor: "#E8E8E8",
        },
        tabBarItemStyle: {
          flex: 1,
          maxWidth: 40,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="HomeTabs"
        component={PostsScreen}
        options={{
          header: ({ route }) => <Header route={route} />,
          tabBarButton: (props) => (
            <ButtonIcon style={styles.btnPosts} {...props}>
              <IconGallery stroke="#212121" width={40} height={40} />
            </ButtonIcon>
          ),
          tabBarAccessibilityLabel: "My posts",
        }}
      />
      <Tabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          unmountOnBlur: true,
          header: ({ route }) => <Header route={route} />,
          tabBarStyle: { display: "none" },
          tabBarButton: (props) => (
            <ButtonIcon style={styles.btnAdd} {...props}>
              <IconPlus
                style={styles.iconAdd}
                fill="#ffffff"
                width={14}
                height={14}
              />
            </ButtonIcon>
          ),
          tabBarAccessibilityLabel: "Add post",
          tabBarItemStyle: {
            justifyContent: "center",
            maxWidth: 70,
            height: 40,
            marginHorizontal: 32,
            backgroundColor: "#FF6C00",
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarButton: (props) => (
            <ButtonIcon style={styles.btnProfile} {...props}>
              <IconProfile stroke="#212121" width={40} height={40} />
            </ButtonIcon>
          ),
          tabBarAccessibilityLabel: "Prifile",
        }}
      />
      <Tabs.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          header: ({ route }) => <Header route={route} />,
          tabBarStyle: { display: "none" },
          tabBarItemStyle: {
            display: "none",
          },
          tabBarAccessibilityLabel: "Comments",
        }}
      />
      <Tabs.Screen
        name="Map"
        component={MapScreen}
        options={{
          header: ({ route }) => <Header route={route} />,
          tabBarStyle: { display: "none" },
          tabBarItemStyle: {
            display: "none",
          },
          tabBarAccessibilityLabel: "Map",
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
