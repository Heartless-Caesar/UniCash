import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./style";

const Loja = (props) => {
  return (
    <View style={styles.lojaContainer}>
      <View style={styles.col1}>
        <Image
          source={{ uri: props.icon }}
          style={{ width: 90, height: 90, borderRadius: 5 }}
        />
      </View>
      <View style={styles.col2}>
        <Text>{props.name}</Text>
        <Text>{props.category}</Text>
        <Text>{props.adress}</Text>
      </View>
      <View style={styles.col3}>
        <Pressable
          onPress={() => {
            props.navigate.navigate("Details", {
              id: props.id,
              name: props.name,
              adress: props.adress,
              category: props.category,
            });
          }}
        >
          <AntDesign name="right" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default Loja;
