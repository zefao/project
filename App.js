
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

import loginScreen from './src/telas/loginScreen';
import cadastroScreen from './src/telas/cadastroScreen';
import homeScreen from './src/telas/homeScreen';
//import loading from './src/telas/loading';

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
      HomeScreen: homeScreen,
     // Loading: loading
    },
    {
      initialRouteName: 'LoginScreen',
    }
  )
);

