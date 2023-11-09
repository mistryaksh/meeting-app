import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { AppStore } from "../redux";
import { Camera, CameraType } from "expo-camera";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";

export default function Layout() {
     const [type, setType] = useState(CameraType.front);

     const [camera, requestCamera] = Camera.useCameraPermissions();
     const [microphone, requestMicrophone] = Audio.usePermissions();

     useEffect(() => {
          requestCamera();
          requestMicrophone();
          setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
     }, []);
     return (
          <Provider store={AppStore}>
               <Stack screenOptions={{ headerShown: false, animation: "fade_from_bottom" }} />
          </Provider>
     );
}
