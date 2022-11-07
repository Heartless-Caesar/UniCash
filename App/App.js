import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./Routes";
import Header from "./Componentes/Header";
import { StatusBar } from "expo-status-bar";

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />

      <Routes />
    </NavigationContainer>
  );
}
export default App;
