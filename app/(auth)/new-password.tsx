import PlatformView from "@/shared/components/view-container";
import Back from "@/shared/ui/back";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import Label from "@/shared/ui/label";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";

export default function NewPassword() {
  const [isDisabled, setDisabled] = useState(true);
  const [password, setPassword] = useState<string | number>("");
  const [confirmPassword, setConfirmPassword] = useState<string | number>("");

  useEffect(() => {
    if (password !== "" && confirmPassword !== "") setDisabled(false);
    else setDisabled(true);
  }, [password, confirmPassword]);
  return (
    <PlatformView className="bg-secondary">
      <View className="flex-1">
        <Back name="Change password" color="light" />

        <View className="bg-secondary border border-gray-200 rounded-[30px] p-5 py-8 m-5 gap-5">
          <View className="gap-3">
            <Label
              text="Type your new password"
              className="text-gray-400 font-poppinsemibold text-[12px]"
            />
            <Input type="password" onChangeText={(text) => setPassword(text)}/>
          </View>
          <View className="gap-3">
            <Label
              text="Type your new password"
              className="text-gray-400 font-poppinsemibold text-[12px]"
            />
            <Input type="password" onChangeText={(text) => setConfirmPassword(text)}/>
          </View>
          <View>
            <Button text="Change password" disabled={isDisabled} />
          </View>
        </View>
        <TouchableOpacity onPress={() => router.back()}>
          <Label
            text="Change your email?"
            className="text-primary font-poppinsemibold text-center"
          />
        </TouchableOpacity>
      </View>
    </PlatformView>
  );
}
