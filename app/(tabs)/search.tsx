import PlatformView from "@/shared/components/view-container";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const branchImage = require("../../assets/images/searchImages/Group 472.png");
const intrestImage = require("../../assets/images/searchImages/Group 478.png");
const exchangeRateImage = require("../../assets/images/searchImages/Group 477.png");
const exchangeImage = require("../../assets/images/searchImages/Group 490.png");

const data = [
  { icon: branchImage, label: "Branch" },
  { icon: intrestImage, label: "Interest" },
  { icon: exchangeRateImage, label: "Exchange rate" },
  { icon: exchangeImage, label: "Exchange" },
];

export default function Search() {
  return (
    <PlatformView className="bg-secondary flex-1" scrollable>
      <View className="px-5 gap-8 -mt-10">
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="justify-between bg-secondary border border-gray-200 rounded-[10px] p-5 flex-row"
          >
            <View className="gap-2">
              <Text className="text-xl font-poppinsemibold">{item.label}</Text>
              <Text className="text-gray-400 font-poppinsmedium capitalize">
                Search for {item.label}
              </Text>
            </View>
            <View>
              <Image source={item.icon} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </PlatformView>
  );
}
