import React, { useEffect } from "react";

import { Image, Platform, View } from "react-native";
import { AppLayout } from "../layout";
import { AppText } from "../component";
import { AppButton } from "../component/ui/button";
import { Link } from "expo-router";
import { Colors } from "../utils";
import { useHomeQuery } from "../redux/api";

export default function Home() {
     const { gray } = Colors;

     return (
          <AppLayout paddingEnable>
               <View
                    style={[
                         {
                              width: Platform.OS === "web" ? "40%" : "100%",
                              gap: 10,
                              display: "flex",
                              justifyContent: "flex-end",
                              height: "100%",
                         },
                         Platform.OS === "web" && {
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: 10,
                              height: "100%",
                              width: "100%",
                         },
                    ]}
               >
                    <Image
                         source={{
                              uri: "https://i.pinimg.com/564x/f8/b4/ea/f8b4ea242e83023de3fb4685bb9cfce3.jpg",
                         }}
                         style={{
                              height: 100,
                              width: Platform.OS === "web" ? "40%" : "100%",
                              borderRadius: 20,
                              borderWidth: 1,
                              borderColor: gray[500],
                         }}
                    />
                    <AppText h1 capitalize>
                         quick meeting join & create
                    </AppText>
                    <View style={{ gap: 20 }}>
                         <AppButton colored>continue with email address</AppButton>
                         <AppButton colorLess>Sign Up with Google</AppButton>
                         <View
                              style={{
                                   display: "flex",
                                   flexDirection: "row",
                                   gap: 10,
                                   justifyContent: "space-between",
                              }}
                         >
                              <AppText>
                                   <Link href="/(account)/forgot-password">Reset your password?</Link>
                              </AppText>
                              <AppText>
                                   <Link href="/(account)/forgot-password">Privacy Policy</Link>
                              </AppText>

                              <AppText>
                                   <Link href="/(account)/forgot-password">Terms & Conditions</Link>
                              </AppText>
                         </View>
                    </View>
               </View>
          </AppLayout>
     );
}
