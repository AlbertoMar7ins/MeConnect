import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MCHeader from "../../../components/MCHeader";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <MCHeader title={"Perfil"}>
        <TouchableOpacity>
          <Ionicons
            name="search"
            size={26}
            color={"#fff"}
            style={styles.icone1}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={26} color={"#fff"} />
        </TouchableOpacity>
      </MCHeader>
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
