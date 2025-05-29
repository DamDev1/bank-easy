import StackCards from "@/shared/components/custom/StackCards";
import PlatformView from "@/shared/components/view-container";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Transactions() {
  return (
    <PlatformView className="bg-primary">
      <View className="flex-1 bg-secondary h-[100vh] rounded-t-[40px] mt-10">
        <View className="-m-36 p-5 pb-0">
          <StackCards />
        </View>
        <View className="mt-32 flex-1">
          <PlatformView className=" p-5" scrollable>
            <View className="-mt-10 gap-10">
              <View className="border-b-2 pb-4 border-gray-200">
                <Text className="text-gray-500 text-[12px] font-poppinsemibold">
                  Today
                </Text>
                <View className="flex flex-row justify-between mt-4 items-center">
                  <View className="flex items-center flex-row">
                    <View className="mr-2 w-[50px]  h-[50px] overflow-hidden justify-center items-center">
                      <Image
                        source={require("../../../../assets/images/icons/Icon.png")}
                        className="w-[100px] h-[100px] mt-4"
                      />
                    </View>
                    <View className="gap-1">
                      <Text className="text-gray-700 text-[16px] font-poppinsemibold">
                        Water Bill
                      </Text>
                      <Text className="text-gray-500 text-[10px] font-poppinsemibold">
                        Unsuccessful
                      </Text>
                    </View>
                  </View>
                  <Text className="text-red-500 text-[16px] font-poppinsemibold">
                    -$100
                  </Text>
                </View>
              </View>

              <View>
                <Text className="text-gray-500 text-[12px] font-poppinsemibold">
                  Yesterday
                </Text>
                <View className="gap-4">
                  <View className="flex flex-row justify-between mt-4 items-center border-b-2 pb-4 border-gray-200">
                    <View className="flex items-center flex-row">
                      <View className="mr-2 w-[50px]  h-[50px] overflow-hidden justify-center items-center">
                        <Image
                          source={require("../../../../assets/images/icons/Icon-3.png")}
                          className="w-[100px] h-[100px] mt-4"
                        />
                      </View>
                      <View className="gap-1">
                        <Text className="text-gray-700 text-[16px] font-poppinsemibold">
                          Income: Salary Oct
                        </Text>
                        <Text className="text-gray-500 text-[10px] font-poppinsemibold">
                          successful
                        </Text>
                      </View>
                    </View>
                    <Text className="text-primary text-[16px] font-poppinsemibold">
                      +$5,000
                    </Text>
                  </View>

                  <View className="flex flex-row justify-between mt-4 items-center border-b-2 pb-4 border-gray-200">
                    <View className="flex items-center flex-row">
                      <View className="mr-2 w-[50px]  h-[50px] overflow-hidden justify-center items-center">
                        <Image
                          source={require("../../../../assets/images/icons/Icon-1.png")}
                          className="w-[100px] h-[100px] mt-4"
                        />
                      </View>
                      <View className="gap-1">
                        <Text className="text-gray-700 text-[16px] font-poppinsemibold">
                          Electric Bill
                        </Text>
                        <Text className="text-gray-500 text-[10px] font-poppinsemibold">
                          Unsuccessful
                        </Text>
                      </View>
                    </View>
                    <Text className="text-red-500 text-[16px] font-poppinsemibold">
                      -$500
                    </Text>
                  </View>

                  <View className="flex flex-row justify-between mt-4 items-center border-b-2 pb-4 border-gray-200">
                    <View className="flex items-center flex-row">
                      <View className="mr-2 w-[50px]  h-[50px] overflow-hidden justify-center items-center">
                        <Image
                          source={require("../../../../assets/images/icons/Icon-5.png")}
                          className="w-[100px] h-[100px] mt-4"
                        />
                      </View>
                      <View className="gap-1">
                        <Text className="text-gray-700 text-[16px] font-poppinsemibold">
                          Income : Jane transfers
                        </Text>
                        <Text className="text-gray-500 text-[10px] font-poppinsemibold">
                          Successful
                        </Text>
                      </View>
                    </View>
                    <Text className="text-primary text-[16px] font-poppinsemibold">
                      +$1,000
                    </Text>
                  </View>

                  <View className="flex flex-row justify-between mt-4 items-center border-b-2 pb-4 border-gray-200">
                    <View className="flex items-center flex-row">
                      <View className="mr-2 w-[50px]  h-[50px] overflow-hidden justify-center items-center">
                        <Image
                          source={require("../../../../assets/images/icons/Icon-2.png")}
                          className="w-[100px] h-[100px] mt-4"
                        />
                      </View>
                      <View className="gap-1">
                        <Text className="text-gray-700 text-[16px] font-poppinsemibold">
                          Internet Bill
                        </Text>
                        <Text className="text-gray-500 text-[10px] font-poppinsemibold">
                          Successful
                        </Text>
                      </View>
                    </View>
                    <Text className="text-red-500 text-[16px] font-poppinsemibold">
                      +$10
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity
              className="items-center justify-between mt-10 mb-10"
              onPress={() => router.push("/pages/dashboard/transaction-report/all-transaction")}
            >
              <Text className="text-primary underline text-center">See all</Text>
            </TouchableOpacity>
          </PlatformView>
        </View>
      </View>
    </PlatformView>
  );
}
