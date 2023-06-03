import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
// components
import Input from "../../components/Input/Input";
import InputPassword from "../../components/InputPassword/InputPassword";
import ButtonText from "../../components/Buttons/ButtonText";
import Avatar from "../../components/Avatar/Avatar";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegistartion = () => {
    Alert.alert(
      `Registration user\n login: ${login}\n email: ${email}\n password: ${password}`
    );
    console.log(
      `Registration user\n login: ${login}\n email: ${email}\n password: ${password}`
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "padding"}
        keyboardVerticalOffset={-175}
      >
        <View style={styles.content}>
          <Avatar style={styles.avatarReg} />

          <View style={styles.form}>
            <Text style={styles.titleText}>Registration</Text>
            <Input
              style={styles.inputText}
              placeholder="Login"
              onChangeText={setLogin}
              value={login}
            />
            <Input
              style={styles.inputText}
              placeholder="Email address"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />
            <InputPassword
              style={styles.inputPass}
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
            />
            <ButtonText onPress={onRegistartion}>Sign Up</ButtonText>
          </View>

          <View style={styles.toggleWrapper}>
            <Text style={styles.toggleText}>Have an account?</Text>
            <ButtonText
              style={styles.toggleBtn}
              textStyle={styles.toggleBtnText}
            >
              Sign In
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
    paddingTop: 92,
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

export default RegistrationScreen;
