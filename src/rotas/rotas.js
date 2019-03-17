import CadastroTela from '../telas/cadastroTela'
import TelaInicial from '../telas/TelaInicial';
import LoginTela from '../telas/loginTela';
import Telavac from '../telas/Telavac';
import DadosSalv from '../telas/dadossalv';

import { createStackNavigator } from 'react-navigation';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const StackNavigator = createStackNavigator({

  Tela1: TelaInicial,
  CadTela: CadastroTela,
  LogTela: LoginTela,
  SalvTela: Telavac,
  Dadsalv: DadosSalv,
  
});

export default { StackNavigator };