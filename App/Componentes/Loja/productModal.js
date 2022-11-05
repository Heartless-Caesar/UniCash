import { View, Text, Modal, Image } from "react-native";
import React from "react";

const ProductModal = (props) => {
  return (
    <Modal visible={props.visible}>
      <View>
        <Image source={{ uri: props.iconUrl }} />
      </View>
      <View></View>
    </Modal>
  );
};

export default ProductModal;
