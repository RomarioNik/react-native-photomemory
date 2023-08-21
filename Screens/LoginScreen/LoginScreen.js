import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
// components
import Background from "../../components/Background/Background";
import Input from "../../components/Input/Input";
import InputPassword from "../../components/InputPassword/InputPassword";
import ButtonText from "../../components/Buttons/ButtonText";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth-operations";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleSubmit = () => {
    dispatch(login({email, password})).unwrap().then(() => navigation.navigate("Home"));
    // Alert.alert(`Registration user\n email: ${email}\n password: ${password}`);
    // setEmail("");
    // setPassword("");
    // navigation.navigate("Home", { screen: "HomeScreen" });
    // navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <Background>
          <View style={styles.wrapper}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              keyboardVerticalOffset={-175}
            >
              <View style={styles.content}>
                <View style={styles.form}>
                  <Text style={styles.titleText}>Sign In</Text>

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
                  <ButtonText onPress={handleSubmit}>Sign In</ButtonText>
                </View>

                <View style={styles.toggleWrapper}>
                  <Text style={styles.toggleText}>Don't have an account?</Text>
                  <ButtonText
                    style={styles.toggleBtn}
                    textStyle={styles.toggleBtnText}
                    onPress={() => navigation.navigate("Registration")}
                  >
                    Sign Up
                  </ButtonText>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </Background>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  content: {
    fontFamily: "Roboto-Regular",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 32,
    paddingBottom: 144,
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
