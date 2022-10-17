import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    FlatList,
    Text,
    Image
} from "react-native";
import { Global } from "../Styles";
import { LinearGradient } from 'expo-linear-gradient';
import SwitchSelector from "react-native-switch-selector";

export default function Home({ navigation }) {

    const [DATA, setData] = useState(null);

    useEffect(() => {
        fetch('https://fake-api-unicash.herokuapp.com/user')
            .then(response => response.json())
            .then((response) => {
                setData(response);
                console.log(response);
            })
    }, []);

    const rankingOpt = [
        { label: "Ranking Geral", value: 0 },
        { label: "Por Curso", value: 1 },
    ]; //Seletor do ranking.

    const [seletor, setSeletor] = useState(null);

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>

                    <View
                        style={styles.Card}
                    >
                        <Text
                            style={styles.Titulo}
                        >
                            Meu progresso
                        </Text>
                        <LinearGradient
                            // Barra de progresso.
                            style={styles.Barra}
                            colors={['#FE3032', '#AF596D', '#5E82AA', '#17A7E0']}
                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                        >
                            <Text
                                style={styles.TextoBarra}
                            >
                                X%
                            </Text>
                        </LinearGradient>
                        <View
                            style={styles.ViewTextosBarra}
                        >
                            <Text
                                style={styles.Titulo}
                            >
                                0
                            </Text>
                            <Text
                                style={styles.Titulo}
                            >
                                5000
                            </Text>
                        </View>
                    </View>

                    {/*Lista de Rankings  */}
                    <View
                        style={styles.ViewPai}
                    >
                        <View
                            style={styles.ViewFilha}
                        >
                            <Text
                                style={styles.Titulo}
                            >
                                Ranking de UniCoins
                            </Text>
                        </View>
                    </View>

                    <SwitchSelector
                        style={styles.Select}
                        height={40}
                        buttonColor={"#17A7E0"}
                        backgroundColor={"#FFFFFF"}
                        fontSize={15}
                        bold={true}
                        borderRadius={0}
                        textColor={"#484848"}
                        initial={0}
                        options={rankingOpt}
                        onPress={(seletor) => setSeletor(seletor)}
                    />

                    {
                        (seletor == 1) ? (
                            <>
                                <FlatList
                                    style={styles.FlatList}
                                    data={DATA}
                                    keyExtractor={(item) => { return item.id.toFixed() }}
                                    renderItem={({ item }) => (
                                        <View style={styles.ListaRanking}>
                                            <Image
                                                style={styles.FotoPerfil}
                                                //source={url: item.FotoPerfil}
                                                source={require('../assets/Perfil.png')}
                                            />
                                            <View style={styles.View}>
                                                <Text
                                                    style={styles.Nome}
                                                >
                                                    {item.nome}
                                                </Text>
                                                <Text
                                                    style={styles.Curso}
                                                >
                                                    {item.curso}
                                                </Text>
                                            </View>
                                            <Image
                                                source={require('../assets/UniCoin.png')}
                                                style={styles.Logo}
                                            />
                                            <Text
                                                style={styles.Saldo}
                                            >
                                                {item.saldo}
                                            </Text>
                                        </View>
                                    )}
                                />
                            </>
                        ) : (
                            <>
                                <FlatList
                                    style={styles.FlatList}
                                    data={DATA}
                                    keyExtractor={(item) => { return item.id.toFixed() }}
                                    renderItem={({ item }) => (
                                        <View style={styles.ListaRanking}>
                                            <Image
                                                style={styles.FotoPerfil}
                                                //source={url: item.FotoPerfil}
                                                source={require('../assets/Perfil.png')}
                                            />
                                            <View style={styles.View}>
                                                <Text
                                                    style={styles.Nome}
                                                >
                                                    {item.nome}
                                                </Text>
                                                <Text
                                                    style={styles.Curso}
                                                >
                                                    {item.curso}
                                                </Text>
                                            </View>
                                            <Image
                                                source={require('../assets/UniCoin.png')}
                                                style={styles.Logo}
                                            />
                                            <Text
                                                style={styles.Saldo}
                                            >
                                                {item.saldo}
                                            </Text>
                                        </View>
                                    )}
                                />
                            </>
                        )
                    }
                </ScrollView>
            </SafeAreaView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "D9D9D9",
    },
    Card: {
        marginTop: 20,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: "#FFFFFF",
        borderBottomStartRadius: 8,
        borderTopEndRadius: 8,
    },
    Barra: {
        margin: 10,
        height: 40,
        borderRadius: 8,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    TextoBarra: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold"
    },
    ViewTextosBarra: {
        margin: 10,
        marginTop: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    ViewPai: {
        height: 80,
        marginTop: 20,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: "#FFFFFF",
        borderBottomStartRadius: 8,
        borderTopEndRadius: 8,
    },
    ViewFilha: {
        paddingVertical: 20,
        borderBottomWidth: 2,
        borderBottomColor: "#ECECEC"
    },
    Titulo: {
        fontSize: 16,
        fontWeight: "600",
        color: "#828282"
    },
    Select: {
        marginHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: "#FFFFFF"
    },
    FlatList: {
        marginHorizontal: 10,
        //borderRadius: 10,
        backgroundColor: "#FFFFFF"
    },
    ListaRanking: {
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    FotoPerfil: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    View: {
        flexDirection: "column",
        alignItems: "flex-start",
        width: 120,
    },
    Curso: {
        fontSize: 12,
        color: "#484848",
        fontWeight: "500"
    },
    Nome: {
        fontSize: 18,
        color: "#484848",
        fontWeight: "500"
    },
    Logo: {
        width: 20,
    },
    Saldo: {
        fontSize: 16,
        fontWeight: "500",
        color: "#484848",
    },
});