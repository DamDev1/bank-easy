import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

interface BackButtonProps {
  className?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  name?: string;
  color?: 'dark' | 'light' | string; // Allow custom colors
  iconSize?: number;
  iconName?: string; // Customizable icon
  onPress?: () => void; // Custom press handler
  disabled?: boolean;
  testID?: string; // For testing
}

export default function Back({
  className = "",
  style,
  textStyle,
  name,
  color = 'dark',
  iconSize = 24,
  onPress,
  disabled = false,
  testID,
}: BackButtonProps) {
  // Determine icon color
  const iconColor = 
    color === 'dark' ? 'white' : 
    color === 'light' ? 'black' : 
    color; // Allow custom color strings

  // Default press action
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.back();
    }
  };

  return (
    <TouchableOpacity
      className={`flex-row gap-2 px-5 items-center ${className}`}
      style={[disabled && { opacity: 0.5 }, style]}
      onPress={() => router.push('/(auth)/login')}
      disabled={disabled}
      activeOpacity={0.7}
      testID={testID}
    >
      <Ionicons 
        name={'chevron-back'} 
        size={iconSize} 
        color={iconColor} 
      />
      <Text 
        className="text-xl font-poppinsemibold"
        style={[{ color: iconColor }, textStyle]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}