import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import products from "../assets/data/produtos";
const CuponModal = () => {
  const [selected, setSelected] = useState(products);
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [number, setNumber] = useState(0);

  const toggleSelect = (item) => {
    if (item.selected) {
      setSelectedItems((res) => res.filter((e) => e.id !== item.id));
    } else {
      setSelectedItems((res) => [...res, item]);
    }
    const newArrData = selected.map((e) => {
      if (e.id == item.id) {
        return {
          ...e,
          selected: !e.selected,
        };
      } else {
        return e;
      }
    });
    console.log(`Length ${selectedItems.length}`);
    setSelected(newArrData);
  };

  const modalForward = () => {
    setModalVisible(false);
    setSecondModalVisible(true);
  };

  const modalBack = () => {
    setModalVisible(true);
    setSecondModalVisible(false);
  };

  const criarCupom = () => {
    setSecondModalVisible(false);
    setSelectedItems([]);
  };

  const addQty = (item) => {
    return { ...item, quantity: item.quantity++ };
  };

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredViewInner}>
          <View style={styles.list}>
            <FlatGrid
              itemDimension={50}
              spacing={20}
              data={selected}
              renderItem={(itemData) => {
                return (
                  <Pressable onPress={() => toggleSelect(itemData.item)}>
                    <View
                      style={[
                        styles.listItem,
                        {
                          backgroundColor: itemData.item.selected
                            ? "#66BB6A"
                            : "#f5f5f5",
                          borderRadius: itemData.item.selected ? 5 : 0,
                        },
                      ]}
                    >
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
                style={[styles.button, styles.buttonClose, { marginRight: 20 }]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => modalForward()}
              >
                <Text style={styles.textStyle}>Próximo</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={secondModalVisible}
      >
        <View style={styles.centeredViewInner}>
          <View style={styles.list}>
            <FlatList
              data={selectedItems}
              renderItem={(itemData) => {
                return (
                  <View style={styles.secondlistItem}>
                    <View style={styles.col1}>
                      <Image
                        source={{ uri: itemData.item.icon }}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.col2}>
                      <Text>{itemData.item.name}</Text>
                      <Text style={styles.listText}>{itemData.item.price}</Text>
                    </View>
                    <View style={styles.col3}>
                      <TextInput
                        placeholder="0"
                        value={number}
                        style={styles.input}
                        keyboardType="numeric"
                      />
                    </View>
                  </View>
                );
              }}
            />
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose, { marginRight: 20 }]}
                onPress={() => modalBack()}
              >
                <Text style={styles.textStyle}>Voltar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => criarCupom()}
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
    marginBottom: 5,
    flexDirection: "row",
  },
  centeredViewInner: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
    marginHorizontal: 10,
    marginBottom: 5,
    marginTop: 10,
    // padding: 10,
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
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
  listItem: {
    justifyContent: "center",
    padding: 5,
  },
  secondlistItem: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  list: {
    padding: 5,
  },
  col1: {
    flex: 1,
  },
  col2: {
    flex: 2,
  },
  col3: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  input: {
    flex: 1,
    padding: 0,
    height: 50,
    // borderWidth: 1,
    // borderColor: "#000000",
    // borderRadius: 5,
    fontSize: 40,
    justifyContent: "center",
  },
});

export default CuponModal;
