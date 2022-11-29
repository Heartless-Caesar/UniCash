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
    <View style={{ marginBottom: "50%", paddingBottom: "50%" }}>
      <View
        style={{ flexDirection: "row", marginTop: "10%", marginBottom: "5%" }}
      >
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
              <View
                style={{
                  flex: 7,
                  flexDirection: "row",
                  marginBottom: "5%",
                }}
              >
                <View
                  style={{
                    marginLeft: "5%",
                    flex: 1,
                  }}
                >
                  <Image
                    source={{ uri: itemData.item.iconUrl }}
                    style={{ height: 50, width: 50 }}
                  />
                </View>
                <View style={{ flexDirection: "column", flex: 3 }}>
                  <Text>{itemData.item.name}</Text>
                  <FontAwesome5 name="horse-head" size={20} />
                  <Text>{itemData.item.price}</Text>
                  {/* <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      justifyContent: "flex-end",
                      // borderColor: "#000000",
                      // borderWidth: 1,
                    }}
                  >
                    
                  </View> */}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "space-evenly",
                  }}
                >
                  <View>
                    <AntDesign name="pluscircle" size={20} color="#17A7E0" />
                  </View>
                  <View>
                    <Text>{itemData.item.quantity}</Text>
                  </View>
                  <View>
                    <AntDesign name="minuscircleo" size={20} />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View>
        <View>
          <AntDesign name="infocircleo" size={20} color="#FF8718CC" />
        </View>
        <Text>
          Após finalizar um pedido, você terá um tempo limite de 20min para
          retirar seu pedido, caso contrário o pedido será cancelado
          automaticamente.
        </Text>
      </View>
    </View>
  );
};

export default Carrinho;
