import productData from "../assets/data/produtos.json";
import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Produto from "../Componentes/Loja/Produto";
import DetailsHeader from "../Componentes/DetailsHeader";

const Details = ({ route, navigation }, props) => {
  const [produtos, setProdutos] = useState([]);
  const { id, name, adresss, category } = route.params;
  const products = produtos.filter((e) => e.shopId == id);

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
    setProdutos(productData);
  }, []);

  return (
    <View style={{ paddingBottom: "20%" }}>
      <DetailsHeader shopName={name} navigation={navigation} />
      <View>
        <FlatList
          data={products}
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
    </View>
  );
};

export default Details;
