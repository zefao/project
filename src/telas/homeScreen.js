import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  //TextInput,
  //TouchableOpacity,
  //Dimensions,
  StatusBar//detalhe da parte de cima do celular
} from 'react-native';

export default class homeScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('../imagens/imagemhome.jpg')} style={styles.backgroundContainer}>
        <StatusBar barStyle='default'/>
        <View>
          <View>
            <Text style ={styles.msgTeste}>
              Bem Vindo!
            </Text>
          </View>
        </View>
      </ImageBackground>

    );//return
  }//render
}//class

const styles = StyleSheet.create({
  backgroundContainer: { // background da tela
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgTeste: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  }  
});