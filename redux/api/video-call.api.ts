import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { GetToken } from "../../utils";

const VideoCallApi = createApi({
     reducerPath: "VideoCallApi",
     baseQuery: fetchBaseQuery({
          baseUrl: process.env.EXPO_PUBLIC_API_URL,
          prepareHeaders: async (headers) => {
               headers.set("Authorization", (await GetToken()) || "");
          },
     }),
     endpoints: ({ mutation, query }) => ({
          GetMeetingToken: query<{ data: any }, void>({
               query: () => {
                    return {
                         url: `/video-sdk-token`,
                    };
               },
          }),
          GenerateMeeting: mutation<{ data: any }, string>({
               query: (token: string) => {
                    return {
                         url: `/generate-meeting`,
                         method: "POST",
                         body: {
                              token: token,
                         },
                    };
               },
          }),
          ValidateMeeting: mutation({
               query: ({ roomId, token }: { token: string; roomId: string }) => {
                    return {
                         url: `/validate-meeting`,
                         body: {
                              roomId,
                              token,
                         },
                         method: "POST",
                    };
               },
          }),
     }),
});

export const { useGenerateMeetingMutation, useGetMeetingTokenQuery, useValidateMeetingMutation } = VideoCallApi;
export const VideoCallApiReducer = VideoCallApi.reducer;
export const VideCallApiMiddleware = VideoCallApi.middleware;
