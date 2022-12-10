import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  roadmaps: [],
};

export const exploreRoadmapsSlice = createSlice({
  name: "roadmap",
  initialState,
  reducers: {
    loadRoadmap: (state, action) => {
      state.nodes = action.payload;
    },
  },
});

export const { loadRoadmap } = exploreRoadmapsSlice.actions;
export default exploreRoadmapsSlice.reducer;
