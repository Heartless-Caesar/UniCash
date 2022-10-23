import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    FlatList,
    Text,
    Image,
    TouchableOpacity,
    Platform
} from "react-native";

return (
    <>
        <View
            style={styles.Header}
        >
            <View>
                <Image
                    source={require('../assets/Perfil.png')}
                />
            </View>
            <View>
                <Text>
                    Olá, Nome
                </Text>
                <Text>
                    Curso
                </Text>
            </View>
            <TouchableOpacity>
                <Image
                    source={require('../assets/runner.png')}
                />
            </TouchableOpacity>
        </View>
        <View>
            <Text>
                Saldo disponível:
            </Text>
            <View>
                <Image
                    source={require('../assets/UniCoin-2.png')}
                />
                <Text>
                    Saldo
                </Text>
            </View>
        </View>
    </>
)
const styles = StyleSheet.create({
    Header: {
        padding: 20,
        paddingTop: Platform.OS === 'android' ? 50 : 0,
        backgroundColor: "#212B4F",
    }
});