import PlatformView from "@/shared/components/view-container";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Confirm() {
  return (
    <PlatformView scrollable className="bg-secondary">
      <View className="p-5 -mt-14">
        <Text className="text-sm font-poppinsemibold text-gray-500">
          Confirm your transaction information
        </Text>
        <View className="mt-5 gap-8">
          <Input type="numeric" placeholder="**** **** 6789" text="From" />
          <Input type="text" placeholder="Amanda" text="To" />
          <Input type="numeric" placeholder="0020300232" text="Card Number" />
          <Input type="numeric" placeholder="10$" text="Transaction Fee" />
          <Input type="text" placeholder="From DamDev" text="Content" />
          <Input type="numeric" placeholder="$100,000" text="Amount" />
          <View className="flex-row items-center justify-between gap-2">
            <Input className="flex-1" type="numeric" placeholder="72721" text="Get OTP to verify transaction"/>
            <View className="mt-8">
                <Button text="Get OTP" />
            </View>
          </View>
        </View>
        <View className="mt-10">
            <Button text="Confirm" onPress={() => router.push("/pages/dashboard/transfer/successful")}/>
        </View>
      </View>
    </PlatformView>
  );
}