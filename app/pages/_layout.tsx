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
      <Stack.Screen
        name="dashboard/transaction-report/transactions"
        options={{
          title: "Transaction report",
          header(props) {
            return <TabHeader name={props.options.title} color="dark" />;
          },
        }}
      />

      <Stack.Screen
        name="dashboard/transaction-report/all-transaction"
        options={{
          title: "Transaction report",
          header(props) {
            return <TabHeader name={props.options.title} color="light" />;
          },
        }}
      />

      <Stack.Screen
        name="dashboard/account-card/account-card"
        options={{
          title: "Account and Card",
        }}
      />

      <Stack.Screen
        name="dashboard/account-card/card"
        options={{
          title: "Card",
        }}
      />

      {/* Messsage stack */}
      <Stack.Screen name="message/[id]/chatbox" />

      {/* App Information */}
      <Stack.Screen
        name="settings/app-information"
        options={{ title: "App Information" }}
      />
      <Stack.Screen
        name="settings/password"
        options={{ title: "Change Password" }}
      />

      {/* withdraw */}
      <Stack.Screen
        name="dashboard/withdraw/withdraw"
        options={{ title: "Withdraw" }}
      />
      <Stack.Screen
        name="dashboard/withdraw/successful"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
