import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { getUserAvatarURL } from "../firebase/user-operation";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const avatarUrl = await getUserAvatarURL(user.uid);

      return { ...user, photoURL: avatarUrl };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ login, email, password, avatarUrl }, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;

      await updateProfile(user, {
        displayName: login,
      });

      await setDoc(doc(db, "useravatars", user.uid), {
        avatarUrl,
      });

      return { ...user, photoURL: avatarUrl };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
