import { View, Text, Pressable, Modal, Button } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ModalSuccess = (props) => {
    return (
        <Modal visible={props.visible} animationType="slide">
            <View>
                <MaterialCommunityIcons name="check-circle" size={70} />
                <Pressable onPress={() => props.visible(false)}>
                    <View>
                        <Text>Success</Text>
                    </View>
                </Pressable>
                <Button
                    onPress={() => props.setVisible(false)}
                    title="Exit"
                ></Button>
            </View>
        </Modal>
    )
}

export default ModalSuccess
