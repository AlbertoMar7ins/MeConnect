import React from "react";
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView , StatusBar } from "react-native";
import MCHeader from "../../../components/MCHeader";
import Ionicons from "react-native-vector-icons/Ionicons";
import MCButton from "../../../components/MCButton";

const DATA = [
  {
    id: "1",
    title: "Santo Calçado",
    desc: "Melhor loja e atacado de roupas e sapatos da cidade",
  },
];

export default function Prin() {
  const Item = ({ desc, title }) => (
    <SafeAreaView>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
      </SafeAreaView>
  );
  const renderItem = ({ item }) => <Item title={item.title} desc={item.desc} />;
  return  (
    <View style={styles.container}>
      <Image style={styles.banner} source={require("@expo/img/sapatos.jpg")} />
      <Image style={styles.logo} source={require("@expo/img/tobo.jpg")} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    <MCButton style={styles.btn} children={"Conectar"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
  },
  banner: {
    width: "100%",
    height: "25%",
    marginBottom: -100,
    borderWidth: 2,
    borderColor: '#F9F9F9',
  },
  logo: {
    borderWidth: 2,
    borderColor: '#F9F9F9',
    width: "40%",
    height: "20%",
    marginBottom:5,
    borderRadius: 100,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: "bold",
  },
  desc: {
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
});
