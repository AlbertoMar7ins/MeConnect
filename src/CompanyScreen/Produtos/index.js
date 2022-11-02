import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Searchbar } from "react-native-paper";
import pallet from "../../../pallet";
import { Api } from "meconnect-sdk";
// const DATA = [
//   {
//     id: "1",
//     img: "https://images.unsplash.com/photo-1607326957431-29d25d2b386f",
//     desc: "Descrição do produto",
//     val: "R$20,00",
//   },
//   {
//     id: "2",
//     img: "@expo/img/tobo.jpg",
//     desc: "Descrição do produto",
//     val: "R$20,00",
//   },
//   {
//     id: "3",
//     img: "KidsPlay",
//     desc: "Descrição do produto",
//     val: "R$20,00",
//   },
//   {
//     id: "4",
//     img: "Leo Eventos",
//     desc: "Descrição do produto",
//     val: "R$20,00",
//   },
// ];

// const DATA2 = [
//   {
//     id: "1",
//     img: "Santo Calçado",
//     desc: "Descrição do produto",
//     val: "R$30,00",
//   },
//   {
//     id: "2",
//     img: "Leo Eventos",
//     desc: "Descrição do produto",
//     val: "R$30,00",
//   },
//   {
//     id: "3",
//     img: "KidsPlay",
//     desc: "Descrição do produto",
//     val: "R$30,00",
//   },
//   {
//     id: "4",
//     img: "Leo Eventos",
//     desc: "Descrição do produto",
//     val: "R$30,00",
//   },
// ];

export default function Prods() {
  // Barra de Pesquisa
  function Search({ title }) {
    const [searchQuery, setSearchQuery] = React.useState("");
    const onChangeSearch = (query) => setSearchQuery(query);
    return (
      <Searchbar
        style={{
          position: "relative",
          padding: 0,
          backgroundColor: "#F3F3F3",
          borderRadius: 10,
          marginLeft: 15,
          marginRight: 15,
          marginTop: 10,
          marginBottom: 10,
        }}
        placeholder={title}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    );
  }

  // FlatList
  const Item = ({ photo_url, description, price }) => (
    <View style={styles.item}>
      <Image style={styles.prod} source={{ uri: photo_url }} />
      <Text style={styles.desc} numberOfLines={1}>{description}</Text>
      <Text style={styles.val}>R${price},00</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item
      photo_url={item.photo_url}
      price={item.price}
      description={item.description}
    />
  );

  const [products, setProducts] = useState([]);
  useEffect(async () => {
    await Api.token.set("1|2mzCLH7ElnFDfZe8HJJronXdl80D8WRYTvWvwobj");
    const products = await Api.db.vendors.getProducts(1);
    setProducts(products.data);
    console.log(products);
  }, []);

  // Body
  return (
    <View style={styles.container}>
      <Search title={"Pesquisar produto"} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    width: '100%',
  },
  icone1: {
    marginRight: 15,
  },
  prod: {
    width: "50%",
    height: "50%",
    borderRadius: 8,
    marginBottom: 10,
  },
  // Text1: {
  //   marginTop: 25,
  //   marginBottom: 15,
  //   marginLeft: 20,
  //   textAlign: "left",
  //   fontWeight: "bold",
  //   fontSize: 20,
  // },
  item: {
    backgroundColor: "#F3F3F3",
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  desc: {
    fontSize: 17,
    marginTop:10,
    marginBottom:0,
    fontWeight: "bold",
  },
  val: {
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 8,
  },
});
