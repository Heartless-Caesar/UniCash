//TODO : Implement store details page with their products catalog
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import Tabs from '../components/tabs'
import Product from '../components/product'
import CuponModal from '../components/modal/modal'

const Details = ({ route, navigation }, props) => {
    const [shops, setShops] = useState(true)
    const [cupons, setCupons] = useState(false)
    //UTILIZE THE PARAM ID TO FETCH THE DESIRED SHOP AND IT'S PRODUCTS
    const { id, name, adress, category } = route.params

    const goToShops = (arg, arg2) => {
        setShops(arg)
        setCupons(arg2)
    }

    const goToCupons = (arg, arg2) => {
        setCupons(arg)
        setShops(arg2)
    }

    return (
        <View style={styles.Container}>
            <Tabs
                goToShops={goToShops}
                goToCupons={goToCupons}
                navigation={navigation}
            />
            <View style={styles.body}>
                <View style={styles.headerContainer}>
                    {/* Col 1 */}
                    <Pressable onPress={() => navigation.navigate('Shops')}>
                        <View>
                            <AntDesign name="left" size={24} color="black" />
                        </View>
                    </Pressable>
                </View>
                {/* Col 1*/}
                <View
                    style={[
                        {
                            flex: 3,
                            flexDirection: 'row',
                            paddingLeft: '5%',
                        },
                    ]}
                >
                    <View style={[styles.detailsContainerCol2, { flex: 2 }]}>
                        <Text>{name}</Text>
                        <Text>{category}</Text>
                        <Text>{adress}</Text>
                    </View>
                    {/* Col 2 */}
                    <View style={{ flex: 2, marginRight: '5%' }}>
                        <CuponModal id={id} navigation={navigation} />
                    </View>
                </View>
                {/* Product catalog for a shop */}
                <View style={{ flex: 6 }}>
                    <Product id={id} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#cccccc',
    },
    body: {
        flex: 7,
        marginHorizontal: 10,
        backgroundColor: '#f5f5f5',
    },
    headerContainer: {
        //flex: 1,
        flexDirection: 'row',
        padding: '10%',
        //maxHeight: '25%',
    },
    headerContainerCol1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainerCol2: {
        flex: 2,
        backgroundColor: '#cccccc',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginLeft: 15,
    },
    detailsContainer: {
        flexDirection: 'row',
        // padding: 20,
        // height: 100,
        // width: 340,
    },
    detailsContainerCol1: {
        flex: 4,
        height: 50,
        padding: 5,
    },
    detailsContainerCol2: {
        // flex: 4,
        // height: 60,
        // padding: 5,
    },
    detailsContainerCol3: {
        // flex: 6,
        // height: 50,
        // // backgroundColor: "#800020",
        // borderRadius: 5,
        // padding: 10,
    },
    cuponButtonText: {
        textAlign: 'center',
        color: '#f5f5f5',
    },
    filters: {
        borderWidth: 1,
        borderTopColor: '#cccccc',
        borderColor: '#f5f5f5',
        height: 50,
        padding: 10,
        flexDirection: 'row',
    },
    filtersText: {
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: '#cccccc',
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
})

export default Details
