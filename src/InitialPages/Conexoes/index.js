import React from "react";
import { View, StyleSheet } from 'react-native';
import MCHeader from "../../../components/MCHeader";
import Ionicons from "react-native-vector-icons/Ionicons";
import OptionsMenu from "react-native-option-menu";
import Cone from "../../../components/CardCone";
import { Searchbar } from "react-native-paper";
const myIcon = <Ionicons name="ellipsis-vertical" size={26} color="#fff" />;

export default function Conection() {
  function Search ({title}) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
      <Searchbar
      style={{
          position: 'relative',
          padding: 0,
          backgroundColor: "#F3F3F3",
          borderRadius: 10,
          marginLeft: 15,
          marginRight: 15,
          marginTop:10,
          marginBottom:10,
      }}
        placeholder={title}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    );
  };
  return (
    <View style={styles.container}>
      <MCHeader title={"Conexões"}>
        <OptionsMenu
          customButton={myIcon}
          buttonStyle={{
            width: 32,
            height: 8,
            margin: 7.5,
            resizeMode: "contain",
          }}
          destructiveIndex={1}
          options={["Edit", "Delete", "Cancel"]}
        />
      </MCHeader>
      <Search title={"Pesquisar Conexões"} />
      <Cone />
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
