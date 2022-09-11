//TODO : Implement store details page with their products catalog
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import products from "../assets/data/produtos";
import React, { useState } from "react";
import Tabs from "../components/tabs";
import Product from "../components/product";

const Details = ({ route, navigation }) => {
  const [shops, setShops] = useState(true);
  const [cupons, setCupons] = useState(false);
  //UTILIZE THE PARAM ID TO FETCH THE DESIRED SHOP AND IT'S PRODUCTS
  const { id } = route.params;

  const goToShops = (arg, arg2) => {
    setShops(arg);
    setCupons(arg2);
  };

  const goToCupons = (arg, arg2) => {
    setCupons(arg);
    setShops(arg2);
  };

  return (
    <View style={styles.Container}>
      <Tabs
        goToShops={goToShops}
        goToCupons={goToCupons}
        navigation={navigation}
      />
      <View style={styles.body}>
        <View style={styles.headerContainer}>
          {/* Col 1 */}
          <Pressable onPress={() => navigation.navigate("Shops")}>
            <View style={styles.headerContainerCol1}>
              <AntDesign name="left" size={24} color="black" />
            </View>
          </Pressable>
          {/* Col 2 */}
          <View style={styles.headerContainerCol2}>
            <Text>Go back left arrow && Header featured rectangle</Text>
          </View>
        </View>
        {/* Col 1*/}
        <View style={styles.detailsContainer}>
          <View style={styles.detailsContainerCol1}>
            <Text>UniShop</Text>
          </View>
          <View style={styles.detailsContainerCol2}>
            <Text>Loja</Text>
            <Text>Bloco A</Text>
          </View>
          {/* Col 2 */}
          <View style={styles.detailsContainerCol3}>
            <Text style={styles.cuponButtonText}>Create Cupon</Text>
          </View>
        </View>
        <View style={styles.filters}>
          <Text style={styles.filtersText}>Filter 1</Text>
          <Text style={styles.filtersText}>Filter 2</Text>
          <Text style={styles.filtersText}>Filter 3</Text>
        </View>

        <Product />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#cccccc",
  },
  body: {
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    flexDirection: "row",
    padding: 20,
  },
  headerContainerCol1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainerCol2: {
    flex: 8,
    backgroundColor: "#cccccc",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 15,
  },
  detailsContainer: {
    flexDirection: "row",

    padding: 20,
    height: 100,
    width: 340,
  },
  detailsContainerCol1: {
    flex: 4,
    height: 50,
    padding: 5,
  },
  detailsContainerCol2: {
    flex: 4,
    height: 60,
    padding: 5,
  },
  detailsContainerCol3: {
    flex: 6,
    height: 50,
    backgroundColor: "#cccccc",
    borderRadius: 5,
    padding: 10,
  },
  cuponButtonText: {
    textAlign: "center",
  },
  filters: {
    borderWidth: 1,
    borderTopColor: "#cccccc",
    borderColor: "white",
    height: 50,
    padding: 10,
    flexDirection: "row",
  },
  filtersText: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "#cccccc",
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default Details;
