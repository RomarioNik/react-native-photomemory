// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
// import {
//   getReactNativePersistence,
//   initializeAuth,
// } from "firebase/auth/react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCt-8ewWHAA6o5LJ_ufZRVaAAbA15W6jOs",
  authDomain: "memory-a0780.firebaseapp.com",
  projectId: "memory-a0780",
  storageBucket: "memory-a0780.appspot.com",
  messagingSenderId: "923861262808",
  appId: "1:923861262808:web:82cb2081d7793968bed2ad",
};

const app = initializeApp(firebaseConfig);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
