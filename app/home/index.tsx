import React from "react";
import { AppLayout } from "../../layout";
import { AppButton, AppText } from "../../component";
import { Stack, Tabs, router } from "expo-router";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Colors, DeviceColor } from "../../utils";
import { TouchableOpacity } from "react-native";

export default function Homepage() {
     const { primary } = Colors;
     const color = DeviceColor();
     return (
          <AppLayout paddingEnable>
               <View style={{ height: "100%", position: "relative" }}>
                    <View
                         style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              height: "100%",
                              gap: 10,
                         }}
                    >
                         <AppText h1>You have no previous history of your calls</AppText>
                         <AppText centered={false} muted>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, laboriosam.
                         </AppText>
                    </View>
                    <TouchableOpacity
                         onPress={() => router.replace("/(video-call)")}
                         style={{
                              position: "absolute",
                              bottom: 20,
                              right: 20,
                              backgroundColor: color === "dark" ? "#333" : "gray",
                              padding: 15,
                              borderRadius: 100,
                         }}
                    >
                         <Icon name="video" size={30} color={primary[500]} />
                    </TouchableOpacity>
               </View>
          </AppLayout>
     );
}
