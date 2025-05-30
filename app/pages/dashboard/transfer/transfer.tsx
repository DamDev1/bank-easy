import SelectBankModal from "@/shared/components/custom/bankmodal";
import PlatformView from "@/shared/components/view-container";
import Beneficiary from "@/shared/pages-components/dashboard/transfer/beneficiary";
import TransactionType from "@/shared/pages-components/dashboard/transfer/transaction-type";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Transfer() {
  const [accountNo, setAccountNo] = useState<number>(0);
  const [isBankTransfer, setIsBankTransfer] = useState<boolean>(false);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const bankOptions = [
    { label: "JPMorgan Chase & Co.", value: "JPM" },
    { label: "Bank of America", value: "BAC" },
    { label: "Wells Fargo & Company", value: "WFC" },
    { label: "Citigroup Inc.", value: "C" },
    { label: "Goldman Sachs Group Inc.", value: "GS" },
    { label: "Morgan Stanley", value: "MS" },
    { label: "U.S. Bancorp", value: "USB" },
    { label: "Truist Financial Corporation", value: "TFC" },
    { label: "PNC Financial Services Group", value: "PNC" },
    { label: "Capital One Financial Corporation", value: "COF" },
  ];

  const onClose = () => setVisible(false);
  const handleSelect = (item: any) => {
    setSelectedOption(item);
  };

  return (
    <PlatformView scrollable className="bg-secondary">
      <SelectBankModal
        isVisible={isVisible}
        onClose={onClose}
        items={bankOptions}
        onSelect={handleSelect}
        selectedValue={selectedOption?.value}
      />
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
        <TransactionType
          accountNo={accountNo}
          setIsBankTransfer={setIsBankTransfer}
        />
        <Beneficiary  title="Beneficiary"/>
        <View className="mt-10 gap-5">
          {isBankTransfer && (
            <TouchableOpacity className="border border-gray-300 p-5 px-3 rounded-2xl flex flex-row items-center justify-between" onPress={() => setVisible(true)}>
              <TextInput placeholder="Choose bank" value= {selectedOption && selectedOption.label} className="flex-1" editable={false}/>
              <EvilIcons name="chevron-down" size={24} color="black" />
            </TouchableOpacity>
          )}
          <Input type="text" placeholder="Name" />
          <Input type="numeric" placeholder="Card Number" />
          <Input type="numeric" placeholder="Amount" />
          <Input type="numeric" placeholder="Content" />
        </View>
        <View className="flex-row items-center mt-5 gap-2">
          <Checkbox />
          <Text className="text-gray-500">
            Save to directory of beneficiary{" "}
          </Text>
        </View>
        <View className="mt-10">
          <Button
            text="Confirm"
            onPress={() => router.push("/pages/dashboard/transfer/confirm")}
          />
        </View>
      </View>
    </PlatformView>
  );
}