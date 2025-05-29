import PlatformView from "@/shared/components/view-container";
import React from "react";
import { Text, View } from "react-native";

export default function Card() {
  return (
    <PlatformView className="bg-secondary flex-1">
      <View className="p-5 -mt-10 gap-10">
        <View className="flex-row items-center justify-between pb-5 border-b border-gray-200">
          <Text className="text-[16px] font-poppinsemibold">Name</Text>
          <Text className="text-[16px] font-poppinsemibold text-primary">
            {" "}
            DamDev
          </Text>
        </View>
        <View className="flex-row items-center justify-between pb-5 border-b border-gray-200">
          <Text className="text-[16px] font-poppinsemibold">Card Number</Text>
          <Text className="text-[16px] font-poppinsemibold text-primary">
            **** **** 9018
          </Text>
        </View>
        <View className="flex-row items-center justify-between pb-5 border-b border-gray-200">
          <Text className="text-[16px] font-poppinsemibold">Valid from</Text>
          <Text className="text-[16px] font-poppinsemibold text-primary">
            10/15
          </Text>
        </View>
        <View className="flex-row items-center justify-between pb-5 border-b border-gray-200">
          <Text className="text-[16px] font-poppinsemibold">Good thru</Text>
          <Text className="text-[16px] font-poppinsemibold text-primary">
            10/20
          </Text>
        </View>
        <View className="flex-row items-center justify-between pb-5 border-b border-gray-200">
          <Text className="text-[16px] font-poppinsemibold">Available balance</Text>
          <Text className="text-[16px] font-poppinsemibold text-primary">
            $10,000
          </Text>
        </View>
      </View>
    </PlatformView>
  );
}
