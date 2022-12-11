import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import exploreRoadmapsReducer from "./exploreRoadmaps";
import newRoadmapReducer from "./roadmapNew";

export const store = configureStore({
  reducer: {
    roadmapNew: newRoadmapReducer,
    user: userReducer,
    exploreRoadmaps: exploreRoadmapsReducer,
  },
});
