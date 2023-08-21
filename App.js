import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
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
import { store, persistor } from "./redux/store";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setSignedIn(user ? true : false);
    });
    return unsubscribe;
  }, []);

  // const isHermes = () => !!global.HermesInternal;
  // console.log('isHermes', isHermes())

  const MainStack = createStackNavigator();

  const options = {
    headerShown: false,
  };

  if (!isFontLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack.Navigator
            // initialRouteName="login"
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          >
            {isSignedIn ? (
              <MainStack.Screen
                name="Home"
                component={HomeScreen}
                options={options}
              />
            ) : (
              <>
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
              </>
            )}
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
