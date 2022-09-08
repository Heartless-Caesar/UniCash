import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Paginas/Home.js";
import Resgate from "./Paginas/Resgate.js";
import Details from "./Paginas/Details.js";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Resgate"
          component={Resgate}
          options={{ headerTitle: "" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerTitle: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
