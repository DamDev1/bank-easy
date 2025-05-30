import SelectPopupModal from "@/shared/components/custom/select-modal";
import PlatformView from "@/shared/components/view-container";
import Beneficiary from "@/shared/pages-components/dashboard/transfer/beneficiary";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function MobilePrepaid() {
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [phoneNumber, setPhoneNumber] = useState<number | string>("");
  const [inputAmount, setInputAmount] = useState<string>("");
  const [selected, setSelected] = useState<number | null>(null);
  const amounts = [100, 200, 300];

  const accounts = [
    { label: "1900 8988 5456", value: "1900 8988 5456", balance: "$1,000" },
    { label: "1900 8112 5222", value: "1900 8112 5222", balance: "$3,000" },
    { label: "4411 0000 1234", value: "4411 0000 1234", balance: "$10,000" },
    { label: "1900 8988 5455", value: "1900 8988 5454", balance: "$100,000" },
  ];

  const onClose = () => setVisible(false);
  const handleSelect = (item: any) => {
    setSelectedOption(item);
  };
  return (
    <PlatformView className="bg-secondary" scrollable>
      <SelectPopupModal
        isVisible={visible}
        onClose={onClose}
        items={accounts}
        onSelect={handleSelect}
        selectedValue={selectedOption?.value}
        title="Choose account/card"
      />
      <View className="flex-1 p-5 -mt-16">
        <View>
          <TouchableOpacity
            className="border border-gray-300 p-5 px-3 rounded-2xl flex flex-row items-center justify-between"
            onPress={() => setVisible(true)}
          >
            <TextInput
              placeholder="Choose account/card"
              value={selectedOption && selectedOption.label}
              className="flex-1"
              editable={false}
            />
            <EvilIcons name="chevron-down" size={24} color="black" />
          </TouchableOpacity>
          {selectedOption && (
            <Text className="text-sm font-poppinsmedium mt-2 text-primary">
              Avaliable balance: {selectedOption.balance}
            </Text>
          )}
        </View>
        <Beneficiary title="Directory" />
        <View className="mt-10">
          <View>
            <Input
              type="text"
              placeholder="Phone number"
              onChangeText={(text) => setPhoneNumber(text)}
              value={phoneNumber as string}
            />
          </View>
          <View className="mt-5">
            <Text className="text-sm font-poppinsemibold text-gray-500">
              Choose amount
            </Text>
            <View className=" mt-5">
              <View className="flex-row flex-wrap justify-between px-2">
                {amounts.map((amount, index) => {
                  const isSelected = selected === index;

                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setSelected(index);
                        setInputAmount(amount.toString());
                      }}
                      className={`border border-gray-300 p-5 rounded-2xl mb-3 ${
                        isSelected ? "bg-primary" : "bg-white"
                      }`}
                      style={{
                        width: "30%",
                        shadowColor: "#00000091",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 5,
                        elevation: 5,
                      }}
                    >
                      <Text
                        className={`text-md font-poppinsemibold text-center ${
                          isSelected ? "text-white" : "text-black"
                        }`}
                      >
                        ${amount}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View className="mt-5 border border-gray-300 p-5 rounded-2xl flex-row">
                <Text className="text-md font-poppinsemibold text-gray-600">
                  $
                </Text>
                <TextInput
                  className="flex-1"
                  placeholder="0.00"
                  keyboardType="numeric"
                  value={inputAmount}
                  onChangeText={setInputAmount}
                />
              </View>
              <View className="mt-10">
                <Button
                  text="Transfer"
                  disabled
                  onPress={() =>
                    router.replace("/pages/dashboard/withdraw/successful")
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </PlatformView>
  );
}
