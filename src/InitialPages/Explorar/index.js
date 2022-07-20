import React from "react";
import { View, StyleSheet } from "react-native";
import "react-native-gesture-handler";

import TopSearch  from "../../../components/TopSearch";
import MyTabs from "../topBar";

export default function Exploration() {
  return (
    <View style={styles.container}>
      <TopSearch  />
      <MyTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
