import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import shops from "../assets/data/shops";
import Loja from "./loja";

const Lojas = () => {
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
      <FlatList
        data={lojas}
        renderItem={(itemData) => {
          return (
            <Loja
              name={itemData.item.name}
              category={itemData.item.category}
              adress={itemData.item.adress}
              icon={itemData.item.icon}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lojasContainer: {
    flex: 1,
  },
});
export default Lojas;
