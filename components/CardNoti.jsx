import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


const DATA = [
  {
    id: "1",
    title: "Santo Calçado",
    desc: "Novo horário de funcionamento",
    type: "RECADO",
    date: "21/12/21 às 13:52",
  },
  {
    id: "2",
    title: "Leo Eventos",
    desc: "Evento Balões Mágicos está por vir!",
    type: "EVENTO",
    date: "20/12/21 às 19:01",
  },
  {
    id: "3",
    title: "KidsPlay",
    desc: "Promoção de produtos!",
    type: "PROMOÇÃO",
    date: "18/12/21 às 10:30",
  },
  {
    id: "4",
    title: "Leo Eventos",
    desc: "Promoção evento Balões Mágicos",
    type: "PROMOÇÃO",
    date: "21/12/21 às 14:19",
  },
];

const Item = ({ title, desc, type, date }) => (
    <View style={styles.item}>
      <TouchableOpacity><Ionicons name="trash" size={15} color={"#000"} style={styles.icone1} /></TouchableOpacity>
      <Text style={styles.type}>{type}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
);

const Noti = () => {
  const renderItem = ({ item }) => (
    <Item
      type={item.type}
      title={item.title}
      desc={item.desc}
      date={item.date}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
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
    fontSize: 13,
    color: "#333333",
  },
  type: {
    color: "#333333",
    fontSize: 13,
    textAlign: "right",
    fontWeight: "bold",
    paddingBottom: 0,
  },
  date: {
    fontSize: 12,
    textAlign: "right",
  },
});

export default Noti;
