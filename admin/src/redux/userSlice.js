import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL Users
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },

    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //DELETE

    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      );
    },

    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const {
  getUserFailure,
  getUserStart,
  getUserSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
} = userSlice.actions;
export default userSlice.reducer;
