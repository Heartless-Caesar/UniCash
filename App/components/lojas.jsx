import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import shops from '../assets/data/shops'
import Loja from './loja'
import Tabs from './tabs'
const Lojas = ({ navigation }) => {
    const [lojas, setLojas] = useState([])

    useEffect(() => {
        fetchLojas()
    }, [])

    const fetchLojas = /*async*/ () => {
        // try {
        //   const response = await fetch(
        //     "https://jsonplaceholder.typicode.com/users",
        //     { method: "GET" }
        //   );
        //   const json = await response.json();
        //   console.log(json);
        // } catch (error) {
        //   console.log(error);
        // }
        setLojas(shops)
    }

    return (
        <View style={styles.lojasContainer}>
            <Tabs navigation={navigation} />
            <View
                style={{
                    flex: 5,
                    paddingBottom: 10,
                    borderBottomRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    backgroundColor: '#f5f5f5',
                    marginHorizontal: 10,
                }}
            >
                <FlatList
                    data={lojas}
                    automaticallyAdjustContentInsets={false}
                    contentContainerStyle={{ borderRadius: 5 }}
                    renderItem={(itemData) => {
                        return (
                            <Loja
                                name={itemData.item.name}
                                category={itemData.item.category}
                                adress={itemData.item.adress}
                                icon={itemData.item.icon}
                                id={itemData.item.id}
                                navigate={navigation}
                            />
                        )
                    }}
                    keyExtractor={(item, index) => {
                        return item.id
                    }}
                    style={styles.list}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    lojasContainer: {
        flex: 5,
        borderRadius: 5,
        backgroundColor: '#cccccc',
        paddingBottom: 10,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    list: {
        borderRadius: 5,
        marginBottom: 5,
    },
})
export default Lojas
