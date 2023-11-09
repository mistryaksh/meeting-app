import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "..";

export interface NameProps {
     firstName: string;
     lastName: string;
}

export interface SignUpProps {
     input: {
          name: NameProps;
          username: string;
          email: string;
          password: string;
     };
}

const initialState: SignUpProps = {
     input: {
          email: "",
          name: {
               firstName: "",
               lastName: "",
          },
          username: "",
          password: "",
     },
};

const AccountSlice = createSlice({
     initialState,
     name: "account",
     reducers: {
          handleFirstName: (state, action) => {
               state.input.name.firstName = action.payload;
          },
          handleLastName: (state, action) => {
               state.input.name.lastName = action.payload;
          },
          handleEmail: (state, action) => {
               state.input.email = action.payload;
          },
          handlePassword: (state, action) => {
               state.input.password = action.payload;
          },
          handleUserName: (state, action) => {
               state.input.username = action.payload;
          },
     },
});

export const AccountReducer = AccountSlice.reducer;
export const useAccountSlice = () =>
     useSelector((state: RootState) => {
          return state.account;
     });

export const { handleEmail, handleFirstName, handleLastName, handlePassword, handleUserName } = AccountSlice.actions;
