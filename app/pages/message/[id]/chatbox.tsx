import PlatformView from "@/shared/components/view-container";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";

export default function Chatbox() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: id as string,
    });
  }, [navigation, id]);
  return (
    <PlatformView className="bg-secondary flex-1">
      <View className="flex-1 p-4 -mt-16">
        <View>
          <Text className="text-[12px] text-center text-gray-400 font-poppinsemibold">
            Today
          </Text>
          <View className="mt-4">
            <Text className="text-[12px] text-gray-500 font-poppinsemibold bg-[#c5c5c579] px-3 py-2 rounded-[10px] w-[70%]">
              Did you attempt transaction on debit card ending in 0000 at
              Mechan1 in NJ for $1,200? Reply YES or NO
            </Text>
          </View>
        </View>
        <View className="absolute bottom-10 ml-5 w-full flex-row items-center gap-4">
          <Input placeholder="Type a message" type="text" className="flex-1" />
          <Button text="Send" />
        </View>
      </View>
    </PlatformView>
  );
}
