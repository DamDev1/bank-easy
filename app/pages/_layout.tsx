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
      <Stack.Screen
        name="search/interest"
        options={{ title: "Interest rate" }}
      />
      <Stack.Screen
        name="search/exchange-rate"
        options={{ title: "Exchange rate" }}
      />
      <Stack.Screen name="search/exchange" options={{ title: "Exchange" }} />
      <Stack.Screen name="search/branch" options={{ title: "Branch" }} />

      {/* Dashaboard stacks */}
      <Stack.Screen
        name="dashboard/transfer/transfer"
        options={{ title: "Transfer" }}
      />
      <Stack.Screen
        name="dashboard/transfer/confirm"
        options={{ title: "Confirm" }}
      />
      <Stack.Screen
        name="dashboard/transfer/successful"
        options={{ title: "Successful" }}
      />
    </Stack>
  );
}
