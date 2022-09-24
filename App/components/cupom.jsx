import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";

const Cupom = (props) => {
  return (
    <View key={props.id}>
      <Text>Text Here</Text>
      <Image source={{ uri: props.img }} style={styles.img} />
      <Text>{props.shop_name}</Text>
      <Text>{props.price}</Text>
      <Text>{props.local}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 50,
    width: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000000",
  },
});

export default Cupom;
