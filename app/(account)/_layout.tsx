import { Redirect, Stack } from "expo-router";
import { useEffect } from "react";
import { useLayoutSlice } from "../../redux/features";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

export default function Layout() {
     const { token } = useLayoutSlice();
     useEffect(() => {
          if (Platform.OS === "web") {
               if (!localStorage.getItem("auth_token")) {
                    <Redirect href="/(account)/login" />;
               }
          } else {
               if (!SecureStore.getItemAsync("auth_token")) {
                    <Redirect href="/(account)/login" />;
               } else {
                    <Redirect href="/home/" />;
               }
          }
     }, [token]);
     return <Stack screenOptions={{ headerShown: false }} />;
}
