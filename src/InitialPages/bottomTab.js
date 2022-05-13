import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import "react-native-gesture-handler";
import pallet from "../../pallet";
import Ionicons from "react-native-vector-icons/Ionicons";

import Conection from "./Conexoes";
import Exploration from "./Explorar";
import Notification from "./Notificacoes";

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Exploração"
      activeColor="#F5803E"
      inactiveColor="#999"
      barStyle={{
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        borderTopColor: "transparent",
        position: "absolute",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Tab.Screen
        name="Conexões"
        component={Conection}
        options={{
          color: pallet.primaryColor,
          tabBarIcon: ({ color }) => (
            <Ionicons name="analytics" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Explorar"
        component={Exploration}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Notificações"
        component={Notification}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
