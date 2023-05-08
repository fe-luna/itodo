import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
  },
  reducers: {
    userSignin: (state, action) => {
      state.username = action.payload;
    },
    userSignout: () => {},
  },
});

export const { userSignin, userSignout } = userSlice.actions;
export default userSlice.reducer;
