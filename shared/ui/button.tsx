import React, { Fragment } from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Button({
  text,
  disabled,
  onPress
}: {
  text: string;
  disabled?: boolean;
  onPress?: () => void;
}) {
  return (
    <Fragment>
      {disabled ? (
        <TouchableOpacity
          disabled={disabled}
          className="bg-blue-800/50 p-5 rounded-2xl"
        >
          <Text className="text-white/50 text-center font-poppinsemibold">{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity className="bg-[#3629B7] p-5 rounded-2xl"  onPress={onPress}>
          <Text className="text-center text-white font-poppinsemibold">{text}</Text>
        </TouchableOpacity>
      )}
    </Fragment>
  );
}
