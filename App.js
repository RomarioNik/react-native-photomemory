import React from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import PostsScreen from "./Screens/PostsScreen/PostsScreen";
import BgImage from "./assets/image/photo-bg.jpeg";
import User from "./components/User/User";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!isFontLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={BgImage}
          resizeMode="cover"
          style={styles.bgImage}
        >
          {/* <RegistrationScreen /> */}
          {/* <User userName="Natali Romanova" userEmail="email@example.com" /> */}
          {/* <LoginScreen /> */}
          <PostsScreen />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  bgImage: {
    flex: 1,
  },
});
