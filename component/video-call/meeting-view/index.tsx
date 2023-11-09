import React, { FC, useEffect, useState } from "react";
import { PermissionsAndroid, TouchableOpacity, View } from "react-native";
import { AppButton, AppText } from "../../ui";
import { handleHostActions, useVideoCallSlice } from "../../../redux/features";
import { MediaStream, RTCView, useMeeting, useParticipant } from "@videosdk.live/react-native-sdk";
import { useAppDispatch } from "../../../redux";
import { Camera, CameraType } from "expo-camera";

function ParticipantView({ participantId }: { participantId: string }) {
     const { webcamStream, webcamOn } = useParticipant(participantId);
     return webcamOn && webcamStream ? (
          <RTCView
               streamURL={new MediaStream([webcamStream.track]).toURL()}
               objectFit={"cover"}
               style={{
                    height: 300,
                    marginVertical: 8,
                    marginHorizontal: 8,
               }}
          />
     ) : (
          <View
               style={{
                    backgroundColor: "grey",
                    height: 300,
                    justifyContent: "center",
                    alignItems: "center",
               }}
          >
               <AppText h3>NO MEDIA</AppText>
          </View>
     );
}

export const MeetingView: FC = () => {
     const { joined } = useVideoCallSlice();
     const dispatch = useAppDispatch();
     const { join, participants, changeWebcam, changeMic } = useMeeting({
          onMeetingJoined: () => {
               dispatch(handleHostActions("JOINED"));
          },
     });

     useEffect(() => {
          const requestCameraPermission = async () => {
               console.log("requestCameraPermission");
               try {
                    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
                         title: "Cool Photo App Camera Permission",
                         message: "Cool Photo App needs access to your camera " + "so you can take awesome pictures.",
                         buttonNeutral: "Ask Me Later",
                         buttonNegative: "Cancel",
                         buttonPositive: "OK",
                    });
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                         console.log("You can use the camera");
                    } else {
                         console.log("Camera permission denied");
                    }
               } catch (err) {
                    console.warn(err);
               }
          };
     }, []);

     const StartJoining = () => {
          dispatch(handleHostActions("JOINING"));
          join();
          setTimeout(() => {
               changeWebcam();
          }, 3000);
     };
     return (
          <View style={{ borderWidth: 1, borderColor: "green" }}>
               {joined && joined == "JOINED" ? (
                    <>
                         {[...participants.keys()].map((participantId) => (
                              <ParticipantView participantId={participantId} key={participantId} />
                         ))}
                    </>
               ) : joined && joined == "JOINING" ? (
                    <AppText>Joining the meeting...</AppText>
               ) : (
                    <TouchableOpacity
                         onPress={StartJoining}
                         style={{ backgroundColor: "black", alignSelf: "center", padding: 12 }}
                    >
                         <AppText h6>Join the meeting</AppText>
                    </TouchableOpacity>
               )}
          </View>
     );
};
