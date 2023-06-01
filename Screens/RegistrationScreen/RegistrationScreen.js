import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import BgImage from "../../assets/image/photo-bg.jpeg";

const RegistrationScreen = () => {
  return (
    <ImageBackground source={BgImage} resizeMode="cover" style={styles.bgImage}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "padding"}
        keyboardVerticalOffset={-175}
      >
        <View style={styles.content}>
          <View style={styles.avatar}>
            <TouchableOpacity style={styles.btnAvatarAdd} activeOpacity={0.7}>
              <Text style={styles.btnAvatarText}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.form}>
            <Text style={styles.titleText}>Registration</Text>

            <TextInput
              style={[styles.input, styles.inputText]}
              placeholder="Login"
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={[styles.input, styles.inputText]}
              placeholder="Email address"
              placeholderTextColor="#BDBDBD"
            />
            <View style={styles.wrapperInputPass}>
              <Pressable style={styles.btnInputPassShow}>
                <Text style={styles.btnInputPassShowText}>Show</Text>
              </Pressable>
              <TextInput
                style={[styles.input, styles.inputPassword]}
                placeholder="Password"
                placeholderTextColor="#BDBDBD"
              />
            </View>

            <TouchableOpacity style={styles.btnForm} activeOpacity={0.7}>
              <Text style={styles.btnFormText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.toggleForm}>
            <Text style={styles.btnToggleText}>Have an account?</Text>
            <TouchableOpacity style={styles.btnToggle} activeOpacity={0.7}>
              <Text style={styles.btnToggleText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  keyboardView: {
    marginBottom: -175,
  },
  content: {
    fontFamily: "Roboto-Regular",
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
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  btnAvatarAdd: {
    position: "absolute",
    bottom: 16,
    right: "-50%",
    transform: [{ translateX: -47 }],
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#FF6C00",
  },
  btnAvatarText: {
    color: "#FF6C00",
  },
  form: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  titleText: {
    textAlign: "center",
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.16,
    color: "#212121",
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    padding: 16,
    backgroundColor: "#F6F6F6",
  },
  wrapperInputPass: {
    // marginBottom: 44,
    paddingBottom: 44,
  },
  inputPassword: {},
  btnInputPassShow: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 2,
    width: 72,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  btnInputPassShowText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  inputText: {
    marginBottom: 16,
  },
  btnForm: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnFormText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#ffffff",
  },
  toggleForm: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnToggle: {
    marginLeft: 4,
  },
  btnToggleText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default RegistrationScreen;
