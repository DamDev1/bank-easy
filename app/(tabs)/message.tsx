import PlatformView from "@/shared/components/view-container";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Message() {
  return (
    <PlatformView className="bg-secondary flex-1">
      <View className="p-5 -mt-16 gap-12">
        <TouchableOpacity className="flex-row items-center gap-5" onPress={() => router.push("/pages/message/Bank of America/chatbox")}>
          <Image source={require("../../assets/images/icons/Group 334.png")} />
          <View>
            <Text className="text-[16px] font-poppinsemibold">
              Bank of America
            </Text>
            <Text className="text-[12px] text-gray-500 font-poppinsemibold">
              Bank of America : 256486 is the au...
            </Text>
          </View>
          <Text className="text-[12px] text-gray-500 font-poppinsemibold">
            2h ago
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center gap-5" onPress={() => router.push("/pages/message/Account/chatbox")}>
          <Image source={require("../../assets/images/icons/Group 334-1.png")} />
          <View>
            <Text className="text-[16px] font-poppinsemibold">
              Account
            </Text>
            <Text className="text-[12px] text-gray-500 font-poppinsemibold">
             Your account is limited. Please foll...
            </Text>
          </View>
          <Text className="text-[12px] text-gray-500 font-poppinsemibold">
            2h ago
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center gap-5" onPress={() => router.push("/pages/message/Alert/chatbox")}>
          <Image source={require("../../assets/images/icons/Group 334-2.png")} />
          <View>
            <Text className="text-[16px] font-poppinsemibold">
             Alert
            </Text>
            <Text className="text-[12px] text-gray-500 font-poppinsemibold">
             Your statement is ready for you to...
            </Text>
          </View>
          <Text className="text-[12px] text-gray-500 font-poppinsemibold">
            2h ago
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center gap-5" onPress={() => router.push("/pages/message/Paypal/chatbox")}>
          <Image source={require("../../assets/images/icons/Group 334-3.png")} />
          <View>
            <Text className="text-[16px] font-poppinsemibold">
             Paypal
            </Text>
            <Text className="text-[12px] text-gray-500 font-poppinsemibold">
             Your account has been locked. Ple...
            </Text>
          </View>
          <Text className="text-[12px] text-gray-500 font-poppinsemibold">
            2h ago
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center gap-5" onPress={() => router.push("/pages/message/Withdraw/chatbox")}>
          <Image source={require("../../assets/images/icons/Group 334-4.png")} />
          <View>
            <Text className="text-[16px] font-poppinsemibold">
             Withdraw
            </Text>
            <Text className="text-[12px] text-gray-500 font-poppinsemibold">
              Dear customer, 2987456 is your co...
            </Text>
          </View>
          <Text className="text-[12px] text-gray-500 font-poppinsemibold">
            2h ago
          </Text>
        </TouchableOpacity>
        
      </View>
    </PlatformView>
  );
}
