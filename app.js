import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Orgaos_FederaisScreen from './orgaos_federais'

 
import HomeScreen from './components/home'

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    orgaos_federais: {screen: Orgaos_FederaisScreen},

});

const App = createAppContainer(MainNavigator);
export default App;