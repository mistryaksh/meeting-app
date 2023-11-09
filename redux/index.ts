import { Middleware, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./hooks";
import { useDispatch } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AccountApiMiddleware, VideCallApiMiddleware } from "./api";

const ApiMiddlewares: Array<Middleware> = [AccountApiMiddleware, VideCallApiMiddleware];

export const AppStore = configureStore({
     reducer: rootReducer,
     middleware: (gdf) =>
          gdf({
               serializableCheck: false,
               immutableCheck: false,
          }).concat(ApiMiddlewares),
});

export type RootState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = typeof AppStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

setupListeners(AppStore.dispatch);
