import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../Paginas/Home'

const Tab = createBottomTabNavigator()

const NavigationTab = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    navigation.navigate('Home')
                }}
            >
                <View style={styles.sub_item}>
                    <View style={styles.item}>
                        <Icon
                            name="home-outline"
                            size={20}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.icon_text}>Home</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={styles.sub_item}>
                    <View style={styles.item}>
                        <Icon
                            name="md-repeat-outline"
                            size={20}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.icon_text}>Transferência</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={styles.sub_item}>
                    <View style={styles.item}>
                        <Icon
                            name="briefcase-outline"
                            size={20}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.icon_text}>Utilizar pontos</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={styles.sub_item}>
                    <View style={styles.item}>
                        <Icon
                            name="document-text-outline"
                            size={20}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.icon_text}>Extrato</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
    },
    icon: {
        color: '#f5f5f5',
    },
    item: {
        backgroundColor: '#0047AB',
        padding: 5,
        borderRadius: 5,
        maxWidth: 30,
    },
    sub_item: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon_text: {
        fontSize: 10,
    },
})
export default NavigationTab
