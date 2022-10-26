import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Header = () => {
    return (
        <View
            style={{
                backgroundColor: '#232D52',
                padding: '5%',
                flexDirection: 'row',
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    width: '45%',
                    marginTop: '5%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <MaterialCommunityIcons
                    name="circle"
                    color="#f5f5f5"
                    size={30}
                />
                <Text style={{ color: '#f5f5f5' }}>Olá usuário</Text>
            </View>
            <View style={{ marginTop: '5%', paddingLeft: '40%' }}>
                <MaterialCommunityIcons name="bell" color="#f5f5f5" size={30} />
            </View>
        </View>
    )
}

export default Header
