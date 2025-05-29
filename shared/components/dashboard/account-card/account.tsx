import React from "react";
import { Image, Text, View } from "react-native";

export default function Account() {
  return (
    <View className="mt-10">
      <View className="justify-center items-center gap-3">
        <View className="w-[100px] h-[100px] bg-red-500  ml-auto mr-auto rounded-full overflow-hidden">
          <Image
            source={require("../../../../assets/images/profile.jpg")}
            className="w-[100px] h-[100px]"
          />
        </View>
        <Text className="text-center text-primary text-[20px] font-poppinsemibold">
          Damdev
        </Text>
      </View>
      <View className="mt-10 gap-3">
        <View className="gap-5 shadow-inherit rounded-[10px] p-5 border border-gray-200">
            <View className="flex-row justify-between">
                <Text className="font-poppinsemibold text-[16px]">Account 1</Text>
                <Text className="font-poppinsemibold text-[16px]">1900 8988 1234</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="font-poppinsemibold text-[12px] text-gray-500">Avalable balance</Text>
                <Text className="font-poppinsemibold text-[12px] text-primary">$12,000</Text>
            </View>
             <View className="flex-row justify-between">
                <Text className="font-poppinsemibold text-[12px] text-gray-500">Branch</Text>
                <Text className="font-poppinsemibold text-[12px] text-primary">New York</Text>
            </View>
        </View>
        <View className="gap-5 shadow-inherit rounded-[10px] p-5 border border-gray-200">
            <View className="flex-row justify-between">
                <Text className="font-poppinsemibold text-[16px]">Account 2</Text>
                <Text className="font-poppinsemibold text-[16px]">1900 8988 1234</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="font-poppinsemibold text-[12px] text-gray-500">Avalable balance</Text>
                <Text className="font-poppinsemibold text-[12px] text-primary">$12,000</Text>
            </View>
             <View className="flex-row justify-between">
                <Text className="font-poppinsemibold text-[12px] text-gray-500">Branch</Text>
                <Text className="font-poppinsemibold text-[12px] text-primary">New York</Text>
            </View>
        </View>

        <View className="gap-5 shadow-inherit rounded-[10px] p-5 border border-gray-200">
            <View className="flex-row justify-between">
                <Text className="font-poppinsemibold text-[16px]">Account 3</Text>
                <Text className="font-poppinsemibold text-[16px]">1900 8988 1234</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="font-poppinsemibold text-[12px] text-gray-500">Avalable balance</Text>
                <Text className="font-poppinsemibold text-[12px] text-primary">$280,000</Text>
            </View>
             <View className="flex-row justify-between">
                <Text className="font-poppinsemibold text-[12px] text-gray-500">Branch</Text>
                <Text className="font-poppinsemibold text-[12px] text-primary">New York</Text>
            </View>
        </View>
      </View>
    </View>
  );
}
