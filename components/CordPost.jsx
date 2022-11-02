import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Api } from "meconnect-sdk";
// const DATA = [
//   {
//     id: "1",
//     title: "Promoção de Produto",
//     desc: "Antes 10 agora 5! Aproveite essa promoção agora para não perder a oportunidade!",
//     type: "PROMOÇÃO",
//     date: "21/12/21 às 13:52",
//   },
//   {
//     id: "2",
//     title: "Promoção tênis da Nike!",
//      desc: "Neste final de ano todos os tênis da nike estarão com 30% de desconto.Aproveite!",
//     type: "PROMOÇÃO",
//     date: "20/12/21 às 19:01",
//   },
//   {
//     id: "3",
//     title: "Promoção tênis da Nike!",
//     desc: "Neste final de ano todos os tênis da nike estarão com 30% de desconto.Aproveite!",
//    type: "PROMOÇÃO",
//    date: "20/12/21 às 19:01",
//   },
//   {
//     id: "4",
//     title: "Promoção tênis da Nike!",
//      desc: "Neste final de ano todos os tênis da nike estarão com 30% de desconto.Aproveite!",
//     type: "PROMOÇÃO",
//     date: "20/12/21 às 19:01",
//   },
//   {
//     id: "5",
//     title: "Promoção tênis da Nike!",
//      desc: "Neste final de ano todos os tênis da nike estarão com 30% de desconto.Aproveite!",
//     type: "PROMOÇÃO",
//     date: "20/12/21 às 19:01",
//   },
//   {
//     id: "6",
//     title: "Promoção tênis da Nike!",
//      desc: "Neste final de ano todos os tênis da nike estarão com 30% de desconto.Aproveite!",
//     type: "PROMOÇÃO",
//     date: "20/12/21 às 19:01",
//   },
// ];

const Item = ({ title, content, media_url, created_at }) => (
  <View style={styles.item}>
    <Text style={styles.type}>asdasdada</Text>
    <Text style={styles.date}>{created_at}</Text>
    <Text style={styles.title}>{title}</Text>
    <Image style={styles.img} source={{ uri: media_url }}></Image>
    <Text style={styles.desc}>{content}</Text>
  </View>
);

const Posti = () => {
  const renderItem = ({ item }) => (
    <Item
      media_url={item.media_url}
      title={item.title}
      content={item.content}
      created_at={item.created_at}
    />
  );

  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    await Api.token.set("1|2mzCLH7ElnFDfZe8HJJronXdl80D8WRYTvWvwobj");
    const posts = await Api.db.vendors.getPosts(1);
    setPosts(posts.data);
    console.log(posts);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  item: {
    backgroundColor: "#F3F3F3",
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
  },
  desc: {
    fontSize: 17,
    color: "#333333",
  },
  type: {
    color: "#333333",
    fontSize: 16,
    textAlign: "left",
    fontWeight: "bold",
    paddingBottom: 0,
  },
  date: {
    fontSize: 14,
    color: "#000",
    textAlign: "right",
  },
});

export default Posti;
