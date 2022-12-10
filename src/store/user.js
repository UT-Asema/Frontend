import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  username: "john",
  roadmapsIDs: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUserData: (state, action) => {
      //
    },
  },
});

export const { loadUserData } = userSlice.actions;
export default userSlice.reducer;
