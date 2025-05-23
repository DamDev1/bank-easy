import TabHeader from "@/shared/components/custom/TabHeader";
import { Stack } from "expo-router";
import React from "react";

export default function PagesLayout() {
  return (
    <Stack
      screenOptions={{
        header(props) {
          return <TabHeader name={props.options.title} color="light" />;
        },
      }}
    >
      <Stack.Screen name="search/interest" options={{ title: "Interest rate" }}/>
    </Stack>
  );
}
