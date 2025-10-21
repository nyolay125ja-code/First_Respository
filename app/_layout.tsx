import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack initialRouteName="kyaw1">
    <Stack.Screen name="kyaw1" options={{headerShown:false}}></Stack.Screen>
  </Stack>;
}
