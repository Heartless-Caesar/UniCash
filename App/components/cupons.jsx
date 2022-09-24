import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Tabs from "./tabs";

const Cupons = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Tabs navigation={navigation} />
      <View style={styles.innerContainer}>
        <Text>Cupons</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#cccccc",
  },
  innerContainer: {
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#f5f5f5",
    minHeight: 550,
    marginBottom: 10,
  },
});

export default Cupons;
