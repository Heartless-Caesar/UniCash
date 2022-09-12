//TODO : Make the tab component navigate to the original screen of the tab instead of just switching the booleans to show a page
import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

const Tabs = (props) => {
  const toggleShopsButtons = () => {
    props.navigation.navigate("Shops");
    styles.button1 = buttonTrue;
    styles.buttonText1 = textTrue;
    styles.button2 = buttonFalse2;
    styles.buttonText2 = textFalse;
  };

  const toggleCuponButtons = () => {
    props.navigation.navigate("Cupons");
    styles.button1 = buttonFalse;
    styles.buttonText1 = textFalse;
    styles.button2 = buttonTrue2;
    styles.buttonText2 = textTrue;
    console.log(styles.button1);
  };

  return (
    <View style={styles.listContainer}>
      <View style={styles.pressArea}>
        <Pressable onPress={() => toggleShopsButtons()}>
          <View style={styles.button1}>
            <Text style={styles.buttonText1}>Estabelecimentos</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => toggleCuponButtons()}>
          <View style={styles.button2}>
            <Text style={styles.buttonText2}>Cupons ativos</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    borderBottomColor: "#cccccc",
    flexDirection: "row",
    marginHorizontal: 10,
    textAlign: "center",
  },
  pressArea: {
    borderWidth: 1,
    borderBottomColor: "#cccccc",
    borderColor: "#cccccc",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
    marginTop: 15,
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
    borderTopRightRadius: 5,
    backgroundColor: "#800020",
    padding: 15,
    width: 170,
  },
  listContainer: {
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
const buttonFalse = {
  borderTopLeftRadius: 5,
  backgroundColor: "#800020",
  padding: 15,
  width: 170,
};

const buttonTrue2 = {
  borderTopRightRadius: 5,
  backgroundColor: "#f5f5f5",
  padding: 15,
  width: 170,
};
const buttonFalse2 = {
  borderTopRightRadius: 5,
  backgroundColor: "#800020",
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

export default Tabs;
