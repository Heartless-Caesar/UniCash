import { React } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Paginas/Home.js'
import Details from './Paginas/Details.js'
import Cupons from './components/cupons.jsx'
import Lojas from './components/lojas.jsx'
import Header from './components/header/header.jsx'
import { StatusBar } from 'expo-status-bar'

export default function App() {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Header />
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="Shops"
                    component={Lojas}
                    options={{ headerTitle: '' }}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{ headerTitle: '' }}
                />
                <Stack.Screen
                    name="Cupons"
                    component={Cupons}
                    options={{ headerTitle: '' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
