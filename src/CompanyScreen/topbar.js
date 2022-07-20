import React from "react";
import { View, StyleSheet, TextInput, Text, StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import "react-native-gesture-handler";
import pallet from "../../pallet";

import Prin from "./Principal";
import Post from "./Post";
import Prods from "./Produtos";

const Tab = createMaterialTopTabNavigator();

export default function TopBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: pallet.primaryColor,
          marginTop: StatusBar.currentHeight,
          padding: 3,
        },

        tabBarActiveTintColor: "#fff",

        tabBarIndicatorStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen name="Principal" component={Prin} />

      <Tab.Screen name="Posts" component={Post} />

      <Tab.Screen name="Produtos" component={Prods} />
    </Tab.Navigator>
  );
}
