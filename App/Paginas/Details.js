import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const Details = ({ route, navigation }) => {
  //UTILIZE THE PARAM ID TO FETCH THE DESIRED SHOP DETAILS
  const { id } = route.params;

  return (
    <View>
      <Text>Details page</Text>
    </View>
  );
};

export default Details;
