import { SafeAreaView, View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={{ marginTop: 20 }}>
      <SafeAreaView style={{ marginBottom: 20 }}>
        <Text style={{ textAlign: "center", marginTop: 50 }}>
          Home funcionando!
        </Text>
      </SafeAreaView>
      <View style={{ marginLeft: 80, height: 200, width: 200 }}>
        <Button
          title="Go to Shops"
          onPress={() => navigation.navigate("Shops")}
        />
      </View>
    </View>
  );
}
