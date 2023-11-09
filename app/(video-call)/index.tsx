"user strict";
import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";

import { AppLayout } from "../../layout";
import { AppButton, AppText, MeetingView, TextField } from "../../component";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors, DeviceColor, GetToken } from "../../utils";
import { Link, Slot } from "expo-router";
import Icon from "react-native-vector-icons/Feather";
import { useGenerateMeetingMutation, useGetMeetingTokenQuery } from "../../redux/api";
import { useAppDispatch } from "../../redux";
import {
     handleLayoutError,
     handleLayoutSuccess,
     handleRoomId,
     handleRoomToken,
     useLayoutSlice,
     useVideoCallSlice,
} from "../../redux/features";
import { MeetingProvider } from "@videosdk.live/react-native-sdk";

export default function HostScreen() {
     const { gray, primary } = Colors;
     const { error, success } = useLayoutSlice();
     const { roomToken, roomId } = useVideoCallSlice();
     const color = DeviceColor();
     const {
          data: tokenData,
          isError: isTokenError,
          error: tokenError,
          isLoading: isTokenLoading,
          isSuccess: isTokenSuccess,
     } = useGetMeetingTokenQuery();
     const [
          GenerateMeetingId,
          {
               isError: isMeetingError,
               isLoading: isMeetingLoading,
               isSuccess: isMeetingSuccess,
               data: meetingData,
               error: meetingError,
          },
     ] = useGenerateMeetingMutation();

     const dispatch = useAppDispatch();

     useEffect(() => {
          if (isTokenError) {
               if ((tokenError as any).data) {
                    dispatch(handleLayoutError((tokenError as any).data.message));
               } else {
                    dispatch(handleLayoutError((tokenError as any).message));
               }
          }

          if (isMeetingError) {
               if ((meetingError as any).data) {
                    console.log((meetingError as any).data.message);
                    dispatch(handleLayoutError((meetingError as any).data.message));
               } else {
                    console.log((meetingError as any).message);
                    dispatch(handleLayoutError((meetingError as any).message));
               }
          }

          if (isTokenSuccess) {
               dispatch(handleRoomToken(tokenData.data));
          }
          if (roomToken) {
               dispatch(handleLayoutSuccess("You were ready to join meeting"));
          }
          if (isMeetingSuccess) {
               console.log(meetingData);
               dispatch(handleRoomId(meetingData?.data.roomId));
          }
     }, [
          isTokenError,
          tokenError,
          isTokenSuccess,
          roomToken,
          tokenData,
          dispatch,
          isMeetingError,
          meetingError,
          meetingData,
     ]);

     const GenerateMeeting = async () => {
          await GenerateMeetingId(tokenData?.data);
     };

     return (
          <AppLayout paddingEnable={false}>
               <StatusBar translucent={false} />
               {error?.length && <AppText danger>{error}</AppText>}
               {roomId ? (
                    <View style={{ borderWidth: 1, borderColor: "red", height: "100%" }}>
                         <MeetingProvider
                              config={{
                                   meetingId: roomId,
                                   micEnabled: true,
                                   webcamEnabled: true,
                                   name: "unnamed",
                              }}
                              token={roomToken as string}
                         >
                              <MeetingView />
                         </MeetingProvider>
                    </View>
               ) : (
                    <View
                         style={{
                              height: "100%",
                         }}
                    >
                         <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                              {success && <AppText>{success}</AppText>}
                              {isTokenLoading && <AppText>Checking Status...</AppText>}
                         </View>
                         <View
                              style={{ gap: 10, borderBottomWidth: 1, borderBottomColor: gray[500], paddingBottom: 20 }}
                         >
                              <TextInput
                                   placeholder="Enter Meeting ID"
                                   placeholderTextColor={"gray"}
                                   style={{
                                        fontSize: 16,
                                        paddingHorizontal: 15,
                                        paddingVertical: 15,
                                        backgroundColor: color === "dark" ? gray[800] : gray[300],
                                   }}
                              />
                              <AppButton colored>Join Now</AppButton>
                         </View>
                         <View
                              style={{
                                   display: "flex",
                                   flexDirection: "column",
                              }}
                         >
                              <TouchableOpacity
                                   onPress={() => GenerateMeeting()}
                                   style={{
                                        padding: 20,
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: 20,
                                        width: "100%",
                                   }}
                              >
                                   <Icon color={primary[500]} name="link" size={20} />
                                   <Text
                                        style={{
                                             color: primary[500],
                                             fontSize: 16,
                                             textAlign: "center",
                                             textTransform: "capitalize",
                                        }}
                                   >
                                        Generate Meeting
                                   </Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                   style={{
                                        padding: 20,
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: 20,
                                        width: "100%",
                                   }}
                              >
                                   <Icon color={primary[500]} name="calendar" size={20} />
                                   <Text
                                        style={{
                                             color: primary[500],
                                             fontSize: 16,
                                             textAlign: "center",
                                             textTransform: "capitalize",
                                        }}
                                   >
                                        Schedule for later
                                   </Text>
                              </TouchableOpacity>
                         </View>
                    </View>
               )}
          </AppLayout>
     );
}
