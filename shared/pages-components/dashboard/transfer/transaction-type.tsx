import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

type TransactionOption = {
  type: string;
  icon: React.ReactNode;
  isBankTransfer?: boolean;
};

export default function TransactionType({ accountNo, setIsBankTransfer }: { accountNo: number, setIsBankTransfer: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [selectedOption, setSelectedOption] = React.useState(0);
  
  const isAccountValid = accountNo > 5;
  const isOptionSelected = (index: number) => selectedOption === index && isAccountValid;

  const options: TransactionOption[] = [
    {
      type: "Transfer via card number",
      icon: (
        <AntDesign
          name="creditcard"
          size={30}
          color={isOptionSelected(0) ? "white" : isAccountValid ? "#000" : "#9ca3af"}
        />
      ),
    },
    {
      type: "Transfer to the same bank",
      icon: (
        <FontAwesome6
          name="user"
          size={24}
          color={isOptionSelected(1) ? "white" : isAccountValid ? "#000" : "#9ca3af"}
        />
      ),
    },
    {
      type: "Transfer to another bank",
      icon: (
        <MaterialCommunityIcons
          name="bank-outline"
          size={30}
          color={isOptionSelected(2) ? "white" : isAccountValid ? "#000" : "#9ca3af"}
        />
      ),
      isBankTransfer: true,
    },
  ];

  const getOptionStyle = (index: number, option: TransactionOption) => {
    if (!isAccountValid) {
      return option.isBankTransfer ? "bg-gray-100" : "bg-gray-100";
    }
    if (isOptionSelected(index)) {
      setIsBankTransfer(option.isBankTransfer || false);
      return option.isBankTransfer ? "bg-[#FFAF2A]" : "bg-blue-500";
    }
    return "border border-gray-200 bg-white";
  };

  return (
    <View className="mt-5">
      <Text className="text-md font-poppinsemibold text-gray-500">
        Choose Transaction
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-5">
        <View className="flex-row gap-5">
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              className={`mt-2 gap-4 p-4 rounded-[10px] w-[150px] items-center ${getOptionStyle(index, option)}`}
              onPress={() => isAccountValid && setSelectedOption(index)}
              disabled={!isAccountValid}
              activeOpacity={0.7}
            >
              {option.icon}
              <Text
                className={`text-md font-poppinsmedium text-center ${
                  isOptionSelected(index) ? "text-white" : isAccountValid ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {option.type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}