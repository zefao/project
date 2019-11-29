
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

import loginScreen from './src/telas/loginScreen';
import cadastroScreen from './src/telas/cadastroScreen';

//const AppStack = createStackNavigator({
// Home: {
//   screen: loginScreen
// }
//});
//const loginStack = createStackNavigator({ login: loginScreen, cadastro: cadastroScreen });
export default createAppContainer(
  createSwitchNavigator(
    {
      LoginScreen: loginScreen,
      CadastroScreen: cadastroScreen,
    },
    {
      initialRouteName: 'LoginScreen',
    }
  )
);

