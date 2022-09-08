import React, { useEffect, useState } from "react";
import Lojas from "../components/lojas";

const Resgate = () => {
  const [est, setEst] = useState(true);
  const [cuponsPage, setCuponsPage] = useState(false);

  // useEffect(() => {
  //   console.log(`Est is ${est} Cupons is ${cuponsPage}`);
  //   if (est) {
  //     styles.buttonText1 = textTrue;

  //     styles.button1 = buttonTrue;

  //     styles.buttonText2 = textFalse;

  //     styles.button2 = buttonFalse;
  //   }

  //   if (cuponsPage) {
  //     styles.buttonText1 = textFalse;
  //     styles.button1 = buttonFalse;

  //     styles.buttonText2 = textTrue;
  //     styles.button2 = buttonTrue;
  //   }
  // }, [est]);

  // const handleToggle = () => {
  //   if (est) {
  //     setEst(false);
  //     setCuponsPage(true);
  //   } else {
  //     setEst(true);
  //     setCuponsPage(false);
  //   }
  // };

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

const buttonTrue = {
  borderTopLeftRadius: 5,
  backgroundColor: "#f5f5f5",
  borderColor: "#cccccc",
  padding: 15,
  width: 170,
};

const textTrue = {
  color: "#000000",
  textAlign: "center",
};

const buttonFalse = {
  borderTopLeftRadius: 5,
  backgroundColor: "#800020",
  borderColor: "#cccccc",
  padding: 15,
  width: 170,
};

const textFalse = {
  color: "#f5f5f5",
  textAlign: "center",
};

export default Resgate;
