import { React } from "react";
import {
    StyleSheet,
    View,
    Image,
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
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: focused ? '#17A7E0' : '#232D52',
                                height: focused? 100 : 40,
                                width: focused? 80 : 40,
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
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: focused ? '#17A7E0' : '#232D52',
                                height: focused? 100 : 40,
                                width: focused? 80 : 40,
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
} export default Routes;