import Button from "@/shared/ui/button";
import { router } from "expo-router";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

export default function Card() {
  return (
    <View className=" mt-10">
      <View className="justify-center items-center">
        <TouchableOpacity onPress={() => router.push("/pages/dashboard/account-card/card")}>
          <Image
            source={require("../../../../assets/images/card/1.png")}
            className="w-[430px]"
          />
        </TouchableOpacity>
        <Image
          source={require("../../../../assets/images/card/2.png")}
          className="w-[430px]"
        />
      </View>
      <View className="mt-10">
        <Button text="Add Card" />
      </View>
    </View>
  );
}
