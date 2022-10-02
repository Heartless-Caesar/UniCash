import { React } from "react";
import { TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Paginas/Home.js";
import Extrato from "./Paginas/Extrato.js";

// function Tabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Extrato" component={Extrato} />
//     </Tab.Navigator>
//   );
// }

// function Stack() {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           options={{headerShown: false}}
//           component={Home}
//         />
//     </Stack.Navigator>
//   );
// }

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
      </Stack.Navigator> */}
      <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Extrato" component={Extrato} />
    </Tab.Navigator>
    </NavigationContainer >
  );
} export default App;