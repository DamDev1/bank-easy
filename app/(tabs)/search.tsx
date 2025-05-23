import PlatformView from "@/shared/components/view-container";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";


const branchImage = require("../../assets/images/searchImages/Group 472.png");
const intrestImage = require("../../assets/images/searchImages/Group 478.png");
const exchangeRateImage = require("../../assets/images/searchImages/Group 477.png");
const exchangeImage = require("../../assets/images/searchImages/Group 490.png");


const data = [
  { icon: branchImage, label: "Branch", path: "/pages/search/interest"},
  { icon: intrestImage, label: "Interest", path: "/pages/search/interest"},
  {
    icon: exchangeRateImage,
    label: "Exchange rate",
    path: "/pages/search/exchange-rate",
  },
  { icon: exchangeImage, label: "Exchange", path: "/pages/search/interest"},
];

export default function Search() {
  const handlePress = (path: string) => {
    if (path) {
      router.push(path);
    }
  };
  return (
    <PlatformView className="bg-secondary flex-1" scrollable>
      <View className="px-5 gap-8 -mt-10">
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="justify-between bg-secondary border border-gray-200 rounded-[10px] p-5 flex-row"
           onPress={() => handlePress(item.path)}
          >
            <View className="gap-2">
              <Text className="text-xl font-poppinsemibold">{item.label}</Text>
              <Text className="text-gray-400 font-poppinsmedium capitalize">
                Search for {item.label}
              </Text>
            </View>
            <View>
              <Image source={item.icon} style={{ width: 120, height: 100 }} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </PlatformView>
  );
}
