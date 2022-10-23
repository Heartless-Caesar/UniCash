import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Tabs from './tabs'
import cupons from '../assets/data/cupons.json'
import Cupom from './cupom'

const Cupons = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            <Tabs navigation={navigation} />
            <View style={styles.innerContainer}>
                <FlatList
                    data={cupons}
                    keyExtractor={(item, index) => {
                        return item.id
                    }}
                    renderItem={(itemData) => {
                        return <Cupom {...itemData.item} />
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 4,
        backgroundColor: '#cccccc',
    },
    innerContainer: {
        flex: 1,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: '#f5f5f5',
        //minHeight: 550,
        marginBottom: 10,
    },
})

export default Cupons
