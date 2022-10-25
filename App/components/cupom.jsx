import { View, Text, StyleSheet, Pressable, Image, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import CuponModal from './cupon_modal'

import allShops from '../assets/data/shops'

const Cupom = (props) => {
    const [visible, setVisible] = useState(false)
    const [shop, setShop] = useState({})

    const getShop = (shopId) => {
        return allShops.find((shop) => shop.id == shopId)
    }

    useEffect(() => {
        setShop(getShop(props.shopId))
    }, [])

    function Validade() {
        const now = new Date()
        const validadeDate = new Date(props.validUtil)
        const dif = new Date(validadeDate.getTime() - now.getTime())
        const minutes = dif.getMinutes()

        return (
            <Text style={{ marginTop: 40, color: '#BDBDBD' }}>
                Token expira em: {minutes} minutos
            </Text>
        )
    }

    function DeleteCupon() {
        return (
            <Pressable onPress={() => props.deleteById(props.orderId)}>
                <Icon name="trash" size={25} />
            </Pressable>
        )
    }
    return (
        <>
            <CuponModal
                visible={visible}
                setVisible={setVisible}
                img={shop.icon}
                shop_name={shop.name}
                category={shop.category}
                local={shop.adress}
                token={props.total}
                produtos={props.products}
            />
            <View style={styles.innerContainer} key={props.shopId}>
                <View style={styles.col1}>
                    <Image source={{ uri: shop.icon }} style={styles.img} />
                    <View style={{ width: 200 }}>
                        <Validade />
                    </View>
                </View>
                <View style={styles.col2}>
                    <Text style={{ color: '#616161' }}>{shop.name}</Text>
                    <Text style={{ color: '#9E9E9E' }}>{shop.adress}</Text>
                </View>
                <View style={styles.col3}>
                    <Text style={styles.token}>
                        <Icon name="horse-head" size={15} />
                        {Math.round(props.total)}
                    </Text>
                    <Pressable onPress={() => setVisible(true)}>
                        <View style={styles.itemButton}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: '#f5f5f5',
                                }}
                            >
                                Ver itens
                            </Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.col4}>
                    <DeleteCupon />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    innerContainer: {
        flexDirection: 'row',
        padding: 5,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    itemButton: {
        marginLeft: 5,
        backgroundColor: '#757575',
        borderWidth: 1,
        borderColor: '#9E9E9E',
        borderRadius: 5,
        padding: 10,
    },
    token: {
        marginLeft: 40,
        marginBottom: 10,
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
    },
    img: {
        height: 50,
        width: 50,
    },
    col1: {
        flex: 1,
        marginRight: 10,
    },
    col2: {
        flex: 2,
    },
    col3: {
        flex: 2,
        flexDirection: 'column',
    },
    col4: {
        marginTop: 45,
        marginLeft: 10,
    },
})

export default Cupom
