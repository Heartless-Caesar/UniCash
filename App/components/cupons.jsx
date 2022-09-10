import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Tabs from "./tabs";

const Cupons = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Tabs navigation={navigation} />
      <Text>Cupons</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default Cupons;
