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

export default function Header() {

    //dados do usuario necessarios na tela inicial.
    const usuario =
    {
        id: 6,
        nome: "Donnie",
        curso: "Eng. de Software",
        saldo: 4560
    };

    return (
        <>
            <View
                style={styles.Header}
            >
                <View
                    style={styles.InLine}
                >
                    <Image
                        style={styles.FotoPerfil}
                        source={require('../assets/Perfil.png')}
                    />
                    <View
                        style={styles.DadosPessoais}
                    >
                        <Text
                            style={styles.NomeAluno}
                        >
                            Olá, {usuario.nome}
                        </Text>
                        <Text
                            style={styles.CursoAluno}
                        >
                            {usuario.curso}
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/Notificacao.png')}
                            style={{
                                width: 18,
                                height: 20,
                                marginTop: 20
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <Text
                    style={styles.SaudoDisponivel}
                >
                    Saldo disponível:
                </Text>
                <View
                    style={styles.InLine}
                >
                    <View
                        style={styles.SaldoBox}
                    >
                        <Image
                            source={require('../assets/UniCoin-2.png')}
                        />
                        <Text
                            style={styles.SaudoAluno}
                        >
                            {usuario.saldo}
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/QR.png')}
                            style={{
                                width: 20,
                                height: 20,
                                marginTop: 4,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    Header: {
        padding: 20,
        paddingTop: Platform.OS === 'android' ? 50 : 0,
        backgroundColor: "#212B4F",
        borderBottomColor: "#FE3032",
        borderBottomWidth: 5
    },
    FotoPerfil: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    InLine: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    DadosPessoais: {
        width: 180,
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 10,
    },
    NomeAluno: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "500",
    },
    CursoAluno: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "300"
    },
    SaudoDisponivel: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "500",
        marginTop: 10,
    },
    SaldoBox: {
        marginTop: 4,
        flexDirection: "row",
    },
    SaudoAluno: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "500",
        marginHorizontal: 10,
    }
});