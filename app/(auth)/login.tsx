import PlatformView from "@/shared/components/view-container";
import Back from "@/shared/ui/back";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  return (
    <PlatformView className="bg-primary" scrollable={true}>
      <View className="flex-1">
        <Back name="Sign in" />
        <View className="flex bg-secondary mt-6 p-8 rounded-t-[40px] h-[100%]">
          <View>
            <Text className="text-primary text-2xl font-poppinsemibold">
              Welcome Back.
            </Text>
            <Text className="text-black text-sm font-poppinsmedium mt-2">
              Hello there, please sign in to continue
            </Text>
          </View>
          <View className="flex items-center justify-centers mt-10">
            <Image source={require("../../assets/images/Illustration.png")} />
          </View>
          <View className="mt-10">
            <View>
              <Input type="email" placeholder="Email" />
            </View>
            <View className="mt-5">
              <Input type="password" placeholder="Password" />
            </View>
            <TouchableOpacity className="mt-4" onPress={() => router.push("/(auth)/forgot-password")}>
              <Text className="text-right text-gray-400 font-poppinsemibold">
                Forgot your password?
              </Text>
            </TouchableOpacity>
            <View className="mt-10">
              <Button disabled={true} text="Sign in" />
            </View>
            <View className="flex items-center justify-center mt-8">
              <MaterialCommunityIcons
                name="fingerprint"
                size={60}
                color="black"
              />
            </View>
          </View>
          <View className="mt-10">
            <Text className="text-black text-sm font-poppinsmedium text-center">
              Don't have an account?{" "}
              <Text
                className="text-primary font-poppinsemibold"
                onPress={() => {
                  router.push("/signup");
                }}
              >
                Sign up
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </PlatformView>
  );
}
