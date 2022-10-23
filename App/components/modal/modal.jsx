import React, { useEffect, useState } from 'react'
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
    Image,
    FlatList,
    TextInput,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { FlatGrid } from 'react-native-super-grid'

// TODO - integrate with backend
import allProducts from '../../assets/data/produtos'
import shops from '../../assets/data/shops'

import postProducts from './modalService'

const CuponModal = (props) => {
    const shopId = props.id
    const products = allProducts.filter((product) => product.shopId === shopId)
    const shop = shops.find((shop) => shop.id === shopId)

    const [selected, setSelected] = useState(products)
    const [modalVisible, setModalVisible] = useState(false)
    const [secondModalVisible, setSecondModalVisible] = useState(false)
    const [selectedItems, setSelectedItems] = useState([])

    const updateQuantity = (index, operator) => {
        const novosItens = [...selectedItems]

        if (operator === 'add') {
            novosItens[index].quantity++
        }
        if (operator === 'subtract') {
            if (novosItens[index].quantity == 0) return

            novosItens[index].quantity--
        }

        setSelectedItems(novosItens)
    }

    const toggleSelect = (item) => {
        if (item.selected) {
            setSelectedItems((res) => res.filter((e) => e.id !== item.id))
        } else {
            setSelectedItems((res) => [...res, item])
        }
        const newArrData = selected.map((e) => {
            if (e.id == item.id) {
                return {
                    ...e,
                    selected: !e.selected,
                }
            } else {
                return {
                    ...e,
                    quantity: 1,
                }
            }
        })
        setSelected(newArrData)
    }

    const modalForward = () => {
        setModalVisible(false)
        setSecondModalVisible(true)
    }

    const modalBack = () => {
        setModalVisible(true)
        setSecondModalVisible(false)
    }

    // TODO: integrate with backend
    const criarCupom = () => {
        const cupom = {
            shopId: shopId,
            products: selectedItems,
        }
        console.log(cupom)
        let response = postProducts(cupom)

        setSecondModalVisible(false)
        setSelectedItems([])

    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredViewInner}>
                    <View style={styles.list}>
                        <FlatGrid
                            itemDimension={70}
                            spacing={15}
                            data={selected}
                            renderItem={(itemData) => {
                                return (
                                    <Pressable
                                        onPress={() =>
                                            toggleSelect(itemData.item)
                                        }
                                    >
                                        <View
                                            style={[
                                                styles.listItem,
                                                {
                                                    backgroundColor: itemData
                                                        .item.selected
                                                        ? '#66BB6A'
                                                        : '#f5f5f5',
                                                    borderRadius: itemData.item
                                                        .selected
                                                        ? 5
                                                        : 0,
                                                },
                                            ]}
                                        >
                                            <Image
                                                source={{
                                                    uri: itemData.item.icon,
                                                }}
                                                style={styles.image}
                                            />
                                            <Text style={styles.listText}>
                                                {
                                                    itemData.item.name.split(
                                                        ' '
                                                    )[0]
                                                }
                                            </Text>
                                            <Text style={styles.listText}>
                                                {itemData.item.price}
                                            </Text>
                                        </View>
                                    </Pressable>
                                )
                            }}
                            keyExtractor={(item, index) => {
                                return item.id
                            }}
                        />
                        <View style={styles.buttonContainer}>
                            <Pressable
                                style={[
                                    styles.button,
                                    styles.buttonClose,
                                    // cor do botão - cinza
                                    {
                                        marginRight: 20,
                                        backgroundColor: '#757575',
                                    },
                                ]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </Pressable>
                            <Pressable
                                style={{
                                    padding: 10,
                                    backgroundColor: '#43A047',
                                    borderRadius: 5,
                                    width: 150,
                                }}
                                onPress={() => modalForward()}
                            >
                                <Text
                                    style={{
                                        color: '#f5f5f5',
                                        textAlign: 'center',
                                    }}
                                >
                                    Próximo
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={secondModalVisible}
                // aqui
            >
                <View style={styles.centeredViewInner}>
                    <View
                        style={{
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: '#f5f5f5',
                            borderTopStartRadius: 5,
                            borderTopEndRadius: 5,
                            borderBottomColor: '#cccccc',
                        }}
                    >
                        {/* Nome da loja */}
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 20, color: '#616161' }}>
                                {shop.name}
                            </Text>
                        </View>
                        {/* Classificação & Localização */}
                        <View style={{ padding: 10, flexDirection: 'column' }}>
                            <Text style={{ color: '#757575' }}>
                                {shop.category}
                            </Text>
                            <Text style={{ color: '#757575' }}>
                                {shop.adress}
                            </Text>
                        </View>
                        {/* Valor total do cupom */}
                        <View
                            style={{
                                padding: 10,
                                flexDirection: 'row',
                                marginTop: 10,
                            }}
                        >
                            <Icon
                                name="horse-head"
                                size={20}
                                style={{
                                    marginTop: 2,
                                    marginLeft: 15,
                                    marginRight: 5,
                                }}
                            />
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                - 100
                            </Text>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Selecione os itens
                            </Text>
                        </View>
                        <View style={{ padding: 10 }}></View>
                        <FlatList
                            style={{ maxHeight: 375 }}
                            data={selectedItems}
                            renderItem={(itemData) => {
                                return (
                                    <View style={styles.secondlistItem}>
                                        <View style={styles.col1}>
                                            <Image
                                                source={{
                                                    uri: itemData.item.icon,
                                                }}
                                                style={styles.image}
                                            />
                                        </View>
                                        <View style={styles.col2}>
                                            <Text
                                                style={[
                                                    styles.listText,
                                                    {
                                                        lineHeight: 20,
                                                        fontWeight: 'bold',
                                                    },
                                                ]}
                                            >
                                                {itemData.item.name}
                                            </Text>

                                            <Text
                                                style={[
                                                    styles.listText,
                                                    {
                                                        lineHeight: 20,
                                                        fontWeight: 'bold',
                                                    },
                                                ]}
                                            >
                                                <Icon
                                                    name="horse-head"
                                                    style={{ marginRight: 10 }}
                                                />{' '}
                                                {itemData.item.price}
                                            </Text>
                                        </View>
                                        <View style={styles.col3}>
                                            <Pressable
                                                onPress={() => {
                                                    updateQuantity(
                                                        itemData.index,
                                                        'add'
                                                    )
                                                }}
                                            >
                                                <Icon
                                                    name="plus"
                                                    style={styles.icons}
                                                />
                                            </Pressable>
                                            <View
                                                style={{
                                                    backgroundColor: '#BDBDBD',
                                                    width: 50,
                                                    padding: 10,
                                                    borderRadius: 5,
                                                    marginLeft: 5,
                                                    marginRight: 5,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {itemData.item.quantity}
                                                </Text>
                                            </View>
                                            <Pressable
                                                onPress={() => {
                                                    updateQuantity(
                                                        itemData.index,
                                                        'subtract'
                                                    )
                                                }}
                                            >
                                                <Icon
                                                    name="minus"
                                                    style={styles.icons}
                                                />
                                            </Pressable>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                        <View style={[styles.buttonContainer]}>
                            <Pressable
                                style={[
                                    styles.button,
                                    {
                                        backgroundColor: '#757575',
                                        padding: 10,
                                        marginRight: 30,
                                    },
                                ]}
                                onPress={() => modalBack()}
                            >
                                <Text
                                    style={{
                                        color: '#f5f5f5',
                                        textAlign: 'center',
                                    }}
                                >
                                    Cancelar
                                </Text>
                            </Pressable>
                            <Pressable
                                style={[
                                    styles.button,
                                    styles.buttonClose,
                                    { backgroundColor: '#4CAF50' },
                                ]}
                                onPress={() => criarCupom()}
                            >
                                <Text style={styles.textStyle}>
                                    Criar cupom
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Criar Cupom</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        marginTop: 20,
        marginHorizontal: 10,
        marginBottom: 5,
        flexDirection: 'row',
    },
    centeredViewInner: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 5,
        backgroundColor: '#f5f5f5',
        marginHorizontal: 10,
        marginBottom: 5,
        marginTop: 10,
        // padding: 10,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#000000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 20,
        //marginTop: 200,
    },
    button: {
        borderRadius: 5,
        height: 50,
        width: 150,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#800020',
        width: 120,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 5,
    },
    listItem: {
        alignItems: 'center',
    },
    secondlistItem: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
    },
    list: {
        padding: 5,
    },
    col1: {
        flex: 1,
    },
    col2: {
        flex: 2,
        marginLeft: 20,
    },
    col3: {
        flex: 2,
        padding: 5,
        justifyContent: 'space-between',
        height: 50,
        // borderWidth: 1,
        // borderColor: "#000000",
        flexDirection: 'row',
        marginLeft: 10,
    },
    input: {
        flex: 1,
        padding: 0,
        height: 50,
        // borderWidth: 1,
        // borderColor: "#000000",
        // borderRadius: 5,
        fontSize: 40,
        justifyContent: 'center',
    },
    icons: { marginTop: 15 },
})

export default CuponModal
