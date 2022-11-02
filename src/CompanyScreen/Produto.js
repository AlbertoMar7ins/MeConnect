import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MCButton from "../../components/MCButton";
import MCHeader from "../../components/MCHeader";

export default function Produto() {
  return (
    <View style={styles.container}>
      <MCHeader>
        <TouchableOpacity>
          <Ionicons style={styles.icone1} name="arrow-back-outline" size={35} color={"#fff"} />
        </TouchableOpacity>
      </MCHeader>
      <Image style={styles.prod} source={require('@expo/img/teste.png')} />
      <Text style={styles.nome}>Produto para teste</Text>
      <Text style={styles.desc}>Produto feito para realizar teste em aplicativos desenvolvidos para publicar produtos na mundo da Internet</Text>
      <MCButton children={"Ver produto"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    flex: 1,
  },
  icone1: {
    marginRight: '92%'
  },
  prod: {
    alignSelf: 'center',
    marginTop: '10%',
    borderRadius:10,
    width:350,
    height:350,
  },
  nome: {
    fontSize: 30,
    marginTop: '2%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    width: '90%',
    marginTop: '5%',
    marginBottom: '8%',
    textAlign: 'center',
    alignSelf: 'center',
  },   
});
