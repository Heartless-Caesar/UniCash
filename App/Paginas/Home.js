import { React, useEffect } from "react";
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

const [DATA, setData] = useState(null);

useEffect(() => {
    fetch('http://url/ranking')
        .then(response => response.json())
        .then((response) => {
            setData(response);
            console.log(response);
        })
}, []);

const rankingOpt = [
    { label: "Ranking Geral", value: 1 },
    { label: "Por Curso", value: 2 },
];

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.Component}>
                    <SwitchSelector
                        height={40}
                        buttonColor={"#941213"}
                        backgroundColor={"#FFFFFF"}
                        borderRadius={20}
                        initial={0}
                        options={rankingOpt}
                    />
                </View>

                <FlatList
                    data={DATA}
                    keyExtractor={(item) => { return item.id.toFixed() }}
                    renderItem={({ item }) => (
                        <View style={styles.ListaRanking}>
                            <View>
                                <Text
                                    style={styles.Texto}
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

            </SafeAreaView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "D9D9D9",
        marginVertical: 30,
    },
    Component: {
        margin: 10,
        marginTop: 20,
    },
    ListaRanking: {
        borderTopWidth: 1,
        borderTopColor: "#4B4B4C",
        borderBottomWidth: 1,
        borderBottomColor: "#4B4B4C",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4B4B4C",
    },
    View: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    Texto: {
        fontSize: 12,
        color: "#4B4B4C",
    },
    Logo: {
        width: 14,
        height: 20,
    },
    Saldo: {
        fontSize: 18,
        fontWeight: "500",
        color: "#4B4B4C",
    },
});