import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Lojas from "../components/lojas";

const Resgate = ({ navigation }) => {
  const [shops, setShops] = useState(true);
  const [cupons, setCupons] = useState(false);

  return (
    <View style={styles.listContainer}>
      <View style={styles.pressArea}>
        <Pressable>
          <View style={styles.button1}>
            <Text style={styles.buttonText1}>Estabelecimentos</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Cupons")}>
          <View style={styles.button2}>
            <Text style={styles.buttonText2}>Cupons ativos</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        <Lojas />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: "#cccccc",
  },
  buttonsContainer: {
    borderBottomColor: "#cccccc",
    flexDirection: "row",
    marginHorizontal: 10,
    textAlign: "center",
  },
  button1: {
    borderTopLeftRadius: 5,
    backgroundColor: "#f5f5f5",
    borderColor: "#cccccc",
    padding: 15,
    width: 170,
  },
  button2: {
    borderTopLeftRadius: 5,
    backgroundColor: "#800020",
    borderColor: "#cccccc",
    padding: 15,
    width: 170,
  },
  buttonText1: {
    color: "#000000",
    textAlign: "center",
  },
  buttonText2: {
    color: "#f5f5f5",
    textAlign: "center",
  },
  pressArea: {
    borderBottomColor: "#cccccc",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export default Resgate;
