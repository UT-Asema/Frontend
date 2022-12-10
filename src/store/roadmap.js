import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  nodes: [],
};

export const roadmapSlice = createSlice({
  name: "roadmap",
  initialState,
  reducers: {
    loadRoadmap: (state, action) => {
      state.nodes = action.payload;
    },
  },
});

export const { loadRoadmap } = roadmapSlice.actions;
export default roadmapSlice.reducer;
