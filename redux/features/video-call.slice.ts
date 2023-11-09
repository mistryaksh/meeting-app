import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "..";

interface VideoCallSliceProps {
     roomToken: string | null;
     roomId?: string | null;
     joined?: HostActions | null;
}

export type HostActions = "JOINED" | "JOINING";

const initialState: VideoCallSliceProps = {
     roomToken: null,
};

const VideoCallSlice = createSlice({
     initialState,
     name: "videoCall",
     reducers: {
          handleRoomToken: (state, action) => {
               state.roomToken = action.payload;
          },
          handleRoomId: (state, action) => {
               state.roomId = action.payload;
          },
          handleHostActions: (state, action) => {
               if (action.payload === "JOINED") {
                    state.joined = "JOINED";
               }
               if (action.payload === "JOINING") {
                    state.joined = "JOINING";
               }
               state.joined = null;
          },
     },
});

export const VideoCallReducer = VideoCallSlice.reducer;
export const useVideoCallSlice = () =>
     useSelector((state: RootState) => {
          return state.videoCall;
     });

export const { handleRoomToken, handleRoomId, handleHostActions } = VideoCallSlice.actions;
