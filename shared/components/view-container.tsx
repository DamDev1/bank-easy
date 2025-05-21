// PlatformView.tsx
import React from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StatusBarStyle,
  View,
  ViewProps,
} from "react-native";

interface PlatformViewProps extends ViewProps {
  children: React.ReactNode;
  statusBarStyle?: StatusBarStyle;
  disableSafeArea?: boolean;
  scrollable?: boolean;
}

const PlatformView: React.FC<PlatformViewProps> = ({
  children,
  className,
  statusBarStyle = "dark-content",
  disableSafeArea = false,
  scrollable = false,
  ...rest
}) => {
  return (
    <>
      {scrollable ? (
        <ScrollView className={`flex-1 ${className}`} {...rest}>
          <StatusBar barStyle={statusBarStyle} />
          {disableSafeArea ? (
            children
          ) : Platform.OS === "android" ? (
            <SafeAreaView style={{ flex: 1 }} className="pt-16">{children}</SafeAreaView>
          ) : (
            <View style={{ flex: 1 }} className="pt-20">{children}</View>
          )}
        </ScrollView>
      ) : (
        <View className={`flex-1 ${className}`} {...rest}>
          <StatusBar barStyle={statusBarStyle} />
          {disableSafeArea ? (
            children
          ) : Platform.OS === "android" ? (
            <SafeAreaView style={{ flex: 1 }} className="pt-16">{children}</SafeAreaView>
          ) : (
           <View style={{ flex: 1 }} className="pt-20">{children}</View>
          )}
        </View>
      )}
    </>
  );
};

export default PlatformView;
