import StackCards from "@/shared/components/custom/StackCards";
import PlatformView from "@/shared/components/view-container";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Dashboard() {
  const cards = [
    {
      label: "Total Products",
      value: 20,
      color: "#00295C",
    },
    {
      label: "Store Products",
      value: 10,
      color: "#1100A8",
    },
    {
      label: "Imported Products",
      value: 6,
      color: "#230C33",
    },
  ];

  return (
    <PlatformView scrollable={true} className="bg-primary flex-1">
      <View className="px-5 flex-row justify-between items-center">
        <View className="flex-row items-center gap-2">
          <Image source={require("../../../assets/images/Avatar (1).png")} />
          <Text className="text-white text-xl font-poppinsemibold">
            HI, DamDev
          </Text>
        </View>
        <Ionicons name="notifications" size={30} color="#fff" />
      </View>
      <View className="flex-1 bg-secondary mt-6 p-8 rounded-t-[40px] h-[100vh]">
        <StackCards/>
      </View>
    </PlatformView>
  );
}
