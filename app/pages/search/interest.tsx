import PlatformView from "@/shared/components/view-container";
import { Text, View } from "react-native";

export default function InterestGrid() {
  return (
    <PlatformView className="bg-secondary flex-1">
      <View className="-mt-10 px-5">
        {/* Using flex instead of grid for React Native */}
        <View className="gap-5">
          {/* First row with two columns */}
          <View className="flex-row justify-between">
            <Text className="text-base font-poppinsemibold w-[60%] text-gray-500">
              Interest kind
            </Text>
            <Text className="text-base font-poppinsemibold text-gray-500">
              Deposit
            </Text>
            <Text className="text-base font-poppinsemibold text-gray-500">
              Rate
            </Text>
          </View>
          <View className="mt-3">
            <View className="flex-row justify-between pb-5 border-b border-gray-200">
              <Text className="text-gray-600 w-[60%] text-base font-poppinsemibold ">
                Individual customers
              </Text>
              <Text className="text-gray-500 text-base font-poppinsemibold ">
                1m
              </Text>
              <Text className="text-primary text-base font-poppinsemibold ">
                4.5%
              </Text>
            </View>

             <View className="flex-row justify-between mt-5">
              <Text className="text-gray-600 w-[60%] text-base font-poppinsemibold ">
                Corporate customers
              </Text>
              <Text className="text-gray-500 text-base font-poppinsemibold text-center">
                2m
              </Text>
              <Text className="text-primary text-base font-poppinsemibold text-center">
                5.50%
              </Text>
            </View>
          </View>
        </View>
      </View>
    </PlatformView>
  );
}
