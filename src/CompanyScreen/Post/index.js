import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Searchbar } from "react-native-paper";

export default function Post() {
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
  return (
    <View style={styles.container}>
      <Search title={"Pesquisar postagem"} />
      <Text style={styles.txt}>Nenhum produto encontrado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  txt: {
    alignSelf:"center",
    marginTop:"70%"
  },
});
