import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import products from '../assets/data/produtos'
import { FlatGrid } from 'react-native-super-grid'

const Product = (props) => {
    const [produtos, setProdutos] = useState([])

    const getShopProducts = () => {
        let produtos = products.filter((item) => item.shopId == props.id)
        return produtos
    }
    useEffect(() => {
        const shopProducts = getShopProducts()
        setProdutos(shopProducts)
    }, [])

    return (
        <View style={styles.list}>
            <FlatGrid
                itemDimension={50}
                spacing={30}
                data={produtos}
                renderItem={(itemData) => {
                    return (
                        <View style={styles.listItem}>
                            <Image
                                source={{ uri: itemData.item.iconUrl }}
                                style={styles.image}
                            />
                            <Text style={styles.listText}>
                                {itemData.item.price}
                            </Text>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => {
                    return item.productId
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 50,
        width: 50,
        borderRadius: 5,
    },
    listItem: {
        display: 'flex',
        justifyContent: 'center',
    },
    listText: {
        textAlign: 'center',
    },
    list: {
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 100,
        paddingBottom: 150,
    },
})

export default Product
