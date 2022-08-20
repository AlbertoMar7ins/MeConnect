import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import MCButton from "../../../components/MCButton";
import { Api, Colors } from "meconnect-sdk";



export default function Prin() {
  const [vendor, setVendor] = useState({})
  useEffect(async ()=> {
    await Api.token.set('1|jnA1wBtsiyauJOeWOGY1QfuMuoEXtRnIIDX63MPQ')
    const vendor = await Api.db.vendors.get(1)
    setVendor(vendor.data)
    console.log(vendor)
  },[])
  return (
    <SafeAreaView style={styles.container}>
      {/* Fotos */}
      {/* <Image style={styles.banner} source={require("@expo/img/sapatos.jpg")} /> */}
      <Image style={styles.banner} source={{uri: vendor.banner_url}} />
      {/* <Image style={styles.logo} source={require("@expo/img/tobo.jpg")} /> */}
      <Image style={styles.logo} source={{uri: vendor.photo_url}} />

      {/* Cabeçalho */}
      {/* <Text style={styles.titulo}>Santo Calçados</Text> */}
      <Text style={styles.titulo}>{vendor.name}</Text>
      {/* <Text style={styles.desc}>
        Melhor loja e atacado de roupas e sapatos da cidade
      </Text> */}
      <Text style={styles.desc} >{vendor.description}</Text>

      {/* Conectar */}
      <MCButton style={styles.btn} children={"Conectar"} />
      <Text style={styles.ttt}>Conectados</Text>
      <Text style={styles.tt2}>{vendor.customers_connected}</Text>


      {/* CNPJ */}
      {/* <Text style={styles.cnpj}>CNPJ: 119.648.123/1111-60</Text> */}
      <Text style={styles.cnpj}>CNPJ: {vendor.cnpj}</Text>

      {/* Infos */}
      <Text allowFontScaling={false} style={styles.soci}>
        Redes Sociais:
      </Text>
      <Text style={styles.soci2}>
        Facebook: KidsPlay{"\n"}Instagram: @kidsplaybr{"\n"}Linkedin:@kidsplay{"\n"} Email: {vendor.email}
      </Text>
      <Text allowFontScaling={false} style={styles.soci}>
        Horário de Funcionamento:
      </Text>
      <Text style={styles.soci3}>
        Das 7:00 até 12:00{"\n"}Das 13:00 até 18:00
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    alignItems: "center",
    color: Colors.Black,
  },
  ttt: {
    backgroundColor: "#DDDDDD",
    textAlign: "center",
    width: 200,
    fontSize: 15,
    fontWeight: "bold",
    padding: 7,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: "5%",
  },
  tt2: {
    width: 200,
    padding: 7,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 8,
    borderWidth: 1,
    borderTopWidth: 0,
  },
  banner: {
    width: "100%",
    height: "23%",
    marginBottom: -100,
  },
  logo: {
    borderWidth: 2,
    borderColor: "#ffffff",
    width: 180,
    height: 180,
    marginBottom: 5,
    borderRadius: 110,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "1%",
  },
  desc: {
    textAlign: "center",
    fontSize: 17,
    marginBottom: "2%",
    marginLeft: 20,
    marginRight: 20,
  },
  cnpj: {
    borderColor: "#EEEEEE",
    borderWidth: 7,
    color: Colors.Black,
    width: 500,
    height: 60,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "4%",
  },
  soci: {
    fontSize: 25,
    fontWeight: "bold",
    borderColor: "#EEEEEE",
    color: Colors.Black,
    borderWidth: 10,
    paddingTop: 8,
    width: 460,
    textAlign: "center",
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  soci2: {
    fontSize: 17,
    textAlign: "center",
    color: Colors.Black,
    borderColor: "#EEEEEE",
    borderWidth: 10,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: 460,
  },
  soci3: {
    fontSize: 17,
    textAlign: "center",
    color: Colors.Black,
    borderColor: "#EEEEEE",
    borderWidth: 10,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: 460,
    marginBottom: 200,
  },
});
