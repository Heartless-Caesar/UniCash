import { View, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tabs from './tabs'
import Cupom from './cupom'

const getCupons = async () => {
    const response = await fetch(
        'https://unicash-resgate.herokuapp.com/v2/orders',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjMyMDIzNTYsImV4cCI6MTY5NDczODM1NiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSJ9.MeFhVNQ-ENnSWeo_Aq3lMoAz2oouquYz9vtGvy1Ya4uj7210icY_haCI38ZIpAP0zb-kLgQFKjSVAKYgjXDdiA',
            },
        }
    )
    console.log('http:' + response.status)
    return response.status
}

const Cupons = ({ navigation }) => {
    const [cupons, setCupons] = useState([])

    useEffect(() => {
        const userCupons = getCupons()

        setCupons(userCupons)
    }, [])

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
