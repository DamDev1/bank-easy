import PlatformView from "@/shared/components/view-container";
import React from "react";
import { Text, View } from "react-native";

export default function Settings() {
  return (
    <PlatformView className="bg-primary">
      <View className="flex-1 bg-secondary rounded-t-[30px]">
        <View className="justify-center items-center">
          <View className="w-[100px] h-[100px] bg-red-500  ml-auto mr-auto -mt-14 rounded-full"></View>
        <Text className="text-center text-primary text-[20px] font-poppinsemibold">Damdev</Text>
        </View>
      </View>
    </PlatformView>
  );
}
