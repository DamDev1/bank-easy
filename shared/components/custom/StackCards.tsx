import React from "react";
import { Image, View } from "react-native";

export default function StackCards() {
  return (
    <View className="flex items-center justify-center">
      <Image
        source={require("../../../assets/images/card.png")}
        className="w-[420px]"
      />
    </View>
  );
}
