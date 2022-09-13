import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import products from "../assets/data/produtos";
const CuponModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleSelect = (shopId) => {
    console.log(`Selected item ${shopId}`);
    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      if (element.shopId == shopId) {
        if (styles.image == selected) {
          styles.image = { height: 50, width: 50, borderRadius: 5 };
        } else {
          styles.image = selected;
        }
      }
    }
  };

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredViewInner}>
          <View style={styles.list}>
            <FlatGrid
              itemDimension={50}
              spacing={20}
              data={products}
              renderItem={(itemData) => {
                return (
                  <Pressable onPress={() => toggleSelect(itemData.item.id)}>
                    <View style={styles.listItem}>
                      <Image
                        source={{ uri: itemData.item.icon }}
                        style={styles.image}
                      />
                      <Text style={styles.listText}>{itemData.item.price}</Text>
                    </View>
                  </Pressable>
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            />
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Criar cupom</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Criar Cupom</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginTop: 20,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  centeredViewInner: {
    borderRadius: 5,
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginTop: 5,
    marginHorizontal: 10,
    marginBottom: 5,
    flexDirection: "row",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#000000",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  button: {
    borderRadius: 5,
    height: 50,
    width: 150,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#800020",
    width: 120,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  list: {},
});

const selected = {
  borderWidth: 3,
  borderColor: "#4CAF50",
  height: 50,
  width: 50,
  borderRadius: 5,
};

export default CuponModal;
