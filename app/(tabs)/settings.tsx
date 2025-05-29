import PlatformView from "@/shared/components/view-container";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
  return (
    <PlatformView className="bg-primary">
      <View className="flex-1 bg-secondary rounded-t-[30px]">
        <View className="justify-center items-center">
          <View className="w-[100px] h-[100px] bg-red-500  ml-auto mr-auto -mt-14 rounded-full overflow-hidden">
            <Image
              source={require("../../assets/images/profile.jpg")}
              className="w-[100px] h-[100px]"
            />
          </View>
          <Text className="text-center text-primary text-[20px] font-poppinsemibold">
            Damdev
          </Text>
        </View>

        <View className="px-5 gap-10 mt-10">
          <TouchableOpacity className="flex-row items-center justify-between pb-5 border-b border-gray-200">
            <Text className="text-[16px] font-poppinsemibold">Password</Text>
            <AntDesign name="right" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between pb-5 border-b border-gray-200">
            <Text className="text-[16px] font-poppinsemibold">Touch ID</Text>
            <AntDesign name="right" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between pb-5 border-b border-gray-200">
            <Text className="text-[16px] font-poppinsemibold">Language</Text>
            <AntDesign name="right" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between pb-5 border-b border-gray-200" onPress={() => router.push("/pages/settings/app-information")}>
            <Text className="text-[16px] font-poppinsemibold">App information</Text>
            <AntDesign name="right" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between pb-5 border-b border-gray-200">
            <Text className="text-[16px] font-poppinsemibold">Customer care</Text>
            <Text className="text-[12px] text-gray-500  font-poppinsemibold">0392 2929 3929</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PlatformView>
  );
}
