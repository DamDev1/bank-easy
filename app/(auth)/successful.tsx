import PlatformView from "@/shared/components/view-container";
import Back from "@/shared/ui/back";
import Button from "@/shared/ui/button";
import Label from "@/shared/ui/label";
import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Successful() {
  return (
    <PlatformView className="bg-secondary">
      <Back color="light" />
      <View className="flex-1 p-5">
        <View className="flex items-center justify-center mt-5 gap-5">
          <Image source={require("../../assets/images/successful.png")} />
          <Text className="text-center text-primary text-[20px] font-poppinsemibold mt-5">
            Change password successfully!
          </Text>
          <Label
            text="You have successfully change password. Please use the new password when Sign in."
            className="text-center text-gray-400 font-poppinsmedium text-[12px]"
          />
        </View>
        <View className="flex mt-10">
          <Button text="Continue" onPress={() => router.push("/(tabs)/dashboard")} />
        </View>
      </View>
    </PlatformView>
  );
}
