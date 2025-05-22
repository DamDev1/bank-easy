import TabHeader from "@/shared/components/custom/TabHeader";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="dashboard/index" options={{ title: "Dashboard", headerShown: false }} />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          header: ({ options }) => <TabHeader name={options.title} color="light" />,
        }}
      />
    </Tabs>
  );
}
