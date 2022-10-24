import { View, Text, Pressable, Modal } from 'react-native'
import React from 'react'

const ModalFailure = () => {
    return (
        <Modal visible={props.visible} animationType="slide">
            <View>
                <Text>{props.message}</Text>
                <Pressable onPress={() => props.visible(false)}>
                    <View>Ok</View>
                </Pressable>
            </View>
        </Modal>
    )
}

export default ModalFailure
