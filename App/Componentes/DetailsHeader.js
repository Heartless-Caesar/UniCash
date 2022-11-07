import { View, Text, Pressable, TextInput } from "react-native";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import React, { useState } from "react";

const DetailsHeader = (props) => {
  const [text, setText] = useState("");
  return (
    <View style={{ backgroundColor: "#212B4F", paddingTop: "10%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "10%",
        }}
      >
        <Pressable onPress={() => props.navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            color="#f5f5f5"
            size={40}
          />
        </Pressable>
        <Text style={{ color: "#f5f5f5" }}>{props.shopName}</Text>
        <SimpleLineIcons
          name="bag"
          color="#f5f5f5"
          size={30}
          style={{ marginRight: "3%" }}
        />
      </View>
      <View>
        <TextInput
          style={{
            height: 50,
            width: "90%",
            padding: 5,
            backgroundColor: "#f5f5f5",
            marginHorizontal: "5%",
            marginBottom: "2%",
            borderRadius: 5,
          }}
          value={text}
          editable
          placeholder="Procurar..."
          onChange={(e) => setText(e.target.value)}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: 10,
        }}
      >
        <Text style={{ color: "#f5f5f5" }}>Tradicionais</Text>
        <Text style={{ color: "#f5f5f5" }}>Bebidas</Text>
      </View>
    </View>
  );
};

export default DetailsHeader;
