import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    FlatList,
    Text,
    Image
} from "react-native";
import { Global } from "../Styles";
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
    ];

    const [slc, setSlc] = useState(null);

    return (
        <View style={styles.container}>
            <SafeAreaView>

                <SwitchSelector
                    style={styles.Select}
                    height={40}
                    buttonColor={"#941213"}
                    backgroundColor={"#FFFFFF"}
                    borderRadius={10}
                    initial={0}
                    options={rankingOpt}
                    onPress={(slc) => setSlc(slc)}
                />

                {/* <View
                    height={20}
                    marginHorizontal={20}
                    marginVertical={-10}
                    flexDirection={"row"}
                >
                    {(slc == 1) ?
                        <View
                            width={"50%"}
                            backgroundColor={"#941213"}
                        >
                        </View>
                        : <View
                            width={"50%"}
                            backgroundColor={"#FFFFFF"}
                        >
                        </View>
                    }
                    {(slc == 2) ?
                        <View
                            width={"50%"}
                            backgroundColor={"#941213"}
                        >
                        </View>
                        : <View
                            width={"50%"}
                            backgroundColor={"#FFFFFF"}
                        >
                        </View>
                    }
                </View> */}

                {
                    (slc == 1) ? (
                        <>
                            <FlatList
                                style={styles.FlatList}
                                data={DATA}
                                keyExtractor={(item) => { return item.id.toFixed() }}
                                renderItem={({ item }) => (
                                    <View style={styles.ListaRanking}>
                                        <View style={styles.View}>
                                            <Text
                                                style={styles.Nome}
                                            >
                                                {item.nome}
                                            </Text>
                                            <Text
                                                style={styles.Texto}
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
                                        <View style={styles.View}>
                                            <Text
                                                style={styles.Nome}
                                            >
                                                {item.nome}
                                            </Text>
                                            <Text
                                                style={styles.Texto}
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

            </SafeAreaView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "D9D9D9",
        marginVertical: 30
    },
    Select: {
        margin: 20,
        marginVertical: 10
    },
    FlatList: {
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#FFFFFF"
    },
    ListaRanking: {
        height: 50,
        borderBottomWidth: 1.5,
        borderBottomColor: "#4B4B4C",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    View: {
        flexDirection: "column",
        alignItems: "flex-start",
        width: 120,
    },
    Texto: {
        fontSize: 12,
        color: "#4B4B4C",
    },
    Nome: {
        fontSize: 12,
        color: "#4B4B4C",
        fontWeight: "600"
    },
    Logo: {
        width: 20,
    },
    Saldo: {
        fontSize: 18,
        fontWeight: "600",
        color: "#4B4B4C",
    },
});