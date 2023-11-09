import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const AccountApi = createApi({
     reducerPath: "AccountApi",
     baseQuery: fetchBaseQuery({
          baseUrl: process.env.EXPO_PUBLIC_API_URL,
     }),
     endpoints: ({ mutation, query }) => ({
          SignIn: mutation<{ data: any }, { username: string; password: string }>({
               query: ({ password, username }: { username: string; password: string }) => {
                    return {
                         url: "/sign-in",
                         method: "POST",
                         body: {
                              username,
                              password,
                         },
                    };
               },
          }),
          Home: query<{ data: any }, void>({
               query: () => "/",
          }),
     }),
});
export const AccountApiReducer = AccountApi.reducer;
export const AccountApiMiddleware = AccountApi.middleware;
export const { useSignInMutation, useHomeQuery } = AccountApi;
