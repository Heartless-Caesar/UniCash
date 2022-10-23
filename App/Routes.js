import { React } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Paginas/Home.js";
import Extrato from "./Paginas/Extrato.js";
import { Global } from "./Styles.js";

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    height: 80,
                    backgroundColor: '#232D52',
                    // borderTopLeftRadius: 4,
                    // borderTopRightRadius: 4,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: focused ? '#17A7E0' : '#232D52',
                                height: focused ? 100 : 40,
                                width: focused ? 80 : 40,
                                borderRadius: 4,
                            }}
                        >
                            <Image
                                source={require('../App/assets/Home.png')}
                                style={{ width: 25, height: 27 }}
                            />
                        </View>
                    ),
                }}
            />
            < Tab.Screen
                name="Extrato"
                component={Extrato}
                options={{
                    //headerShown: false,
                    headerStyle: {
                        backgroundColor: "#232D53",
                    },
                    headerTitleStyle: {
                        fontWeight: "400",
                      },
                    headerTintColor: "#FFFFFF", //Cor do titulo do header.
                    headerTitleAlign: "center", //alinhamento do titulo do header.
                    headerRight: () => (
                        <TouchableOpacity
                            style={styles.icone}
                        >
                            <Image
                                source={require('../App/assets/Export.png')}
                                style={{ width: 20, height: 20 }}
                            />
                        </TouchableOpacity>
                      ), //Botão direito do header.
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: focused ? '#17A7E0' : '#232D52',
                                height: focused ? 100 : 40,
                                width: focused ? 80 : 40,
                                borderRadius: 4,
                            }}
                        >
                            <Image
                                source={require('../App/assets/Extrato.png')}
                                style={{ width: 21, height: 27 }}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator >
    );
}
const styles = StyleSheet.create({
    icone: {
        margin: 20
    }
});
export default Routes;