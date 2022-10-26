import { View, Text, Pressable, Modal, Button } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ModalSuccess = (props) => {
    const handleExit = () => {
        props.setVisible(false)
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={{ padding: '10%', justifyContent: 'center' }}>
                <MaterialCommunityIcons
                    name="check-circle"
                    size={150}
                    style={{ padding: '25%' }}
                />
                <Pressable
                    onPress={() => props.visible(false)}
                    style={{ paddingLeft: '15%' }}
                >
                    <View>
                        <Text style={{ fontSize: 30 }}>Pedido criado</Text>
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
                                backgroundColor: 'blue',
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

export default ModalSuccess
