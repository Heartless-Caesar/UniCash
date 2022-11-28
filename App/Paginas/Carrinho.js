import { View, Text, Pressable, FlatList, Image } from "react-native";
import React from "react";
//import { useStateContext } from "../Context/Cart_context";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import produtos from "../assets/data/produtos.json";

const Carrinho = ({ navigation }) => {
  return (
    <View style={{ marginBottom: "10%" }}>
      <View style={{ flexDirection: "row", marginTop: "10%" }}>
        <View>
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left" size={30} />
          </Pressable>
        </View>
        <View style={{ marginLeft: "35%", marginTop: "2%" }}>
          <Text>Sacola</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={produtos}
          renderItem={(itemData) => {
            return (
              <View>
                <View>
                  <Image
                    source={{ uri: itemData.item.iconUrl }}
                    style={{ height: 50, width: 50 }}
                  />
                </View>
                <View>
                  <Text>{itemData.item.name}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome5 name="horse-head" size={20} />
                    <Text>{itemData.item.price}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <AntDesign name="pluscircle" size={20} color="#17A7E0" />
                  </View>
                  <View>{itemData.item.quantity}</View>
                  <View>
                    <AntDesign name="minuscircleo" size={20} />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Carrinho;
