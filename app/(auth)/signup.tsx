import PlatformView from "@/shared/components/view-container";
import Back from "@/shared/ui/back";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";

export default function Signup() {
  const [isChecked, setChecked] = useState(false);
  return (
    <PlatformView className="bg-primary" scrollable={true}>
      <View>
       <Back name="Sign up" />
        <View className="flex bg-secondary mt-6 p-8 rounded-t-[40px] h-[100%]">
          <View>
            <Text className="text-primary text-2xl font-poppinsemibold">
              Welcome to us.
            </Text>
            <Text className="text-black text-sm font-poppinsmedium mt-2">
              Hello there, please sign up to continue
            </Text>
          </View>
          <View className="flex items-center justify-centers mt-10">
            <Image
              source={require("../../assets/images/Illustration (1).png")}
            />
          </View>
          <View className="mt-10">
            <View>
              <Input type="text" placeholder="Name" />
            </View>
            <View className="mt-5">
              <Input type="email" placeholder="Email" />
            </View>
            <View className="mt-5">
              <Input type="password" placeholder="Password" />
            </View>
            <View className="flex-row items-center gap-3 mt-5">
              <Checkbox value={isChecked} onValueChange={setChecked} />
              <View className=" flex-wrap">
                <Text className="text-gray-400 text-sm font-poppinsmedium flex-col flex-wraps">
                  By creating an account you agree to our
                </Text>
                <Text
                  className="text-primary text-sm font-poppinsemibold"
                  onPress={() => {
                    /* Handle terms press */
                  }}
                >
                  Terms & Conditions
                </Text>
              </View>
            </View>
            <View className="mt-10">
              <Button disabled={true} text="Sign up" />
            </View>
          </View>
          <View className="mt-10">
            <Text className="text-black text-sm font-poppinsmedium text-center">
              Already have an account?{" "}
              <Text
                className="text-primary font-poppinsemibold"
                onPress={() => {
                  router.push("/login");
                }}
              >
                Sign in
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </PlatformView>
  );
}
