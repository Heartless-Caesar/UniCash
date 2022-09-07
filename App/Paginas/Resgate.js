import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Lojas from "../components/lojas";

const Resgate = () => {
  const [est, setEst] = useState(false);
  const [cuponsPage, setCuponsPage] = useState(true);

  useEffect(() => {
    if (!est) {
      styles.buttonText1 = {
        color: "#000000",
      };
      styles.buttonText2 = {
        color: "#f5f5f5",
      };
      styles.button1 = {
        borderTopLeftRadius: 5,
        backgroundColor: "#f5f5f5",
        borderColor: "#cccccc",
        padding: 15,
        width: 170,
      };

      styles.button2 = {
        borderTopRightRadius: 5,
        backgroundColor: "#800020",
        borderColor: "#cccccc",
        padding: 15,
        width: 170,
      };
    }

    if (!cuponsPage) {
      styles.buttonText1 = {
        color: "#f5f5f5",
      };

      styles.buttonText2 = {
        color: "#000000",
      };
      styles.button1 = {
        borderTopLeftRadius: 5,
        backgroundColor: "#800020",
        borderColor: "#cccccc",
        color: "#f5f5f5",
        padding: 15,
        width: 170,
      };

      styles.button2 = {
        borderTopRightRadius: 5,
        backgroundColor: "#f5f5f5",
        borderColor: "#cccccc",
        color: "#f5f5f5",
        padding: 15,
        width: 170,
      };
    }
  }, [est, cuponsPage]);

  const handleToggle = () => {
    if (est === true) {
      setEst(false);
      setCuponsPage(true);
    }
    if (cuponsPage === true) {
      setCuponsPage(false);
      setEst(true);
    }
  };

  //CHANGE SECOND COMPOENENT TO CUPONS PAGE
  const renderPage = () => {
    if (est) {
      return <Lojas />;
    }

    if (cuponsPage) {
      //RETURN CUPONS PAGE HERE

      return (
        <View>
          <Text>Teste</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.listContainer}>
      <View style={styles.pressArea}>
        <Pressable onPress={() => handleToggle()}>
          <View style={styles.button1}>
            <Text style={styles.buttonText1}>Estabelecimentos</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => handleToggle()}>
          <View style={styles.button2}>
            <Text style={styles.buttonText2}>Cupons ativos</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.listContainer}>{renderPage()}</View>
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
    borderTopRightRadius: 5,
    backgroundColor: "#f5f5f5",
    borderColor: "#cccccc",
    padding: 15,
    width: 170,
  },
  pressArea: {
    borderBottomColor: "#cccccc",
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,

    marginTop: 10,
  },
  buttonText1: {
    color: "black",
    textAlign: "center",
  },
  buttonText2: {
    color: "black",
    textAlign: "center",
  },
});

export default Resgate;
