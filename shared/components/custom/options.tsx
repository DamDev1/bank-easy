import React from "react";
import { Image, Text, View } from "react-native";

// Import images directly
const beneficiaryIcon = require("../../../assets/images/icons/contacts-2 1.png");
const walletIcon = require("../../../assets/images/icons/Group.png");
const transferIcon = require("../../../assets/images/icons/Group-1.png");
const withdrawIcon = require("../../../assets/images/icons/Group-2.png");
const mobilePrepaid = require("../../../assets/images/icons/Group-3.png");
const depositIcon = require("../../../assets/images/icons/receipt-list-43 1.png");
const saveOnlineIcon = require("../../../assets/images/icons/pig 1.png");
const creditCardIcon = require("../../../assets/images/icons/credit-card 2.png");
const reportIcon = require("../../../assets/images/icons/file-paragraph 1.png");

export default function Options() {
  const options = [
    { icon: walletIcon, label: "Account and Card" },
    { icon: transferIcon, label: "Transfer" },
    { icon: withdrawIcon, label: "Withdraw" },
    { icon: mobilePrepaid, label: "Mobile prepaid" },
    { icon: depositIcon, label: "Pay the bill" },
    { icon: saveOnlineIcon, label: "Save online" },
    { icon: creditCardIcon, label: "Credit card" },
    { icon: reportIcon, label: "Transaction report" },
    { icon: beneficiaryIcon, label: "Beneficiary" },
  ];
  return (
    <View className="flex-wrap flex-row gap-2" style={{ rowGap: 20 }}>
      {options.map((option, index) => (
        <View
          key={index}
          className="bg-secondary p-5 border border-gray-200 rounded-[10px] w-[31%] justify-center items-center gap-3"
        >
          <Image source={option.icon} resizeMode="contain" />
          <Text className="text-[12px] font-poppinsemibold text-center text-gray-500">
            {option.label}
          </Text>
        </View>
      ))}
    </View>
  );
}
