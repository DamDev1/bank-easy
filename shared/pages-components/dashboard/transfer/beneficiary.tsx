import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Beneficiary({title}:{title:string}) {
  return (
    <View className="mt-10">
      <View className="flex-row justify-between items-center">
        <Text className="text-md font-poppinsemibold text-gray-500">
          {title}
        </Text>
        <Text className="text-md font-poppinsemibold text-primary">
          Find Beneficiary
        </Text>
      </View>
      <ScrollView horizontal>
        <View className="mt-5 flex-row gap-2">
          <View className="bg-gray-100 border border-gray-200 rounded-[10px] p-5 flex-row  w-[100px] h-[100px] justify-center items-center">
            <View className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center">
              <Feather name="plus" size={30} color="gray" />
            </View>
          </View>
          <View className="bg-gray-100 border border-gray-200 rounded-[10px] p-5 justify-center items-center gap-2 w-[100px] h-[100px]">
            <Image
              source={require("../../../../assets/images/Ellipse 8.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text className="text-sm font-poppinsemibold text-gray-500">
              Emma
            </Text>
          </View>
          <View className="bg-gray-100 border border-gray-200 rounded-[10px] p-5 justify-center items-center gap-2 w-[100px] h-[100px]">
            <Image
              source={require("../../../../assets/images/Ellipse 9.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text className="text-sm font-poppinsemibold text-gray-500">
              Justin
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
