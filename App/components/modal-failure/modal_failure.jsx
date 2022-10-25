import { View, Text, Pressable, Modal, Button } from 'react-native'
import React from 'react'

const ModalFailure = (props) => {
    return (
        <Modal visible={props.visible} animationType="slide">
            <View>
                <View>
                    <Text>Failure : {props.message}</Text>
                </View>

                <Button
                    onPress={() => props.setVisible(false)}
                    title="Exit"
                ></Button>
            </View>
        </Modal>
    )
}

export default ModalFailure
