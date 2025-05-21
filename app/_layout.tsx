import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React from "react";
import "../global.css";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    PoppinsSemiBold: require("../assets/fonts/poppins/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../assets/fonts/poppins/Poppins-Bold.ttf"),
    PoppinsMedium: require("../assets/fonts/poppins/Poppins-Medium.ttf"),
    PoppinsRegular: require("../assets/fonts/poppins/Poppins-Regular.ttf"),
    PoppinsLight: require("../assets/fonts/poppins/Poppins-Light.ttf"),
    PoppinsExtraLight: require("../assets/fonts/poppins/Poppins-ExtraLight.ttf"),
  });

  React.useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/signup" options={{ headerShown: false }} />
         <Stack.Screen name="(auth)/forgot-password" options={{ headerShown: false }} />
      </Stack>
    </ActionSheetProvider>
  );
}
