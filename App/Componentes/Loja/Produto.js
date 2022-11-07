import { View, Image, Text, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import ProductModal from "./productModal";

const Produto = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <View
      style={{
        flexDirection: "row",
        padding: "5%",
        flex: 6,
        borderWidth: 1,
        borderColor: "#f5f5f5",
        borderBottomColor: "#cccccc",
      }}
    >
      <ProductModal
        visible={visible}
        setVisible={setVisible}
        productIcon={props.iconUrl}
        name={props.name}
        description={props.description}
      />
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: props.icon }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 5,
          }}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Text>{props.name}</Text>
        <Text>{props.price}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", paddingLeft: "10%" }}>
        <SimpleLineIcons
          name="bag"
          size={20}
          color="#17A7E0"
          style={{ marginRight: "5%" }}
        />
        <Text style={{ color: "#17A7E0", textDecorationLine: "underline" }}>
          Add
        </Text>
      </View>
    </View>
  );
};

export default Produto;
