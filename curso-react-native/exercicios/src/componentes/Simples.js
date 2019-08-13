import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

// export default function (props) {
//     return <Text>{props.texto}</Text>
// }

// export default (props) => {
//     return <Text>Arrow: {props.texto}</Text>
// }

export default (props) => 
	<Text style={Padrao.ex}>Arrow: {props.texto}</Text>

// export default (props) => 
// 	<View>
// 		<Text>Arrow1: {props.texto}</Text>
// 		<Text>Arrow2: {props.texto}</Text>
// 	</View>
