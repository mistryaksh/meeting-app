import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "..";

interface LayoutSliceProps {
     signInPage: {
          view: ViewType;
     };
     error?: string | null;
     loading?: boolean;
     success?: string | null;
     token?: string | null;
}

type ViewType = "phone" | "password";

const initialState: LayoutSliceProps = {
     signInPage: {
          view: "phone",
     },
};

const LayoutSlice = createSlice({
     initialState,
     name: "layout",
     reducers: {
          handleSignInLayoutView: (state) => {
               if (state.signInPage.view === "phone") {
                    state.signInPage.view = "password";
               } else {
                    state.signInPage.view = "phone";
               }
          },
          handleLayoutError: (state, action) => {
               state.error = action.payload;
          },
          handleLayoutLoading: (state) => {
               state.loading = !state.loading;
          },
          handleLayoutSuccess: (state, action) => {
               state.success = action.payload;
          },
          handleToken: (state, action) => {
               state.token = action.payload;
          },
     },
});

export const LayoutReducer = LayoutSlice.reducer;
export const useLayoutSlice = () =>
     useSelector((state: RootState) => {
          return state.layout;
     });
export const { handleSignInLayoutView, handleLayoutError, handleLayoutLoading, handleLayoutSuccess, handleToken } =
     LayoutSlice.actions;
