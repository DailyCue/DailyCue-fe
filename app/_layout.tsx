import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="main" options={{ headerShown: false }} />
      <Stack.Screen name="recording" options={{ presentation: "modal" }} />
    </Drawer>
  );
}
