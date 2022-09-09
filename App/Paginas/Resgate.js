import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Lojas from "../components/lojas";
import Cupons from "../components/cupons";
import Tabs from "../components/tabs";

const Resgate = ({ navigation }) => {
  const [shops, setShops] = useState(true);
  const [cupons, setCupons] = useState(false);

  const goToShops = (arg, arg2) => {
    setShops(arg);
    setCupons(arg2);
  };

  const goToCupons = (arg, arg2) => {
    setCupons(arg);
    setShops(arg2);
  };

  return (
    <View style={styles.listContainer}>
      <Tabs goToShops={goToShops} goToCupons={goToCupons} />
      <View style={styles.listContainer}>
        {shops && <Lojas navigate={navigation} />}
        {cupons && <Cupons />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: "#cccccc",
  },
});

export default Resgate;
