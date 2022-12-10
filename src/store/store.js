import { configureStore } from "@reduxjs/toolkit";
import roadmapReducer from "./roadmap";
import userReducer from "./user";
import exploreRoadmapsReducer from "./exploreRoadmaps";

export const store = configureStore({
  reducer: {
    roadmap: roadmapReducer,
    user: userReducer,
    exploreRoadmaps: exploreRoadmapsReducer,
  },
});
