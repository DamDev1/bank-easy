import PlatformView from "@/shared/components/view-container";
import SelectPopupModal from "@/shared/pages-components/search/branch/select-modal";
import Button from "@/shared/ui/button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  label: string;
  value: string;
};
export default function Exchange() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Props | null>(null);

  const options = [
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
    { label: "GBP", value: "GBP" },
    { label: "INR", value: "INR" },
    { label: "JPY", value: "JPY" },
    { label: "CNY", value: "CNY" },
    { label: "KRW", value: "KRW" },
  ];

  const handleSelect = (item: any) => {
    setSelectedOption(item);
  };

  return (
    <PlatformView className="bg-secondary flex-1" scrollable>
      <SelectPopupModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        items={options}
        onSelect={handleSelect}
        title="Select the currency"
        selectedValue={selectedOption?.value}
      />
      <View>
        <View className="flex items-center justify-center">
          <Image
            source={require("../../../assets/images/Illustration 5.png")}
          />
        </View>
      </View>
      <View className="p-5">
        <View>
          <Text className="text-base font-poppinsemibold">From</Text>
          <View className="border border-gray-200 rounded-xl p-3 mt-3 flex-row justify-between">
            <TextInput
              keyboardType="numeric"
              placeholder="0.00"
              className="flex-1 border-r-2 border-gray-200 mr-3 text-md"
            />
            <TouchableOpacity
              onPress={() => setIsModalVisible(true)}
              className="flex-row justify-center items-center gap-3"
            >
              <Text className="text-gray-500">
                {selectedOption ? selectedOption.label : "USD"}
              </Text>
              <View className="">
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color="gray"
                />
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="gray"
                  className="-mt-3"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-5">
          <Image
            source={require("../../../assets/images/icons/swap.png")}
            className="mx-auto"
          />
        </View>

        <View>
          <Text className="text-base font-poppinsemibold">To</Text>
          <View className="border border-gray-200 rounded-xl p-3 mt-3 flex-row justify-between">
            <TextInput
              keyboardType="numeric"
              placeholder="0.00"
              className="flex-1 border-r-2 border-gray-200 mr-3 text-md"
            />
            <TouchableOpacity
              onPress={() => setIsModalVisible(true)}
              className="flex-row justify-center items-center gap-3"
            >
              <Text className="text-gray-500">
                {selectedOption ? selectedOption.label : "USD"}
              </Text>
              <View className="">
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color="gray"
                />
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="gray"
                  className="-mt-3"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-3 flex-row justify-between">
          <Text className="text-primary">Currency rate</Text>
          <Text className="text-gray-500">1.00 USD = 1.00 USD</Text>
        </View>
        <View className="mt-10">
          <Button text="Exchange" />
        </View>
      </View>
    </PlatformView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFC107",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
