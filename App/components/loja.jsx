import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Loja = (props) => {
  return (
    <View style={styles.lojaContainer}>
      <View style={styles.lojaCol1}>
        <Image source={{ uri: props.icon }} style={{ width: 90, height: 90 }} />
      </View>
      <View style={styles.lojaCol2}>
        <Text>{props.name}</Text>
        <Text>{props.category}</Text>
        <Text>{props.adress}</Text>
      </View>
      <View style={styles.lojaCol3}>
        <AntDesign name="right" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lojaContainer: {
    backgroundColor: "#cccccc",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-start",
    borderBottomColor: "#cccccc",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  lojaCol1: {},
  lojaCol2: {
    marginLeft: 5,
    flex: 5,
  },
  lojaCol3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loja;
