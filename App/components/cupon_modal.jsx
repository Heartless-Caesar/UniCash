import React from "react";
import { View, Text, StyleSheet, Pressable, Image, Modal } from "react-native";
import cuponModalData from "../assets/data/cuponModal.json";

const CuponModal = () => {
  return (
    <View>
      <View style={styles.col1}>
        <Image />
      </View>
      <View style={styles.col2}></View>
      <View style={styles.col3}></View>
    </View>
  );
};

export default CuponModal;
