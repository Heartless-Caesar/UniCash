import { View, Text, StyleSheet, Pressable, Image, Modal } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
// import modalData from '../assets/data/cupons.json'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import allprodutos from '../assets/data/produtos'
import { AntDesign } from '@expo/vector-icons'

const CuponModal = (props) => {
    const [deleteButton, setDeleteButton] = useState(false)
    const showButton = () => {
        setDeleteButton(true)
    }

    // products list from cupon
    const produtos = props.produtos.map((produto) => {
        return allprodutos.find((prod) => {
            return prod.productId == produto.productId
        })
    })

    return (
        <Modal animationType="slide" transparent={true} visible={props.visible}>
            <View style={[styles.centeredViewInner]}>
                <View style={styles.qrCol1}>
                    <Image
                        source={{ uri: props.img }}
                        style={{
                            height: 150,
                            width: 150,
                            borderRadius: 5,
                            marginTop: 10,
                        }}
                    />
                    <View style={styles.data}>
                        {/* <Text style={styles.textData}>X9M75ZZ80</Text> */}
                        <Text style={styles.textData}>{props.shop_name}</Text>
                        <Text style={styles.textData}>{props.category}</Text>
                        <Text style={styles.textData}>{props.local}</Text>
                        <Text style={styles.textData}>
                            <Icon name="horse-head" size={15} />
                            {props.token}
                        </Text>
                    </View>
                </View>
                {/* Items listing row */}
                <View
                    style={{
                        marginTop: '15%',
                        // borderWidth: 1,
                        // borderColor: '#800020',
                    }}
                >
                    <FlatGrid
                        data={produtos}
                        itemDimension={50}
                        spacing={30}
                        style={{
                            paddingBottom: 20,
                            height: '50%',
                        }}
                        keyExtractor={(item, index) => {
                            return item.productId
                        }}
                        renderItem={(itemData) => {
                            return (
                                <View style={{ flexDirection: 'column' }}>
                                    <Image
                                        source={{
                                            uri: itemData.item.iconUrl,
                                        }}
                                        style={styles.img}
                                    />
                                    <Text>
                                        {itemData.item.name.split(' ')[0]}
                                    </Text>
                                    <Text>
                                        <Icon name="horse-head" size={15} />{' '}
                                        {itemData.item.price}
                                    </Text>
                                </View>
                            )
                        }}
                    />
                </View>
                {/* Bottom button row*/}
                <View
                    style={[
                        styles.buttonRow,
                        {
                            marginTop: '10%',
                            // borderWidth: 1,
                            // borderColor: '#800020',
                        },
                    ]}
                >
                    <Pressable onPress={() => props.setVisible(false)}>
                        <View
                            style={{
                                padding: '10%',
                                width: '100%',
                                borderWidth: 1,
                                borderColor: '#800020',
                                borderRadius: 5,
                                backgroundColor: '#800020',
                            }}
                        >
                            <Text
                                style={{
                                    color: '#f5f5f5',
                                    textAlign: 'center',
                                }}
                            >
                                Fechar
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredViewInner: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 5,
        backgroundColor: '#f5f5f5',
        marginHorizontal: '3%',
        marginBottom: '2%',
        padding: 10,
        // borderWidth: 5,
        // borderColor: '#000000',
    },
    itemButton: {
        marginLeft: 5,
        backgroundColor: '#757575',
        borderWidth: 1,
        borderColor: '#9E9E9E',
        borderRadius: 5,
        padding: 10,
    },
    img: {
        height: 50,
        width: 50,
    },
    qrCol1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: "#000000",
    },
    listingRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 10,
        marginTop: 50,
        paddingHorizontal: 20,
    },
    buttonRow: {
        marginTop: '25%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    data: { flexWrap: 'wrap', padding: 15 },
    textData: { lineHeight: 25 },
})

export default CuponModal
