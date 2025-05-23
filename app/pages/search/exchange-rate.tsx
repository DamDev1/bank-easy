import PlatformView from "@/shared/components/view-container";
import React from "react";
import { Image, Text, View } from "react-native";

const china = require("../../../assets/images/Flag/CN.png");
const vietnam = require("../../../assets/images/Flag/VN.png");
const nicaragua = require("../../../assets/images/Flag/NI.png");
const korea = require("../../../assets/images/Flag/KR.png");
const portugal = require("../../../assets/images/Flag/PT.png");
const russia = require("../../../assets/images/Flag/RU.png");
const france = require("../../../assets/images/Flag/FR.png");

const countryData = [
  {
    name: "China",
    flag: china,
    buy: "1.403",
    sell: "1.746",
  },
  {
    name: "Vietnam",
    flag: vietnam,
    buy: "9.123",
    sell: "12.09",
  },
  {
    name: "Nicaragua",
    flag: nicaragua,
    buy: "3.704",
    sell: "5.51",
  },
  {
    name: "Korea",
    flag: korea,
    buy: "116.83",
    sell: "120.83",
  },
  {
    name: "Portugal",
    flag: portugal,
    buy: "1.735",
    sell: "2.593",
  },
  {
    name: "Russia",
    flag: russia,
    buy: "1.403",
    sell: "1.746",
  },
  {
    name: "France",
    flag: france,
    buy: "1.933",
    sell: "2.123",
  },
];

export default function ExchangeRate() {
  return (
    <PlatformView className="bg-secondary flex-1" scrollable>
      <View className="-mt-10 px-5">
        {/* Using flex instead of grid for React Native */}
        <View className="gap-5">
          {/* First row with two columns */}
          <View className="flex-row justify-between">
            <Text className="text-base font-poppinsemibold w-[60%] text-gray-500">
              Country
            </Text>
            <Text className="text-base font-poppinsemibold text-gray-500">
              Buy
            </Text>
            <Text className="text-base font-poppinsemibold text-gray-500">
              Sell
            </Text>
          </View>
          <View className="mt-5 gap-5 pb-10">
            {countryData.map((item, index) => (
              <View key={index} className="flex-row justify-between pb-5 border-b border-gray-200">
                <View className="w-[60%] flex-row gap-2 items-center">
                  <Image
                    source={item.flag}
                  />
                  <Text className="text-gray-600 text-base font-poppinsemibold ">
                    {item.name}
                  </Text>
                </View>
                <Text className="text-gray-500 text-base font-poppinsemibold ">
                  {item.buy}
                </Text>
                <Text className="text-primary text-base font-poppinsemibold ">
                 {item.sell}
                </Text>
              </View>
            ))}
            {countryData.map((item, index) => (
              <View key={index} className="flex-row justify-between pb-5 border-b border-gray-200">
                <View className="w-[60%] flex-row gap-2 items-center">
                  <Image
                    source={item.flag}
                  />
                  <Text className="text-gray-600 text-base font-poppinsemibold ">
                    {item.name}
                  </Text>
                </View>
                <Text className="text-gray-500 text-base font-poppinsemibold ">
                  {item.buy}
                </Text>
                <Text className="text-primary text-base font-poppinsemibold ">
                 {item.sell}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </PlatformView>
  );
}
