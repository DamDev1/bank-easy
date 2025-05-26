import PlatformView from "@/shared/components/view-container";
import Beneficiary from "@/shared/pages-components/dashboard/transfer/beneficiary";
import TransactionType from "@/shared/pages-components/dashboard/transfer/transaction-type";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Transfer() {
  const [accountNo, setAccountNo] = useState<number>(0);
  return (
    <PlatformView scrollable className="bg-secondary">
      <View className="p-5 -mt-14">
        <View className="bg-secondary border border-gray-200 rounded-[10px] p-5 flex-row justify-between">
          <TextInput
            placeholder="Enter the amount"
            onChangeText={() => setAccountNo(accountNo + 1)}
            className="flex-1"
          />
          <View>
            <MaterialIcons name="keyboard-arrow-up" size={20} color="gray" />
            <MaterialIcons
              name="keyboard-arrow-down"
              size={20}
              color="gray"
              className="-mt-3"
            />
          </View>
        </View>
        <TransactionType accountNo={accountNo} />
        <Beneficiary />
        <View className="mt-10 gap-5">
          <Input type="text" placeholder="Name" />
          <Input type="numeric" placeholder="Card Number" />
          <Input type="numeric" placeholder="Amount" />
          <Input type="numeric" placeholder="Content" />
        </View>
        <View className="flex-row items-center mt-5 gap-2">
            <Checkbox/>
            <Text className="text-gray-500">Save to directory of beneficiary </Text>
        </View>
        <View className="mt-10">
            <Button text="Confirm" onPress={() => router.push('/pages/dashboard/transfer/confirm')}/>
        </View>
      </View>
    </PlatformView>
  );
}
