import productData from "../assets/data/produtos.json";
import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Produto from "../Componentes/Loja/Produto";

const Details = ({ route, navigation }, props) => {
  const shopId = props.id;
  const products = productData.filter((e) => e.shopId == shopId);

  const [produtos, setProdutos] = useState([]);

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
    setProdutos(products);
  }, []);

  return (
    <View>
      <FlatList
        data={produtos}
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{ borderRadius: 5 }}
        renderItem={(itemData) => {
          return (
            <Produto
              name={itemData.item.name}
              price={itemData.item.price}
              icon={itemData.item.iconUrl}
              description={itemData.item.description}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return item.productId;
        }}
      />
    </View>
  );
};

export default Details;
