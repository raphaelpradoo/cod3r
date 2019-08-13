import React from 'React'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

export default createDrawerNavigator ({
	Flex: {
		screen: Flex
	},
	ListaFlex: {
		screen: ListaFlex,
		navigationOptions: { title: 'Lista (Flex Box)' }
	},
	TextoSincronizado: {
		screen: TextoSincronizado,
		navigationOptions: { title: 'Texto Sincronizado' }
	},
	Avo: {
		screen: () => <Avo nome='Joao' sobrenome='Silva' />
	},
	Evento: {
		screen: Evento
	},
	ValidarProps: {
		screen: () => <ValidarProps ano={19} />
	},
	Plataformas: {
		screen: Plataformas
	},
	Contador: {
		screen: () => <Contador numeroInicial={0} /> 
	},
	MegaSena: {
		screen: () => <MegaSena numeros={8} />,
		navigationOptions: { title: 'Mega Sena' }
	},
	Inverter: {
		screen: () => <Inverter texto='Inverter' />
	},
	ParImpar: {
		screen: () => <ParImpar numero={40} />,
		navigationOptions: { title: 'Par & Impar' }
	},
	Simples: {
		screen: () => <Simples texto='Simples' />
	}
}, { drawerWidth: 300 })