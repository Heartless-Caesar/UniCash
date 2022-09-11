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

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.list}>
            <FlatGrid
              itemDimension={50}
              spacing={20}
              data={products}
              renderItem={(itemData) => {
                return (
                  <View style={styles.listItem}>
                    <Image
                      source={{ uri: itemData.item.icon }}
                      style={styles.image}
                    />
                    <Text style={styles.listText}>{itemData.item.price}</Text>
                  </View>
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            />
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Criar Cupon</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginTop: 20,
    marginHorizontal: 10,
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
  },
});

export default CuponModal;
