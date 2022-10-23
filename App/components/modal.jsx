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
import products from '../assets/data/produtos'
const CuponModal = () => {
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
                return e
            }
        })
        console.log(`Length ${selectedItems.length}`)
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

    const criarCupom = () => {
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
                    <View style={{ flex: 3, padding: 10 }}>
                        <View style={{ flex: 1 }}>
                            <FlatGrid
                                itemDimension={50}
                                spacing={20}
                                data={selected}
                                renderItem={(itemData) => {
                                    return (
                                        <Pressable
                                            onPress={() =>
                                                toggleSelect(itemData.item)
                                            }
                                        >
                                            <View
                                                style={{
                                                    justifyContent: 'center',
                                                    padding: 10,
                                                    backgroundColor: itemData
                                                        .item.selected
                                                        ? '#66BB6A'
                                                        : '#f5f5f5',
                                                    borderRadius: itemData.item
                                                        .selected
                                                        ? 5
                                                        : 0,
                                                    maxWidth: 500,
                                                }}
                                            >
                                                <Image
                                                    source={{
                                                        uri: itemData.item.icon,
                                                    }}
                                                    style={styles.image}
                                                />
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
                        </View>
                        <View
                            style={[
                                styles.buttonContainer,
                                {
                                    flex: 1,
                                    maxHeight: 'fit-content',
                                },
                            ]}
                        >
                            <Pressable
                                style={[
                                    styles.button,

                                    {
                                        padding: '5%',
                                        marginRight: '10%',
                                        paddingBottom: '5%',
                                        backgroundColor: '#757575',
                                        maxHeight: '15%',
                                    },
                                ]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </Pressable>
                            <Pressable
                                style={[
                                    styles.button,
                                    {
                                        backgroundColor: '#43A047',
                                        borderRadius: 5,
                                        padding: '5%',
                                        paddingBottom: '5%',
                                        maxHeight: '15%',
                                    },
                                ]}
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
            >
                <View
                    style={[
                        styles.centeredViewInner,
                        { flexDirection: 'column' },
                    ]}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: '#f5f5f5',
                            borderTopStartRadius: 5,
                            borderTopEndRadius: 5,
                            borderBottomColor: '#cccccc',
                            height: 'fit-content',
                        }}
                    >
                        {/* Nome da loja */}
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 20, color: '#616161' }}>
                                UniCafé
                            </Text>
                        </View>
                        {/* Classificação & Localização */}
                        <View style={{ padding: 10, flexDirection: 'column' }}>
                            <Text style={{ color: '#757575' }}>Cafeteria</Text>
                            <Text style={{ color: '#757575' }}>
                                Bloco H - Piso 2
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
                        <View style={[styles.buttonContainer, { flex: 1 }]}>
                            <Pressable
                                style={[
                                    styles.button,
                                    {
                                        backgroundColor: '#757575',
                                        padding: '5%',
                                        marginRight: '10%',
                                        paddingBottom: '10%',
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

                                    {
                                        backgroundColor: '#4CAF50',
                                        paddingBottom: '10%',
                                    },
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
                style={[styles.buttonOpen, { padding: '20%' }]}
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
        padding: 10,
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
        height: 'fit-content',
        marginTop: '40%',
    },
    button: {
        borderRadius: 5,
        padding: '5%',
        height: '20%',
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
        minHeight: 40,
        maxHeight: 50,
        minWidth: 30,
        maxWidth: 50,
        borderRadius: 5,
    },
    listItem: {
        flex: 2,
        justifyContent: 'center',
        padding: 10,
    },
    secondlistItem: {
        //display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'scroll',
        padding: 10,
    },
    list: {
        flex: 4,
        padding: 5,
        flexDirection: 'column',
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
