import Feather from "@expo/vector-icons/Feather";
import React, { useEffect, useState } from "react";
import {
  KeyboardTypeOptions,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import Label from "./label";

type InputType = "email" | "text" | "password" | "numeric";

interface InputProps {
  type: InputType;
  className?: string;
  containerStyle?: ViewStyle;
  text?: string;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  isPassword?: boolean;
  secureText?: boolean;
  onChangeText?: (text: string | number) => void;
  value?: string;
  accessibilityLabel?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

export default function Input({
  type,
  className = "",
  containerStyle,
  value,
  text,
  keyboardType,
  placeholder,
  onChangeText,
  accessibilityLabel,
  autoCapitalize = "none",
}: InputProps) {
  const isPassword = type === "password";
  const isNumeric = type === "numeric";
  const [secureText, setSecureText] = useState(isPassword);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (value === undefined || value === null) return;

    if (isNumeric) {
      const num = value.toString().replace(/\D/g, "") || "";
      setInputValue(formatNumber(num));
    } else {
      setInputValue(value.toString());
    }
  }, [value, isNumeric]);

  const formatNumber = (val: string) => {
    return val.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleTextChange = (text: string) => {
    if (isNumeric) {
      const raw = text.replace(/\D/g, "");
      const formatted = formatNumber(raw);
      setInputValue(formatted);
      const numeric = raw === "" ? 0 : Number(raw);
      onChangeText?.(numeric);
    } else {
      setInputValue(text);
      onChangeText?.(text);
    }
  };

  const getKeyboardType = (): KeyboardTypeOptions => {
    if (keyboardType) return keyboardType;
    if (isNumeric) return "numeric";
    if (type === "email") return "email-address";
    return "default";
  };

  return (
    <View style={containerStyle} className={className}>
      {text && <Label text={text} />}
      <View className="border border-gray-300 p-5 px-3 rounded-2xl flex flex-row items-center justify-between">
        <TextInput
          placeholder={placeholder}
          keyboardType={getKeyboardType()}
          secureTextEntry={secureText}
          value={inputValue}
          onChangeText={handleTextChange}
          accessibilityLabel={accessibilityLabel || placeholder}
          autoCapitalize={autoCapitalize}
          className="flex-1 placeholder:text-gray-400"
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setSecureText((prev) => !prev)}
            accessibilityLabel={secureText ? "Show password" : "Hide password"}
          >
            <Feather
              name={secureText ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
