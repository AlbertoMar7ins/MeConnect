import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MCHeader from "../../../components/MCHeader";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Perf() {
  return (
    <View style={styles.container}>
      <Text>Nenhum perfil encontrado</Text>
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
