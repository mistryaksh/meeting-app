import { StatusBar } from "expo-status-bar";
import React, { FC, ReactNode, useEffect } from "react";
import { Platform, View } from "react-native";
import { Colors, DeviceColor } from "../utils";
// import { useFonts } from "expo-font";

import {
     Ubuntu_300Light,
     Ubuntu_300Light_Italic,
     Ubuntu_400Regular,
     Ubuntu_400Regular_Italic,
     Ubuntu_500Medium,
     Ubuntu_500Medium_Italic,
     Ubuntu_700Bold,
     Ubuntu_700Bold_Italic,
     useFonts,
} from "@expo-google-fonts/ubuntu";
import { Provider } from "react-redux";
import { AppStore } from "../redux";
import { useLayoutSlice } from "../redux/features";
import { AppText } from "../component";
export interface AppLayoutProps {
     children: ReactNode;
     loading?: boolean;
     paddingEnable?: boolean;
}

export const AppLayout: FC<AppLayoutProps> = ({ children, loading, paddingEnable }) => {
     const { gray } = Colors;
     const color = DeviceColor();
     const { token } = useLayoutSlice();

     let [fontsLoaded, fontError] = useFonts({
          Ubuntu_300Light,
          Ubuntu_300Light_Italic,
          Ubuntu_400Regular,
          Ubuntu_400Regular_Italic,
          Ubuntu_500Medium,
          Ubuntu_500Medium_Italic,
          Ubuntu_700Bold,
          Ubuntu_700Bold_Italic,
     });

     if (!fontsLoaded && !fontError) {
          return null;
     }

     return (
          <Provider store={AppStore}>
               <View
                    style={{
                         backgroundColor: color ? gray[950] : gray[100],
                         height: "100%",
                         width: "100%",
                    }}
               >
                    <StatusBar style={color ? "light" : "dark"} backgroundColor={color ? gray[950] : gray[50]} />
                    <View
                         style={[
                              {
                                   width: "100%",
                                   height: "100%",
                              },
                              paddingEnable && {
                                   padding: 20,
                              },
                         ]}
                    >
                         {loading ? <AppText>"Please wait"</AppText> : children}
                    </View>
               </View>
          </Provider>
     );
};
