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
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 0,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    padding: 10,
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
                                backgroundColor: focused ? '#941213' : '#323F6E',
                                height: 60,
                                width: 60,
                                borderRadius: 10
                                //height: focused ? 140 : 60
                            }}
                        >
                            <Image
                                source={require('../App/assets/Home.png')}
                            />
                            <Text>Home</Text>
                        </View>
                    ),

                }}
            />
            < Tab.Screen
                name="Extrato"
                component={Extrato}
            />
        </Tab.Navigator >
    );
} export default Routes;