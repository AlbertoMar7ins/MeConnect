import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import pallet from "../../pallet";

import Prin from "./Principal";
import Post from "./Post";
import Prods from "./Produtos";
import Routes from "../InitialPages/bottomTab";

const Tab = createMaterialTopTabNavigator();

export default function TopBar() {
  return (
    <Tab.Navigator
      activeColor="#F5803E"
      inactiveColor="#999"
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
      {/* <Tab.Screen
        name="Voltar"
        component={Routes}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="arrow-back-outline" size={25} color={color} />
          ),
        }}
      /> */}
      

      <Tab.Screen name="Principal" component={Prin} />

      <Tab.Screen name="Posts" component={Post} />

      <Tab.Screen name="Produtos" component={Prods} />
    </Tab.Navigator>
  );
}
