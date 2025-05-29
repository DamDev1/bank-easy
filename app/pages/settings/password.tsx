import PlatformView from "@/shared/components/view-container";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import React from "react";
import { View } from "react-native";

export default function Password() {
  return (
    <PlatformView className="bg-secondary" scrollable>
      <View className="flex-1 p-5 -mt-10">
        <View className="gap-20">
          <View className="gap-8">
            <Input type="password" placeholder="Old password" text="Recent password"/>
            <Input type="password" placeholder="New password" text="New password"/>
            <Input type="password" placeholder="Confirm password" text="Confirm password" />
          </View>
          <Button text="Change password" disabled/>
        </View>
      </View>
    </PlatformView>
  );
}
