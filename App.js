import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import BgImage from "./assets/image/photo-bg.jpeg";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BgImage}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <View style={styles.content}>
          <View style={styles.avatar}>
            <Button title="+" style={styles.avatarAdd} />
          </View>

          <View style={styles.form}>
            <Text style={styles.titleText}>Registration</Text>
            <TextInput
              style={[styles.input, styles.inputText]}
              placeholder="Login"
            />
            <TextInput
              style={[styles.input, styles.inputText]}
              placeholder="Email address"
            />
            <TextInput
              style={[styles.input, styles.inputPassword]}
              placeholder="Password"
            />
            <Button title="Sign Up" />
          </View>

          <View style={styles.toggleForm}>
            <Text style={styles.text}>Have an account?</Text>
            <Button title="Sign in" />
          </View>

          {/* <StatusBar style="auto" /> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  content: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 92,
    paddingBottom: 64,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
  },
  avatar: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  avatarAdd: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 25,
    height: 25,
    color: "#FF6C00",
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "#FF6C00",
  },
  form: {
    marginHorizontal: 16,
  },
  titleText: {
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    padding: 16,
    backgroundColor: "#F6F6F6",
  },
  inputPassword: {
    marginBottom: 44,
  },
  inputText: {
    marginBottom: 16,
  },
  toggleForm: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
