import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Lojas from "../components/lojas";

const Resgate = () => {
  return (
    <View style={styles.listContainer}>
      <Lojas />
      <Text>Página de Resgate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});

export default Resgate;
