import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface BackButtonProps {
  className?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  name?: string;
  color?: "dark" | "light" | string; // Allow custom colors
  iconSize?: number;
  iconName?: string; // Customizable icon
  onPress?: () => void; // Custom press handler
  disabled?: boolean;
  testID?: string; // For testing
}

export default function TabHeader({
  className = "",
  style,
  textStyle,
  name,
  color = "dark",
  iconSize = 24,
  disabled = false,
  testID,
}: BackButtonProps) {
  // Determine icon color
  const iconColor =
    color === "dark" ? "white" : color === "light" ? "black" : color; // Allow custom color strings

  return (
    <SafeAreaView className="bg-secondary">
      <TouchableOpacity
        className={`flex-row gap-2 px-5 items-center ${className} my-2.5 ${Platform.OS === "android" ? "pt-10 pb-5" : ""}`}
        style={[disabled && { opacity: 0.5 }, style]}
        onPress={() => router.back()}
        disabled={disabled}
        activeOpacity={0.7}
        testID={testID}
      >
        <Ionicons name={"chevron-back"} size={iconSize} color={iconColor} />
        <Text
          className="text-xl font-poppinsemibold"
          style={[{ color: iconColor }, textStyle]}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
