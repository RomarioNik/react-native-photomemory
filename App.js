import React from "react";
// navigation
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import "react-native-gesture-handler";
// fonts
import { useFonts } from "expo-font";
// components
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  const MainStack = createStackNavigator();

  const options = {
    headerShown: false,
  };

  if (!isFontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={options}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={options}
        />
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={options}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
