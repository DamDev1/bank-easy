import PlatformView from "@/shared/components/view-container";
import Button from "@/shared/ui/button";
import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Successful() {
  return (
    <PlatformView className="bg-secondary">
      <View className="">
        <View className="gap-5 p-5 mt-20">
          <View className="flex items-center justify-center">
            <Image
              source={require("../../../../assets/images/Illustration 4.png")}
            />
          </View>
          <Text className="text-center text-primary text-[20px] font-poppinsemibold">
            Successful withdrawal!
          </Text>
          <Text className="text-center text-gray-500 font-poppinsemibold">
            You have successfully withdrawn money! Please check the balance in
            the card management section.
          </Text>
          <View className="mt-10">
            <Button
              text="Continue"
              onPress={() => router.replace("/(tabs)/dashboard")}
            />
          </View>
        </View>
      </View>
    </PlatformView>
  );
}
