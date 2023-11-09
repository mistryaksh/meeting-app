import { Redirect, Stack, Tabs, router } from "expo-router";
import { useLayoutSlice } from "../../redux/features";
import { Colors, DeviceColor } from "../../utils";

export default function Layout() {
     const { token } = useLayoutSlice();
     const color = DeviceColor();
     const { gray } = Colors;

     return <Stack screenOptions={{ headerShown: false }} />;
}
