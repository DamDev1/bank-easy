import Account from "@/shared/components/dashboard/account-card/account";
import Card from "@/shared/components/dashboard/account-card/card";
import PlatformView from "@/shared/components/view-container";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function AccountCard() {
  const [switchTabs, setSwitchTabs] = React.useState("account");

  return (
    <PlatformView className="bg-secondary">
      <View className="p-5 -mt-16">
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={() => setSwitchTabs("account")}
            className={`${
              switchTabs === "account" ? "bg-primary" : "bg-gray-300"
            } p-4 rounded-[10px] w-[50%]`}
          >
            <Text
              className={`${
                switchTabs === "account" ? "text-white" : "text-gray-700"
              } text-[16px] text-center font-poppinsemibold`}
            >
              Account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSwitchTabs("card")}
            className={`${
              switchTabs === "card" ? "bg-primary" : "bg-gray-300"
            } w-[50%] p-4 rounded-[10px]`}
          >
            <Text
              className={`${
                switchTabs === "card" ? "text-white" : "text-gray-700"
              } text-center text-[16px] font-poppinsemibold`}
            >
              Card
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          {switchTabs === "account" ? (
            <Account />
          ) : (
           <Card/>
          )}
        </View>
      </View>
    </PlatformView>
  );
}
