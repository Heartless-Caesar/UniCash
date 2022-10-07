import React from "react";
import { View, Text, StyleSheet, Pressable, Image, Modal } from "react-native";

const CuponModal = (props) => {
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={props.visible}>
        <View style={styles.centeredViewInner}>
          {/* Top aouter View */}
          <View style={styles.qrCol1}>
            <Image
              source={{ uri: props.img }}
              style={{
                height: 150,
                width: 150,
                borderWidth: 1,
                borderColor: "#000000",
                borderRadius: 5,
                marginTop: 10,
              }}
            />
            <View style={styles.data}>
              <Text style={styles.textData}>X9M75ZZ80</Text>
              <Text style={styles.textData}>{props.shop_name}</Text>
              <Text style={styles.textData}>:Categoria:</Text>
              <Text style={styles.textData}>{props.local}</Text>
              <Text style={styles.textData}>{props.token}</Text>
            </View>
          </View>
          {/* Items listing row */}
          <View style={styles.listingRow}>
            {/* TODO: Implement a Flatlist with all the items contained in a cupon */}
            <View style={{ flexDirection: "column" }}>
              <Image source={{ uri: props.img }} style={styles.img} />
              <Text style={{ marginLeft: 10 }}>$ {props.token}</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Image source={{ uri: props.img }} style={styles.img} />
              <Text style={{ marginLeft: 10 }}>$ {props.token}</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Image source={{ uri: props.img }} style={styles.img} />
              <Text style={{ marginLeft: 10 }}>$ {props.token}</Text>
            </View>
          </View>
          {/* Bottom button row*/}
          <View style={styles.buttonRow}>
            <Pressable>
              <View
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "#800020",
                  borderRadius: 5,
                  backgroundColor: "#800020",
                }}
              >
                <Text style={{ color: "#f5f5f5" }}>Close</Text>
              </View>
            </Pressable>
            {/*TODO: Implement this second button && finish the layout */}
            <Pressable>
              <View>
                <Text style={{ textDecorationLine: "underline" }}>
                  Deseja excluir cupom?
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredViewInner: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
    marginHorizontal: 10,
    marginBottom: 5,
    padding: 10,
    // borderWidth: 1,
    // borderColor: "#000000",
  },
  itemButton: {
    marginLeft: 5,
    backgroundColor: "#757575",
    borderWidth: 1,
    borderColor: "#9E9E9E",
    borderRadius: 5,
    padding: 10,
  },
  img: {
    height: 50,
    width: 50,
  },
  qrCol1: {
    justifyContent: "space-between",
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "#000000",
  },
  listingRow: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
    marginTop: 50,
    paddingHorizontal: 20,
  },
  buttonRow: {
    flexDirection: "row",
    marginRight: 150,
    marginTop: 550,

    borderWidth: 1,
    borderColor: "#000000",
  },
  data: { flexWrap: "wrap", padding: 15 },
  textData: { lineHeight: 25 },
});

export default CuponModal;
