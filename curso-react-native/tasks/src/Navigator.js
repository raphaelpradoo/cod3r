import React from 'react'
import { 
    createSwitchNavigator, 
    createDrawerNavigator 
} from 'react-navigation'
import Menu from './screens/Menu'
import Agenda from './screens/Agenda'
import Auth from './screens/Auth'
import commonStyles from './commonStyles'
import AuthOrApp from './screens/AuthOrApp'

const MenuRoutes = {
    Today: {
        name: 'Today',
        screen: props => <Agenda title='Hoje' daysAhead={0} {...props} />,
        navigationOptions: {
            title: 'Hoje'
        }
    },
    Tomorrow: {
        name: 'Tomorrow',
        screen: props => <Agenda title='Amanha' daysAhead={1} {...props} />,
        navigationOptions: {
            title: 'Amanha'
        }
    },
    Week: {
        name: 'Week',
        screen: props => <Agenda title='Semana' daysAhead={7} {...props} />,
        navigationOptions: {
            title: 'Semana'
        }
    },
    Month: {
        name: 'Month',
        screen: props => <Agenda title='Mes' daysAhead={30} {...props} />,
        navigationOptions: {
            title: 'Mes'
        }
    },
}

const MenuConfig = {
    initialRouteName: 'Today',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: '#080',
        }
    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const MainRoutes = {
    Loading: {
        name: 'Loading',
        screen: AuthOrApp
    },
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: MenuNavigator
    }
}

const MainNavigator = createSwitchNavigator(MainRoutes, { 
    initialRouteName: 'Loading' 
})

export default MainNavigator