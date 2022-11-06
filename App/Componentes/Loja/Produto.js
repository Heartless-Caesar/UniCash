import { View, Image, Text, Modal } from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import ProductModal from "./productModal";

const Produto = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <ProductModal
        visible={visible}
        setVisible={setVisible}
        productIcon={props.iconUrl}
        name={props.name}
        description={props.description}
      />
      <View>
        <Image
          source={{ uri: props.iconUrl }}
          style={{ height: 50, width: 50 }}
        />
      </View>
      <View>
        <Text>{props.name}</Text>
        <Text>{props.price}</Text>
      </View>
      <View>
        <SimpleLineIcons name="bag" size={20} />
      </View>
    </View>
  );
};

export default Produto;
