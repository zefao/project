import React, { Component, useState } from 'react';
import firebase from 'react-native-firebase'

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,//detalhe da parte de cima do celular
  // async
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window')


export default function loginScreen(props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [auth, setAuth] = useState(false);

  async function login() {
    console.log(email, senha);

    // const { email, senha } = this.state;
    // try {
    //   const user = await firebase.auth()
    //     .signInWithEmailAndPassword(email, senha);
    //   this.setState({ isAuthenticated: true });
    //   this.props.navigation.navigate("HomeScreen");
    //   console.log(user);
    // } catch (err) {
    //   console.log(err);
    // }
  }

  return (
    <ImageBackground source={require('../imagens/imagemhome.jpg')} style={styles.backgroundContainer}>

      <StatusBar barStyle='default' />

      <View>
        <Text style={styles.LoginTXT}> Welcome! </Text>
      </View>

      <View>
        <TextInput style={styles.input}//caixa de txt para usuario
          placeholder={'Usuário/Email'}
          value={email}
          onChangeText={text => setEmail(text)}
          returnKeyType='next' //vai para proxima caixa
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
          underlineColorAndroid='transparent'
          onSubmitEditing={() => { PasswordTextInput.focus(); }}//(1) usado para pular para password
          keyboardType='email-address'//tipo de txt no usuario
          autoCapitalize='none'
          autoCorrect={false}
        />
      </View>

      <View>
        <TextInput style={styles.inputPassword}//caixa de txt para usuario
          placeholder={'Senha'}
          value={senha}
          onChangeText={text => setSenha(text)}
          secureTextEntry={true}
          returnKeyType='go'
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
          underlineColorAndroid='transparent'
          ref={(input) => PasswordTextInput = input}
        />
      </View>

      <View style={{ marginTop: 20, alignContent: 'center', flexDirection: 'row' }}>
        <TouchableOpacity style={styles.btnLoginContainer} onPress={login}>
          <Text style={styles.btnLoginHome}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("CadastroScreen")}>
          <View style={styles.btnCadastrarContainer}>
            <Text style={styles.btnLoginHome}>Criar Conta</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnRecuperarSenhaContainer}>
        <Text style={styles.btnLoginHome}>Recuperar Senha</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
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
    fontSize: 25,
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