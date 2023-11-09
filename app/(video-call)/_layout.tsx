import { Slot, Stack, router } from "expo-router";
import React from "react";
import { Colors, DeviceColor } from "../../utils";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";

export default function Layout() {
     const {} = Colors;
     const color = DeviceColor();
     return (
          <Stack screenOptions={{ headerShown: false }}>
               <Stack.Screen
                    name="index"
                    options={{
                         presentation: "modal",
                         headerShown: true,
                         title: "Host Or Join Meeting",
                         headerLeft: ({ tintColor, canGoBack }) => (
                              <TouchableOpacity onPress={() => router.replace("/home/")}>
                                   <Icon
                                        name="close"
                                        size={20}
                                        style={{ marginRight: 20 }}
                                        color={color === "dark" ? "#fff" : "#000"}
                                   />
                              </TouchableOpacity>
                         ),
                         headerStyle: {
                              backgroundColor: color === "dark" ? "#000" : "#fff",
                         },
                         headerTitleStyle: {
                              color: color === "dark" ? "#fff" : "#000",
                         },
                    }}
               />
          </Stack>
     );
}
