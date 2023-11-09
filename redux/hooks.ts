import { combineReducers } from "@reduxjs/toolkit";
import { AccountReducer, LayoutReducer, VideoCallReducer } from "./features";
import { AccountApiReducer, VideoCallApiReducer } from "./api";

export const rootReducer = combineReducers({
     // Root States
     account: AccountReducer,
     layout: LayoutReducer,
     videoCall: VideoCallReducer,
     // RTK Query
     AccountApi: AccountApiReducer,
     VideoCallApi: VideoCallApiReducer,
});
