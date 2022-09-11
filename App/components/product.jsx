import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import products from "../assets/data/produtos";
import { FlatGrid } from "react-native-super-grid";

const Product = () => {
  return (
    <View style={styles.list}>
      <FlatGrid
        itemDimension={50}
        spacing={20}
        data={products}
        automaticallyAdjustContentInsets={false}
        renderItem={(itemData) => {
          return (
            <View style={styles.listItem}>
              <Image
                source={{ uri: itemData.item.icon }}
                style={styles.image}
              />
              <Text style={styles.listText}>{itemData.item.price}</Text>
            </View>
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
  image: {
    height: 50,
    width: 50,
  },
  listItem: {},
  list: {
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#00000",
  },
});

export default Product;
