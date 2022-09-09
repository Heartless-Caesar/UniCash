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
      <Tabs goToShops={goToShops} goToCupons={goToCupons} />
      <View style={styles.headerContainer}>
        {/* Col 1 */}
        <View style={styles.headerContainerCol1}>
          <AntDesign name="left" size={24} color="black" />
        </View>
        {/* Col 2 */}
        <View style={styles.headerContainerCol2}>
          <Text>Go back left arrow && Header featured rectangle</Text>
        </View>
      </View>
      {/* Col 1 */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailsContainerCol1}>
          <Text>Name && Shop category && Location</Text>
        </View>
        {/* Col 2 */}
        <View style={styles.detailsContainerCol2}>
          <Text>Create Cupon button</Text>
        </View>
      </View>
      {/* Single Col */}
      <View style={styles.filters}>
        <Text>Filters</Text>
      </View>
      {/* Flex row - 4 items per row */}
      <View style={styles.list}>
        <FlatList
          data={products}
          renderItem={(itemData) => {
            return (
              <View>
                <Image source={{ uri: itemData.icon }} />
                <Text>{itemData.price}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  headerContainer: {
    width: 200,
    height: 200,
  },
  headerContainerCol1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainerCol2: {
    flex: 4,
    backgroundColor: "#cccccc",
  },
  detailsContainer: {
    flex: 1,
  },
  detailsContainerCol1: {
    flex: 2,
  },
  detailsContainerCol2: {
    flex: 2,
  },
  filters: {
    justifyContent: "space-between",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Details;
