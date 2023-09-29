import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";

const stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Account"
        component={Account}
        options={{ title: "Mi cuenta" }}
      />
    </stack.Navigator>
  );
}
