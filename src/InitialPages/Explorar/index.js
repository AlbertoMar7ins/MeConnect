import React from "react";
import { View, StyleSheet } from "react-native";
import "react-native-gesture-handler";

import MyComponent from "../../../components/Search";
import MyTabs from "../topBar";

export default function Exploration() {
  return (
    <View style={styles.container}>
      <MyComponent />
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
