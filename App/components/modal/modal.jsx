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
import ModalSuccess from '../modal-success/modal_success'
import ModalFailure from '../modal-failure/modal_failure'
// TODO - integrate with backend
import allProducts from '../../assets/data/produtos'
import shops from '../../assets/data/shops'

import postProducts from './modalService'

const CuponModal = (props) => {
    const shopId = props.id
    const products = allProducts.filter((product) => product.shopId === shopId)
    const shop = shops.find((shop) => shop.id === shopId)

    const [secondModalVisible, setSecondModalVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedItems, setSelectedItems] = useState([])
    const [selected, setSelected] = useState(products)
    const [resModal, setResModal] = useState(true)
    const [total, setTotal] = useState(0)

    let sum = 0

    const calculateTotal = () => {
        let sum = 0
        for (let i = 0; i < selectedItems.length; i++) {
            sum += selectedItems[i].price
        }
        setTotal(sum)
    }

    const updateTotal = (index, operator) => {
        let newValue = total

        if (operator === 'add') {
            newValue +=
                selectedItems[index].price * selectedItems[index].quantity
        }
        if (operator === 'subtract') {
            //if (selectedItems[index].quantity == 0) return

            newValue -=
                selectedItems[index].price * selectedItems[index].quantity
        }
        setTotal(newValue)
    }

    const updateQuantity = (index, operator) => {
        const novosItens = [...selectedItems]

        if (operator === 'add') {
            novosItens[index].quantity++
            //TODO:ATUALIZAR VALOR TOTAL COM BASE NA QUANTIDADE
            //GERAR TELA DE SUCESSO OU NAO DA CRIAÇÃO DO PEDIDO
        }
        if (operator === 'subtract') {
            if (novosItens[index].quantity == 0) return

            novosItens[index].quantity--
        }

        setSelectedItems(novosItens)
    }

    const toggleSelect = (item) => {
        if (item.selected) {
            setSelectedItems((res) =>
                res.filter((e) => e.productId !== item.productId)
            )
        } else {
            setSelectedItems((res) => [...res, item])
        }
        const newArrData = selected.map((e) => {
            if (e.productId == item.productId) {
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
        calculateTotal()

        setModalVisible(false)
        setSecondModalVisible(true)
    }

    const modalBack = () => {
        setModalVisible(true)
        setSecondModalVisible(false)
    }

    //APRESENTAR UMA MODAL COM BASE NA RESPOSTA DO BACK END
    // TODO: integrate with backend
    const criarCupom = () => {
        const cupom = {
            shopId: shopId,
            products: selectedItems,
        }
        console.log(cupom)

        let response = postProducts(cupom).then((res) => {
            //RETIRA A MODAL DE CRIACAO DO PEDIDO
            setSecondModalVisible(false)

            //SE A RESPOSTA FOI POSITIVA RENDERIZA O MODAL DE SUCESSO
            res == 200 ? (
                <ModalSuccess visible={resModal} />
            ) : (
                <ModalFailure visible={resModal} message={res} />
            )
        })

        setTotal(0)
        setSelectedItems([])
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#f5f5f5',
                        flexDirection: 'column',
                    }}
                >
                    <View
                        style={{
                            flex: 4,
                        }}
                    >
                        <View
                            style={{
                                flex: 4,
                            }}
                        >
                            <FlatGrid
                                itemDimension={70}
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
                                                        uri: itemData.item
                                                            .iconUrl,
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
                                    return item.productId
                                }}
                            />
                        </View>
                        <View
                            style={[
                                styles.buttonContainer,
                                {
                                    flex: 1,
                                    alignItems: 'center',
                                },
                            ]}
                        >
                            <Pressable
                                style={{
                                    padding: 10,
                                    backgroundColor: '#757575',
                                    borderRadius: 5,
                                    width: 150,
                                }}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text
                                    style={[
                                        styles.button,

                                        {
                                            color: '#f5f5f5',
                                            textAlign: 'center',
                                        },
                                    ]}
                                >
                                    Cancelar
                                </Text>
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
                                    style={[
                                        styles.button,

                                        {
                                            color: '#f5f5f5',
                                            textAlign: 'center',
                                        },
                                    ]}
                                >
                                    Próximo
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* SECOND MODAL */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={secondModalVisible}
                // aqui
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#f5f5f5',
                        flexDirection: 'column',
                    }}
                >
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
                                {total}
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
                                                    uri: itemData.item.iconUrl,
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
                                                    ),
                                                        updateTotal(
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
                                                    ),
                                                        updateTotal(
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
                        <View
                            style={[
                                styles.buttonContainer,
                                {
                                    flex: 1,
                                    alignItems: 'center',
                                },
                            ]}
                        >
                            <Pressable
                                style={{
                                    padding: 10,
                                    backgroundColor: '#757575',
                                    borderRadius: 5,
                                    width: 150,
                                }}
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
                                style={{
                                    padding: 10,
                                    backgroundColor: '#43A047',
                                    borderRadius: 5,
                                    width: 150,
                                }}
                                onPress={() => criarCupom()}
                            >
                                <Text style={styles.textStyle}>
                                    Criar pedido
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <View
                style={[
                    styles.buttonContainer,
                    {
                        flex: 1,
                        alignItems: 'center',
                    },
                ]}
            >
                <Pressable
                    style={{
                        padding: 10,
                        backgroundColor: '#800020',
                        borderRadius: 5,
                        width: 150,
                    }}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Criar Cupom</Text>
                </Pressable>
            </View>
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
        //height: 'fit-content',
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
