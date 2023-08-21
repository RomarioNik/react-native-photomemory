import { createSlice } from "@reduxjs/toolkit";
import {
  addComment,
  addPost,
  getAllPosts,
  getPostComments,
  getUserPosts,
} from "./posts-operations";

initialState = {
  posts: [],
  userPosts: [],
  comments: [],
  error: null,
  isLoading: false,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledAddPost = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  // console.log("slice AddPost => ", payload);
};

const handleFulfilledGetAllPosts = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.posts = payload;
  state.comments = [];
};

const handleFulfilledGetUserPosts = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.userPosts = payload;
  state.comments = [];
};

const handleFulfilledAddComment = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledGetPostComments = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.comments = payload;
  // console.log("slice PostComments => ", payload);
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPost.fulfilled, handleFulfilledAddPost)
      .addCase(getAllPosts.fulfilled, handleFulfilledGetAllPosts)
      .addCase(getUserPosts.fulfilled, handleFulfilledGetUserPosts)
      .addCase(addComment.fulfilled, handleFulfilledAddComment)
      .addCase(getPostComments.fulfilled, handleFulfilledGetPostComments)
      .addMatcher(({ type }) => type.endsWith("/pending"), handlePending)
      .addMatcher(({ type }) => type.endsWith("/rejected"), handleRejected);
  },
});

export const postReducer = postSlice.reducer;
