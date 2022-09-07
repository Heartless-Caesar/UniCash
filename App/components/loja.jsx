import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Loja = (props) => {
  return (
    <View style={styles.lojaContainer}>
      <View style={styles.lojaCol1}>
        <Image source={props.icon} />
      </View>
      <View style={styles.lojaCol2}>
        <Text>{props.name}</Text>
        <Text>{props.category}</Text>
        <Text>{props.adress}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lojaContainer: {
    padding: 10,
  },
  lojaCol1: {
    flex: 1,
  },
  lojaCol2: {
    flex: 4,
  },
});

export default Loja;
