import { SafeAreaView, View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <SafeAreaView>
        <Text>Resgate funcionando!</Text>
      </SafeAreaView>
      <Button
        title="Go to Resgate"
        onPress={() => navigation.navigate("Resgate")}
      />
    </View>
  );
}
