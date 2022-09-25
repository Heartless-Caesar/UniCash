import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
const Cupom = (props) => {
  return (
    <View style={styles.innerContainer} key={props.id}>
      <View style={styles.col1}>
        <Image source={{ uri: props.img }} style={styles.img} />
        <View style={{ width: 200 }}>
          <Text style={{ marginTop: 40, color: "#BDBDBD" }}>
            Token expires in : 10 days
          </Text>
        </View>
      </View>
      <View style={styles.col2}>
        <Text>{props.shop_name}</Text>
        <Text>{props.price}</Text>
        <Text>{props.local}</Text>
      </View>
      <View style={styles.col3}>
        <Text style={{ marginLeft: 40, marginBottom: 10 }}>{props.token}</Text>
        <View style={styles.itemButton}>
          <Text style={{ textAlign: "center", color: "#f5f5f5" }}>
            Ver itens
          </Text>
        </View>
      </View>
      <View style={styles.col4}>
        <Icon name="trash" size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    padding: 5,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
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
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: "#000000",
  },
  col1: {
    flex: 1,
    marginRight: 10,
  },
  col2: {
    flex: 2,
  },
  col3: {
    flex: 2,
    flexDirection: "column",
  },
  col4: {
    marginTop: 45,
    marginLeft: 10,
  },
});

export default Cupom;
