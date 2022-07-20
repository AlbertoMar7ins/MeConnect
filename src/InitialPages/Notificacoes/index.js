import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MCHeader from "../../../components/MCHeader";
import Ionicons from "react-native-vector-icons/Ionicons";
import Noti from "../../../components/CardNoti";
import OptionsMenu from "react-native-option-menu";
import { Searchbar } from "react-native-paper";
const myIcon = <Ionicons name="ellipsis-vertical" size={26} color="#fff" />;

export default function Notification() {
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
      <MCHeader title={"Notificações"}>
        <OptionsMenu
          customButton={myIcon}
          buttonStyle={{
            width: 32,
            height: 8,
            margin: 7.5,
            resizeMode: "contain",
          }}
          destructiveIndex={1}
          options={["Sobre", "Editar", "Sair"]}
        />
      </MCHeader>
      <Search title={"Pesquisar Notifições"}/>
      <TouchableOpacity><Text style={styles.Limp}>Limpar Tudo()</Text></TouchableOpacity>
      <Noti />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,

  },
  Limp: {
    fontSize: 15,
    marginRight:7,
    textAlign: "right",
   fontWeight: "bold",
   marginBottom:7,
  }
});
