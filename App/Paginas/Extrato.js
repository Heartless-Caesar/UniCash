import { React, useEffect, useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
    FlatList,
    Text,
    Image
} from "react-native";
import SwitchSelector from "react-native-switch-selector";

export default function Extrato({ navigation }) {

    const rankingOpt = [
        { label: "Tudo", value: 0 },
        { label: "Entrada", value: 1 },
        { label: "Saída", value: 2 }
    ]; //Seletor do ranking.

    const [seletor, setSeletor] = useState(0);

    //Dados de um Extrato Fake, para integrar a uma API real necessidade repetir
    // um useEfect semelhante ão da tela Home.
    const EXTRATO = [
        {
            id: '1',
            valor: 500.00,
            data: '25/10/2022',
            hora: '19:30',
            tipo: 'resgate',
            origem: {
                nome: "UniEvangélica",
            },
        },
        {
            id: '2',
            valor: -160.00,
            data: '24/10/2022',
            hora: '14:45',
            tipo: 'envio',
            destinatario: {
                nome: "José Algusto da Silva",
                curso: "Eng. Civil",
                matricula: "2020XXX"
            },
        },
        {
            id: '3',
            valor: 150.00,
            data: '24/10/2022',
            hora: '16:59',
            tipo: 'recebido',
            origem: {
                nome: "Allan Turing",
                curso: "Eng. de Software",
                matricula: "2020XXX"
            },
        },
        {
            id: '4',
            valor: -250.00,
            data: '23/10/2022',
            hora: '12:39',
            tipo: 'pagamento',
            destinatario: {
                nome: "Ultra Coffee UniEvangelica ",
                local: "UniEvangélica",
            },
        },
        {
            id: '5',
            valor: 250.00,
            data: '23/10/2022',
            hora: '17:30',
            tipo: 'resgate',
            origem: {
                nome: "UniEvangélica",
            },
        },
        {
            id: '6',
            valor: -450.00,
            data: '22/10/2022',
            hora: '12:22',
            tipo: 'pagamento',
            destinatario: {
                nome: "Ultra Coffee UniEvangelica ",
                local: "UniEvangélica",
            },
        },
        {
            id: '7',
            valor: 180.00,
            data: '20/10/2022',
            hora: '16:00',
            tipo: 'recebido',
            origem: {
                nome: "Antony Stark",
                curso: "Eng. de Software",
                matricula: "2020XXX"
            },
        },
        {
            id: '8',
            valor: 1350.00,
            data: '24/10/2022',
            hora: '23:45',
            tipo: 'recebido',
            origem: {
                nome: "Elvis",
                curso: "Eng. de Software",
                matricula: "1959XXX"
            },
        },
        {
            id: '9',
            valor: 2500.00,
            data: '16/10/2022',
            hora: '19:30',
            tipo: 'resgate',
            origem: {
                nome: "UniEvangélica",
            },
        },
        {
            id: '10',
            valor: -360.00,
            data: '16/10/2022',
            hora: '14:45',
            tipo: 'envio',
            destinatario: {
                nome: "José Algusto da Silva",
                curso: "Eng. Civil",
                matricula: "2020XXX"
            },
        },
    ];
    //Fim dados Fakes

    //Dados da requisição.
    // useEffect(() => {
    //     fetch('https://fake-api-unicash.herokuapp.com/user')
    //         .then(response => response.json())
    //         .then((response) => {
    //             setData(response);
    //             console.log(response);
    //         })
    // }, []);

    return (
        <View>
            <SafeAreaView>
                <View
                    style={styles.container}
                >
                    <View
                        style={{
                            borderBottomColor: "#FE3032",
                            borderBottomWidth: 5,
                        }}
                    >
                        <SwitchSelector
                            height={40}
                            buttonColor={"#17A7E0"}
                            backgroundColor={"#232D53"}
                            fontSize={15}
                            bold={true}
                            borderRadius={0}
                            textColor={"#FFFFFF"}
                            initial={0}
                            options={rankingOpt}
                            onPress={(seletor) => setSeletor(seletor)}
                        />
                    </View>

                    {
                        (seletor == 0) ? (
                            <FlatList
                                style={styles.FlatList}
                                data={EXTRATO}
                                keyExtractor={(item) => { return item.id }}
                                renderItem={({ item }) => (
                                    <View
                                        style={styles.card}
                                    >
                                        {
                                            (item.tipo == "resgate") ? (
                                                <>
                                                    <Image
                                                        style={styles.iconeRP}
                                                        source={require('../assets/Resgate.png')}
                                                    />
                                                    <View
                                                        style={styles.info}
                                                    >
                                                        <Text
                                                            style={styles.valor}
                                                        >
                                                            {item.valor} UC
                                                        </Text>
                                                        <Text
                                                            style={styles.tipo}
                                                        >
                                                            Resgate realizado
                                                        </Text>
                                                        <Text
                                                            style={styles.origemDestino}
                                                        >
                                                            {item.origem.nome}
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={styles.TransferenciaData}
                                                    >
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.data}
                                                        </Text>
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.hora}
                                                        </Text>
                                                    </View>
                                                </>
                                            ) : (item.tipo == "pagamento") ? (
                                                <>
                                                    <Image
                                                        style={styles.iconeRP}
                                                        source={require('../assets/Pagamento.png')}
                                                    />
                                                    <View
                                                        style={styles.info}
                                                    >
                                                        <Text
                                                            style={styles.valor}
                                                        >
                                                            {item.valor} UC
                                                        </Text>
                                                        <Text
                                                            style={styles.tipo}
                                                        >
                                                            Pagamaneto realizado
                                                        </Text>
                                                        <Text
                                                            style={styles.origemDestino}
                                                        >
                                                            {item.destinatario.nome}
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={styles.TransferenciaData}
                                                    >
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.data}
                                                        </Text>
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.hora}
                                                        </Text>
                                                    </View>
                                                </>
                                            ) : (item.tipo == "recebido") ? (
                                                <>
                                                    <Image
                                                        style={styles.iconeES}
                                                        source={require('../assets/Recebido.png')}
                                                    />
                                                    <View
                                                        style={styles.info}
                                                    >
                                                        <Text
                                                            style={styles.valor}
                                                        >
                                                            {item.valor} UC
                                                        </Text>
                                                        <Text
                                                            style={styles.tipo}
                                                        >
                                                            Transferência recebida
                                                        </Text>
                                                        <Text
                                                            style={styles.origemDestino}
                                                        >
                                                            {item.origem.nome} - {item.origem.matricula}
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={styles.TransferenciaData}
                                                    >
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.data}
                                                        </Text>
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.hora}
                                                        </Text>
                                                    </View>
                                                </>
                                            ) : (item.tipo == "envio") ? (
                                                <>
                                                    <Image
                                                        style={styles.iconeES}
                                                        source={require('../assets/Envio.png')}
                                                    />
                                                    <View
                                                        style={styles.info}
                                                    >
                                                        <Text
                                                            style={styles.valor}
                                                        >
                                                            {item.valor} UC
                                                        </Text>
                                                        <Text
                                                            style={styles.tipo}
                                                        >
                                                            Transferência realizada
                                                        </Text>
                                                        <Text
                                                            style={styles.origemDestino}
                                                        >
                                                            {item.destinatario.nome}
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={styles.TransferenciaData}
                                                    >
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.data}
                                                        </Text>
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.hora}
                                                        </Text>
                                                    </View>
                                                </>
                                            ) : <>
                                            </>
                                        }
                                    </View>
                                )}
                            />
                        ) : (seletor == 1) ? (
                            <FlatList
                                style={styles.FlatList}
                                data={EXTRATO}
                                keyExtractor={(item) => { return item.id }}
                                renderItem={({ item }) => (
                                    <View
                                        style={styles.card}
                                    >
                                        {
                                            (item.tipo == "resgate") ? (
                                                <>
                                                    <Image
                                                        style={styles.iconeRP}
                                                        source={require('../assets/Resgate.png')}
                                                    />
                                                    <View
                                                        style={styles.info}
                                                    >
                                                        <Text
                                                            style={styles.valor}
                                                        >
                                                            {item.valor} UC
                                                        </Text>
                                                        <Text
                                                            style={styles.tipo}
                                                        >
                                                            Resgate realizado
                                                        </Text>
                                                        <Text
                                                            style={styles.origemDestino}
                                                        >
                                                            {item.origem.nome}
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={styles.TransferenciaData}
                                                    >
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.data}
                                                        </Text>
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.hora}
                                                        </Text>
                                                    </View>
                                                </>
                                            ) : (item.tipo == "recebido") ? (
                                                <>
                                                    <Image
                                                        style={styles.iconeES}
                                                        source={require('../assets/Recebido.png')}
                                                    />
                                                    <View
                                                        style={styles.info}
                                                    >
                                                        <Text
                                                            style={styles.valor}
                                                        >
                                                            {item.valor} UC
                                                        </Text>
                                                        <Text
                                                            style={styles.tipo}
                                                        >
                                                            Transferência recebida
                                                        </Text>
                                                        <Text
                                                            style={styles.origemDestino}
                                                        >
                                                            {item.origem.nome} - {item.origem.matricula}
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={styles.TransferenciaData}
                                                    >
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.data}
                                                        </Text>
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.hora}
                                                        </Text>
                                                    </View>
                                                </>
                                            ) : <>
                                            </>
                                        }
                                    </View>
                                )}
                            />
                        ) : (seletor == 2) ? (
                            <FlatList
                                style={styles.FlatList}
                                data={EXTRATO}
                                keyExtractor={(item) => { return item.id }}
                                renderItem={({ item }) => (
                                    <View
                                        style={styles.card}
                                    >
                                        {
                                            (item.tipo == "pagamento") ? (
                                                <>
                                                    <Image
                                                        style={styles.iconeRP}
                                                        source={require('../assets/Pagamento.png')}
                                                    />
                                                    <View
                                                        style={styles.info}
                                                    >
                                                        <Text
                                                            style={styles.valor}
                                                        >
                                                            {item.valor} UC
                                                        </Text>
                                                        <Text
                                                            style={styles.tipo}
                                                        >
                                                            Pagamaneto realizado
                                                        </Text>
                                                        <Text
                                                            style={styles.origemDestino}
                                                        >
                                                            {item.destinatario.nome}
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={styles.TransferenciaData}
                                                    >
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.data}
                                                        </Text>
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.hora}
                                                        </Text>
                                                    </View>
                                                </>
                                            ) : (item.tipo == "envio") ? (
                                                <>
                                                    <Image
                                                        style={styles.iconeES}
                                                        source={require('../assets/Envio.png')}
                                                    />
                                                    <View
                                                        style={styles.info}
                                                    >
                                                        <Text
                                                            style={styles.valor}
                                                        >
                                                            {item.valor} UC
                                                        </Text>
                                                        <Text
                                                            style={styles.tipo}
                                                        >
                                                            Transferência realizada
                                                        </Text>
                                                        <Text
                                                            style={styles.origemDestino}
                                                        >
                                                            {item.destinatario.nome}
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={styles.TransferenciaData}
                                                    >
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.data}
                                                        </Text>
                                                        <Text
                                                            style={styles.Data}
                                                        >
                                                            {item.hora}
                                                        </Text>
                                                    </View>
                                                </>
                                            ) : <>
                                            </>
                                        }
                                    </View>
                                )}
                            />
                        ) : <>
                        </>
                    }

                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "D9D9D9",
    },
    FlatList: {
        // position: "relative"
        marginBottom: 80,
    },
    card: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        backgroundColor: "#FFFFFF",
        //borderRadius: 8
    },
    iconeRP: {
        margin: 10,
        height: 25,
        width: 20
    },
    iconeES: {
        margin: 10,
        height: 20,
        width: 25
    },
    info: {
        margin: 10,
        width: 180
    },
    // valorEntrada: {
    //     fontSize: 18,
    //     color: "#17A7E0",
    //     fontWeight: "500",
    // },
    // tipoEntrada: {
    //     fontSize: 14,
    //     color: "#17A7E0",
    //     fontWeight: "500",
    // },
    valor: {
        fontSize: 18,
        color: "#484848",
        fontWeight: "500",
    },
    tipo: {
        fontSize: 14,
        color: "#484848",
        fontWeight: "500",
    },
    origemSaida: {
        fontSize: 14,
        color: "#7E7E7E",
        fontWeight: "500",
    },
    TransferenciaData: {
        margin: 10,
        //paddingVertical: 10,
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    Data: {
        fontSize: 16,
        color: "#7E7E7E",
        fontWeight: "500",
    },
});