
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import loginScreen from './src/telas/loginScreen';

//const AppStack = createStackNavigator({
 // Home: {
 //   screen: loginScreen
 // }
//});

export default createAppContainer(
  createSwitchNavigator(
    {
      //AuthLoading: AuthLoadingScreen,
      //App: AppStack,
      loginScreen: loginScreen,
    },
    {
      initialRouteName: 'loginScreen',
    }
  )
);

