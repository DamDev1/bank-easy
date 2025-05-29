import PlatformView from "@/shared/components/view-container";
import React from "react";
import { Text, View } from "react-native";

export default function AppInformation() {
  return (
    <PlatformView className="bg-secondary">
      <View className="gap-5 p-5 -mt-10">
        <Text className="text-center text-[20px] font-poppinsemibold">
          CaBank E-mobile Banking
        </Text>

        <View className=" gap-8 mt-10">
          <View className="flex-row items-center justify-between pb-5 border-b border-gray-200">
            <Text className="text-[16px] font-poppinsmedium">
              Date of manufacture
            </Text>
            <Text className="text-[16px] text-primary font-poppinsemibold">
              Dec 2019
            </Text>
          </View>
          <View className="flex-row items-center justify-between pb-5 border-b border-gray-200">
            <Text className="text-[16px] font-poppinsmedium">Version</Text>
            <Text className="text-[16px] text-primary font-poppinsemibold">
              9.0.2
            </Text>
          </View>
          <View className="flex-row items-center justify-between pb-5 border-b border-gray-200">
            <Text className="text-[16px] font-poppinsmedium">Language</Text>
            <Text className="text-[16px] text-primary font-poppinsemibold">
              English
            </Text>
          </View>
        </View>
      </View>
    </PlatformView>
  );
}
