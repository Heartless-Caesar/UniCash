import { View, Text, Pressable, Modal, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'

const ModalFailure = (props) => {
    const handleExit = () => {
        props.setVisible(false)
        props.navigation.navigate('Shops')
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={{ padding: '10%', justifyContent: 'center' }}>
                <MaterialCommunityIcons
                    name="close-circle-outline"
                    size={150}
                    style={{ padding: '25%' }}
                />
                <Pressable
                    onPress={() => props.visible(false)}
                    style={{ paddingLeft: '15%' }}
                >
                    <View>
                        <Text style={{ fontSize: 30 }}>Ocorreu um erro</Text>
                    </View>
                </Pressable>
                <View
                    style={{
                        justifyContent: 'center',
                        width: '100%',
                        paddingLeft: '20%',
                        paddingRight: '20%',
                        height: 100,
                    }}
                >
                    <Pressable onPress={handleExit}>
                        <View
                            style={{
                                backgroundColor: '#232D52',
                                width: '100%',
                                height: 50,
                                marginRight: 10,
                                padding: '7%',
                                borderRadius: 5,
                            }}
                        >
                            <Text
                                style={{
                                    color: '#f5f5f5',
                                    marginLeft: '35%',
                                }}
                            >
                                Voltar
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default ModalFailure
