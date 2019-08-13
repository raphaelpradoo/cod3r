import React from 'react'
import { Button, Alert, ToastAndroid, Platform, View } from 'react-native'

export default props => {
    const notificar = msg => {
        if(Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.LONG)
        } else {
            Alert.alert('Informacao', msg)
        }
    }
    return (
        <View style={{marginTop: 30}}>
            <Button title='Plataforma?'
                onPress={() => notificar('Parabens!')} />
        </View>
        
    )
}