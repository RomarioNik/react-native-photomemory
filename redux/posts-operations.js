import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  serverTimestamp,
  where,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { uploadAvatarToServer } from "../firebase/user-operation";

export const addPost = createAsyncThunk(
  "post/add",
  async (post, { rejectWithValue }) => {
    try {
      const { imgSource } = post;
      const fileName = imgSource.split("/").pop();
      const photoURL = await uploadAvatarToServer(
        imgSource,
        "imageposts",
        fileName
      );

      const docRef = await addDoc(collection(db, "posts"), {
        ...post,
        imgSource: photoURL,
        timestamp: serverTimestamp(),
      });

      console.log("Document written with ID: ", docRef);
    } catch (e) {
      //   return rejectWithValue("Error adding document: ", e);
      console.log("Error adding document: ", e);
      throw e;
    }
  }
);

export const getAllPosts = createAsyncThunk(
  "post/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      let data = [];

      const postsRef = collection(db, "posts");
      const q = query(postsRef, orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);

      snapshot.forEach((doc) => {
        data.push({ id: doc.id, data: doc.data() });
      });
      return data;
    } catch (e) {
      //   return rejectWithValue("Error adding document: ", e);
      console.log("Error adding document: ", e);
      throw e;
    }
  }
);

export const getUserPosts = createAsyncThunk(
  "post/getUserPosts",
  async ({ userId }, { rejectWithValue }) => {
    try {
      let data = [];

      const postsRef = collection(db, "posts");
      const q = query(
        postsRef,
        where("owner", "==", userId),
        orderBy("timestamp", "desc")
      );
      const snapshot = await getDocs(q);

      // const snapshot = await getDocs(collection(db, "posts"));
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, data: doc.data() });
      });
      return data;
    } catch (e) {
      //   return rejectWithValue("Error adding document: ", e);
      console.log("Error adding document: ", e);
      throw e;
    }
  }
);

export const addComment = createAsyncThunk(
  "post/addComment",
  async (comment, { rejectWithValue }) => {
    try {
      console.log("post/addComment", comment);
      const docRef = await addDoc(collection(db, "comments"), {
        ...comment,
        timestamp: serverTimestamp(),
      });

      console.log("Document written with ID: ", docRef);
    } catch (e) {
      //   return rejectWithValue("Error adding document: ", e);
      console.log("Error adding document: ", e);
      throw e;
    }
  }
);

export const getPostComments = createAsyncThunk(
  "post/getPostComments",
  async ({ id }, { rejectWithValue }) => {
    try {
      let data = [];

      const postsRef = collection(db, "comments");
      const q = query(
        postsRef,
        where("postId", "==", id),
        orderBy("timestamp")
      );
      const snapshot = await getDocs(q);

      snapshot.forEach((doc) => {
        data.push({ id: doc.id, data: doc.data() });
      });

      console.log("comment operation => ", data);
      return data;
    } catch (e) {
      //   return rejectWithValue("Error adding document: ", e);
      console.log("Error adding document: ", e);
      throw e;
    }
  }
);
