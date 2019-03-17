/**
 * @format
 */
import { createAppContainer } from "react-navigation";

import {AppRegistry} from 'react-native';
import App from './src/rotas/rotas'
import {name as appName} from './app.json';

const App1 = createAppContainer(App.StackNavigator);

AppRegistry.registerComponent(appName, () => App1);
