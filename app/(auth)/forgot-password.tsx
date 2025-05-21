import PlatformView from "@/shared/components/view-container";
import Back from "@/shared/ui/back";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import Label from "@/shared/ui/label";
import React, { Fragment, useEffect, useState } from "react";
import { View } from "react-native";

export default function ForgotPassword() {
  const [isDisabled, setDisabled] = useState(true);
  const [email, setEmail] = useState<string | number>("");
  const [code, setCode] = useState<string | number>("");
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (email !== "") setDisabled(false);
    else setDisabled(true);
  }, [email]);

  useEffect(() => {
    if (code !== "") setDisabled(false);
    else setDisabled(true);
  }, [code]);
  return (
    <PlatformView className="bg-secondary">
      <View className="flex-1">
        <Back name="Forgot password" color="light" />

        <View className="bg-secondary border border-gray-200 rounded-[30px] p-5 py-8 m-5">
          {step === 1 ? (
            <Fragment>
              <View className="gap-3">
                <Label
                  text="Type your email"
                  className="text-gray-400 font-poppinsemibold text-[12px]"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <Label
                text="We will send you an email to reset your password"
                className="text-gray-400 font-poppinsemibold text-[12px] mt-5"
              />
              <View className="mt-5">
                <Button
                  text="Send"
                  disabled={isDisabled}
                  onPress={() => setStep(2)}
                />
              </View>
            </Fragment>
          ) : (
            <Fragment>
              <View className="gap-3">
                <Label
                  text="Type your email"
                  className="text-gray-400 font-poppinsemibold text-[12px]"
                />
                <View className="flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Code"
                    keyboardType="numeric"
                    onChangeText={(val) => setCode(val)}
                    className="flex-1"
                  />
                  <Button text="Resend" onPress={() => setStep(2)} />
                </View>
              </View>
              <Label
                text={`An email to reset your password has been sent to`}
                className="text-gray-400 font-poppinsemibold text-[12px] mt-5"
              />
              <Label
                text={`${email}`}
                className="text-primary font-poppinsemibold text-[12px]"
              />
              <Label
                text={`This code will expired 10 minutes after this message. If you don't get a message.`}
                className="text-gray-400 font-poppinsemibold text-[12px] mt-5"
              />
              <View className="mt-5">
                <Button text="Change password" disabled={isDisabled} />
              </View>
            </Fragment>
          )}
        </View>
      </View>
    </PlatformView>
  );
}
