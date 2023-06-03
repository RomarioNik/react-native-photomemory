import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
// components
import Input from "../../components/Input/Input";
import InputPassword from "../../components/InputPassword/InputPassword";
import ButtonText from "../../components/Buttons/ButtonText";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "padding"}
        keyboardVerticalOffset={-175}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.titleText}>Sign In</Text>

            <Input
              style={styles.inputText}
              placeholder="Email address"
              keyboardType="email-address"
            />
            <InputPassword style={styles.inputPass} placeholder="Password" />
            <ButtonText>Sign In</ButtonText>
          </View>

          <View style={styles.toggleWrapper}>
            <Text style={styles.toggleText}>Don't have an account?</Text>
            <ButtonText
              style={styles.toggleBtn}
              textStyle={styles.toggleBtnText}
            >
              Sign Up
            </ButtonText>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  content: {
    fontFamily: "Roboto-Regular",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 32,
    paddingBottom: 64,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
  },
  avatarReg: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
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
  inputPass: {
    marginBottom: 44,
  },
  inputText: {
    marginBottom: 16,
  },
  toggleWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  toggleBtn: {
    height: "auto",
    marginLeft: 4,
    backgroundColor: "transparent",
  },
  toggleBtnText: {
    color: "#1B4371",
  },
  toggleText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default LoginScreen;
