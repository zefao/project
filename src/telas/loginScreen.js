import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar//detalhe da parte de cima do celular
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default class Apps extends Component {
  _onPressButton() {
    alert("wait...")
  }

  render() {
    return (
      <ImageBackground source={require('../imagens/imagemhome.jpg')} style={styles.backgroundContainer}>
        <StatusBar barStyle='default'
        />
        <View>
          <Text style={styles.LoginTXT}> Welcome! </Text>
        </View>
        <View>
          <TextInput style={styles.input}//caixa de txt para usuario
            placeholder={'Username/Email'}
            returnKeyType='next' //vai para proxima caixa
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
            underlineColorAndroid='transparent'
            onSubmitEditing={() => this.passwordInput.focus()}//(1) usado para pular para password
            keyboardType='email-address'//tipo de txt no usuario
            autoCapitalize='none'
            autoCorrect={false}

          />
        </View>
        <View>
          <TextInput style={styles.inputPassword}//caixa de txt para usuario
            placeholder={'Passoword'}
            secureTextEntry={true}
            returnKeyType='go'
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
            underlineColorAndroid='transparent'
            ref={(input) => this.passwordInput = input}//(1) usado para pular para password
          />
        </View>
        <View style={{ marginTop: 20, alignContent: 'center', flexDirection: 'row' }}>
          <TouchableOpacity style={styles.btnLoginContainer}>
            <Text style={styles.btnLoginHome}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressButton} >
            <View style={styles.btnCadastrarContainer}>
              <Text style={styles.btnLoginHome}>Create Account</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnRecuperarSenhaContainer}>
          <Text style={styles.btnLoginHome}>Recover Password</Text>
        </TouchableOpacity>


      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: { // background da tela
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
    marginTop: 50
  },
  LoginTXT: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  },
  inputPassword: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
    marginTop: 10
  },
  btnLoginContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    paddingVertical: 10,
    borderRadius: 45,
  },
  btnCadastrarContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    paddingVertical: 10,
    borderRadius: 45,
  },
  btnRecuperarSenhaContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    paddingVertical: 10,
    borderRadius: 45,
    marginTop: 10
  },
  btnLoginHome: {
    textAlign: 'center',
    width: 150,
    height: 20,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
  }

});