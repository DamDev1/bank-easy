import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function TransactionType({ accountNo }: { accountNo: number }) {
  const [selectTransactionOption, setSelectTransactionOption] =
    React.useState(0);

  const options = [
    {
      type: "Transfer via card number",
      icon: (
        <AntDesign
          name="creditcard"
          size={30}
          color={
            accountNo > 5
              ? selectTransactionOption === 0
                ? "white"
                : "#fff"
              : "#9ca3af"
          }
        />
      ),
    },
    {
      type: "Transfer to the same bank",
      icon: (
        <FontAwesome6
          name="user"
          size={24}
          color={
            accountNo > 5
              ? selectTransactionOption === 1
                ? "white"
                : "#fff"
              : "#9ca3af"
          }
        />
      ),
    },
    {
      type: "Transfer to another bank",
      icon: (
        <MaterialCommunityIcons
          name="bank-outline"
          size={30}
          color={
            accountNo > 5
              ? selectTransactionOption === 2
                ? "white"
                : "#fff"
              : "#9ca3af"
          }
        />
      ),
    },
  ];

  return (
    <View className="mt-5">
      <Text className="text-md font-poppinsemibold text-gray-500">
        Choose Transaction
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-5"
      >
        <View className="flex-row gap-5">
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              className={`mt-2 gap-4 p-4 rounded-[10px] w-[150px] ${
                selectTransactionOption === index && accountNo > 5
                  ? "bg-blue-500" // Blue background when selected and accountNo > 5
                  : accountNo > 5
                  ? "border border-gray-200"
                  : "bg-gray-100"
              }`}
              onPress={() => accountNo > 5 && setSelectTransactionOption(index)}
              disabled={accountNo <= 5}
              activeOpacity={accountNo > 5 ? 0.7 : 1}
            >
              {item.icon}
              <Text
                className={`text-md font-poppinsmedium ${
                  selectTransactionOption === index && accountNo > 5
                    ? "text-white" // White text when selected
                    : "text-gray-400"
                }`}
              >
                {item.type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
