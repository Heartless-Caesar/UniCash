//TODO : Make the tab component navigate to the original screen of the tab instead of just switching the booleans to show a page
import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

const Tabs = (props) => {
    const toggleShopsButtons = () => {
        props.navigation.navigate('Shops')
        styles.button1 = buttonTrue
        styles.buttonText1 = textTrue
        styles.button2 = buttonFalse2
        styles.buttonText2 = textFalse
    }

    const toggleCuponButtons = () => {
        props.navigation.navigate('Cupons')
        styles.button1 = buttonFalse
        styles.buttonText1 = textFalse
        styles.button2 = buttonTrue2
        styles.buttonText2 = textTrue
    }

    return (
        <View style={styles.pressArea}>
            <View style={styles.button1}>
                <Pressable onPress={() => toggleShopsButtons()}>
                    <View>
                        <Text style={styles.buttonText1}>Estabelecimentos</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.button2}>
                <Pressable onPress={() => toggleCuponButtons()}>
                    <View>
                        <Text style={styles.buttonText2}>Pedidos ativos</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pressArea: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderBottomColor: '#cccccc',
        flexDirection: 'row',
        marginHorizontal: 9,
        marginTop: '2%',
        maxHeight: 50,
    },
    button1: {
        borderTopLeftRadius: 5,
        backgroundColor: '#f5f5f5',
        borderBottomColor: '#cccccc',
        padding: 10,
        flex: 1,
    },
    button2: {
        borderTopRightRadius: 5,
        backgroundColor: '#800020',
        padding: 10,
        flex: 1,
    },
    buttonText1: {
        color: '#000000',
        textAlign: 'center',
    },
    buttonText2: {
        color: '#f5f5f5',
        textAlign: 'center',
    },
})

const buttonTrue = {
    borderTopLeftRadius: 5,
    backgroundColor: '#f5f5f5',
    borderColor: '#cccccc',
    padding: 15,
    flex: 1,
}
const buttonFalse = {
    borderTopLeftRadius: 5,
    backgroundColor: '#800020',
    padding: 15,
    flex: 1,
}

const buttonTrue2 = {
    borderTopRightRadius: 5,
    backgroundColor: '#f5f5f5',
    padding: 15,
    flex: 1,
}
const buttonFalse2 = {
    borderTopRightRadius: 5,
    backgroundColor: '#800020',
    padding: 15,
    flex: 1,
}

const textTrue = {
    color: '#000000',
    textAlign: 'center',
}
const textFalse = {
    color: '#f5f5f5',
    textAlign: 'center',
}

export default Tabs
