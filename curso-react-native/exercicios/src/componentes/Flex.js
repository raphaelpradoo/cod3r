import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    norte: {
        flex: 1,
        backgroundColor: '#BDF9ED',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centro: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#F2f9BD',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    sul: {
        flex: 1,
        backgroundColor: '#BDF9C4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circulo: {
        width: 100,
        height: 100,
        backgroundColor: '#F47F61',
        borderRadius: 50
    }
})

const Circulo = props => <View style={styles.circulo}></View>

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.norte}>
                <Circulo />
            </View>
            <View style={styles.centro}>
                <Circulo />
                <Circulo />
                <Circulo />
            </View>
            <View style={styles.sul}>
                <Circulo />
            </View>
        </View>
    )
}