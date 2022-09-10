import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import shops from "../assets/data/shops";
import Loja from "./loja";
import Tabs from "./tabs";
const Lojas = ({ navigation }) => {
  const [lojas, setLojas] = useState([]);

  useEffect(() => {
    fetchLojas();
  }, []);

  const fetchLojas = /*async*/ () => {
    // try {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/users",
    //     { method: "GET" }
    //   );
    //   const json = await response.json();
    //   console.log(json);
    // } catch (error) {
    //   console.log(error);
    // }
    setLojas(shops);
    console.log(lojas);
  };

  return (
    <View style={styles.lojasContainer}>
      <Tabs navigation={navigation} />
      <FlatList
        data={lojas}
        renderItem={(itemData) => {
          return (
            <Loja
              name={itemData.item.name}
              category={itemData.item.category}
              adress={itemData.item.adress}
              icon={itemData.item.icon}
              id={itemData.item.id}
              navigate={navigation}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lojasContainer: {
    flex: 1,
    marginBottom: 20,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: "#cccccc",
  },
  list: {
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
export default Lojas;
