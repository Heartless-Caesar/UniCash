import shopListData from "../assets/data/shop_data.json";
import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { shopList } from "../Styles";
import Loja from "../Componentes/Loja/Loja";

const Lojas = ({ navigation }) => {
  const [lojas, setLojas] = useState([]);

  useEffect(() => {
    // try {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/users",
    //     { method: "GET" }
    //   );
    //   const json = await response.json();
    //   setLojas(json)
    //   console.log(json);
    // } catch (error) {
    //   console.log(error);
    // }
    setLojas(shopListData);
  }, []);

  return (
    <View style={{ marginTop: "5%", marginBottom: "20%" }}>
      <FlatList
        data={lojas}
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{ borderRadius: 5 }}
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
        style={shopList.list}
      />
    </View>
  );
};

export default Lojas;
