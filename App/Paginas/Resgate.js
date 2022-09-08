import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Lojas from "../components/lojas";
import Cupons from "../components/cupons";
const Resgate = ({ navigation }) => {
  const [shops, setShops] = useState(true);
  const [cupons, setCupons] = useState(false);

  const tabToggleShops = () => {
    setShops(true);
    setCupons(false);
    styles.button1 = buttonTrue;
    styles.buttonText1 = textTrue;
    styles.button2 = buttonFalse2;
    styles.buttonText2 = textFalse;
  };

  const tabToggleCupons = () => {
    setCupons(true);
    setShops(false);
    styles.button2 = buttonTrue2;
    styles.buttonText2 = textTrue;
    styles.button1 = buttonFalse;
    styles.buttonText1 = textFalse;
  };

  return (
    <View style={styles.listContainer}>
      <View style={styles.pressArea}>
        <Pressable onPress={() => tabToggleShops()}>
          <View style={styles.button1}>
            <Text style={styles.buttonText1}>Estabelecimentos</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => tabToggleCupons()}>
          <View style={styles.button2}>
            <Text style={styles.buttonText2}>Cupons ativos</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        {shops && <Lojas />}
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
  buttonsContainer: {
    borderBottomColor: "#cccccc",
    flexDirection: "row",
    marginHorizontal: 10,
    textAlign: "center",
  },
  buttonText1: {
    color: "#000000",
    textAlign: "center",
  },
  button1: {
    borderTopLeftRadius: 5,
    backgroundColor: "#f5f5f5",
    borderColor: "#cccccc",
    padding: 15,
    width: 170,
  },
  buttonText2: {
    color: "#f5f5f5",
    textAlign: "center",
  },
  button2: {
    borderTopLeftRadius: 5,
    backgroundColor: "#800020",
    borderColor: "#cccccc",
    padding: 15,
    width: 170,
  },
  pressArea: {
    borderBottomColor: "#cccccc",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },
});

const buttonTrue = {
  borderTopLeftRadius: 5,
  backgroundColor: "#f5f5f5",
  borderColor: "#cccccc",
  padding: 15,
  width: 170,
};

const buttonTrue2 = {
  borderTopRightRadius: 5,
  backgroundColor: "#f5f5f5",
  borderColor: "#cccccc",
  padding: 15,
  width: 170,
};

const buttonFalse = {
  borderTopLeftRadius: 5,
  backgroundColor: "#800020",
  borderColor: "#cccccc",
  padding: 15,
  width: 170,
};

const buttonFalse2 = {
  borderTopRightRadius: 5,
  backgroundColor: "#800020",
  borderColor: "#cccccc",
  padding: 15,
  width: 170,
};

const textTrue = {
  color: "#000000",
  textAlign: "center",
};

const textFalse = {
  color: "#f5f5f5",
  textAlign: "center",
};

export default Resgate;
