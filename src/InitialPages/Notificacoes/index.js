import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MCHeader from "../../../components/MCHeader";
import Ionicons from "react-native-vector-icons/Ionicons";
import Noti from "../../../components/CardNoti";
import OptionsMenu from "react-native-option-menu";
const myIcon = <Ionicons name="ellipsis-vertical" size={26} color="#fff" />;

export default function Notification() {
  return (
    <View style={styles.container}>
      <MCHeader title={"Notificações"}>
        <TouchableOpacity>
          <Ionicons
            name="search"
            size={26}
            color={"#fff"}
            style={styles.icone1}
          />
        </TouchableOpacity>
        <OptionsMenu
          customButton={myIcon}
          buttonStyle={{
            width: 32,
            height: 8,
            margin: 7.5,
            resizeMode: "contain",
          }}
          destructiveIndex={1}
          options={["Edit", "Delete", "Cancel"]}
        />
      </MCHeader>
      <Noti />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icone1: {
    marginRight: 15,
  },
});
