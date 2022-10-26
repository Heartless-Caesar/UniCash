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
import { LinearGradient } from 'expo-linear-gradient';
import SwitchSelector from "react-native-switch-selector";
import Header from "../Componentes/Header";
export default function Home({ navigation }) {

  const [DATA, setData] = useState(null);
  //Dados da requisição.
  useEffect(() => {
    fetch('https://fake-api-unicash.herokuapp.com/user')
      .then(response => response.json())
      .then((response) => {
        setData(response);
        console.log(response);
      })
  }, []);

  //Constantes relacionadas aos componentes.
  const rankingOpt = [
    { label: "Ranking Geral", value: 0 },
    { label: "Por Curso", value: 1 },
  ]; //Seletor do ranking.
  const [seletor, setSeletor] = useState(0);

  //dados do usuario necessarios na tela inicial.
  const usuario =
  {
    id: 6,
    nome: "Donnie",
    curso: "Eng. de Software",
    saldo: 4560
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>

        <Header />

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
          (seletor == 0) ? (
            <FlatList
              style={styles.FlatList}
              data={DATA}
              keyExtractor={(item) => { return item.id.toFixed() }}
              renderItem={({ item }) => (
                <>
                  {
                    (item.id === usuario.id) ? (
                      < LinearGradient
                        style={{ padding: 4 }}
                        colors={['#17A7E0', '#5E82AA', '#AF596D', '#FE3032']}
                        start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                      >
                        <View
                          style={styles.ListaRankingID}
                        >
                          <Image
                            style={styles.FotoPerfil}
                            source={{ uri: item.img }}
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
                      </LinearGradient>
                    ) : (
                      <View style={styles.ListaRanking}>

                        <Image
                          style={styles.FotoPerfil}
                          source={{ uri: item.img }}
                        //source={require('../assets/Perfil.png')}
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
                    )
                  }
                </>
              )}
            />
          ) : (
            <FlatList
              style={styles.FlatList}
              data={DATA}
              keyExtractor={(item) => { return item.id.toFixed() }}
              renderItem={({ item }) => (
                <>
                  {
                    (item.curso == usuario.curso) ? (
                      <>
                        {
                          (item.id === usuario.id) ? (
                            < LinearGradient
                              style={{ padding: 4 }}
                              colors={['#17A7E0', '#5E82AA', '#AF596D', '#FE3032']}
                              start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            >
                              <View
                                style={styles.ListaRankingID}
                              >
                                <Image
                                  style={styles.FotoPerfil}
                                  source={{ uri: item.img }}
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
                            </LinearGradient>
                          ) : (
                            <View style={styles.ListaRanking}>

                              <Image
                                style={styles.FotoPerfil}
                                source={{ uri: item.img }}
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
                          )
                        }
                      </>
                    ) : (
                      <>
                      </>
                    )
                  }
                </>
              )}
            />
          )
        }
      </View >
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "D9D9D9"
  },
  Card: {
    margin: 20,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 8
  },
  End: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  ViewTextosBarra: {
    margin: 10,
    marginTop: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly"
  },
  ViewPai: {
    height: 80,
    margin: 20,
    marginBottom: 0,
    padding: 14,
    backgroundColor: "#FFFFFF",
    borderBottomStartRadius: 8,
    borderTopEndRadius: 8,
  },
  ViewFilha: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC"
  },
  Titulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#828282"
  },
  Select: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF"
  },
  FlatList: {
    marginHorizontal: 20,
    marginBottom: 80,
    //borderRadius: 10,
    backgroundColor: "#FFFFFF"
  },
  ListaRanking: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  ListaRankingID: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#FFFFFF"
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
    fontSize: 14,
    color: "#484848",
    fontWeight: "500"
  },
  CursoUsuario: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "500"
  },
  Nome: {
    fontSize: 18,
    color: "#484848",
    fontWeight: "500"
  },
  NomeUsuario: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "500"
  },
  Saldo: {
    fontSize: 20,
    fontWeight: "500",
    color: "#484848",
  },
  SaldoUsuario: {
    fontSize: 20,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  Logo: {
    width: 20,
  },
  Runner: {
    marginTop: 10,
    width: 30
  },
});