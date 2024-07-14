import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : 0,
  },
  reducers: {
    userLoginInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLoginInfo } = userSlice.actions;

export default userSlice.reducer;
