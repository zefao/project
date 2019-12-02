import React, { Component } from 'react';
//import firebase from 'react-native-firebase';

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Dimensions,
    StatusBar
} from 'react-native';



const { width: WIDTH } = Dimensions.get('window')

export default class cadastroScreen extends Component {
    /*state = {
        email: '',
        nome: '',
        rga: '',
        usuario: '',
        senha: '',
        errorMessage: null
    }
    handleCadastro = () => { //metodo para cadastrar
        firebase
            .auth()
            .createUserWithEmailAndNomeAndRgaAndUsuarioAndSenha(
                this.state.email,
                this.state.nome,
                this.state.rga,
                this.state.usuario,
                this.state.senha
            )
            .then(() => this.props.navigation.navigate("LoginScreen"))
            .catch(error => this.setState({ errorMessage: error.message }))
    }*/
    render() {
        return (
            <ImageBackground source={require('../imagens/imagemhome.jpg')} style={styles.backgroundContainer}>
                <StatusBar barStyle='default'
                />
                <View>
                    <Text style={styles.LoginCadastro}> Cadastro! </Text>
                </View>

                <View>
                    <TextInput style={styles.email}//caixa de txt para Email
                        placeholder={'Email'}
                        returnKeyType='next' //vai para proxima caixa
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
                        underlineColorAndroid='transparent'
                        onSubmitEditing={() => { this.NameTextInput.focus(); }}//passa para proxima cx
                        keyboardType='email-address'//tipo de txt no usuario
                        autoCapitalize='none'
                        autoCorrect={false}
                        //onChangeText={email => this.setState({ email })}
                        //value={this.state.email}
                    />

                    <TextInput style={styles.name}//caixa de txt para usuario
                        placeholder={'Nome Completo'}
                        textContentType='name'
                        returnKeyType='next' //vai para proxima caixa
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
                        underlineColorAndroid='transparent'
                        ref={(input) => { this.NameTextInput = input; }}//referencia para ser lido como proximo
                        onSubmitEditing={() => { this.RGATextInput.focus(); }}
                        autoCapitalize='none'
                        autoCorrect={false}
                        //onChangeText={nome => this.setState({ nome })}
                        //value={this.state.nome}
                    />
                    <TextInput style={styles.rga}//caixa de txt para RGA
                        placeholder={'RGA'}
                        returnKeyType='next'
                        keyboardType='numeric'
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
                        underlineColorAndroid='transparent'
                        onSubmitEditing={() => { this.UsernameTextInput.focus(); }}
                        ref={(input) => { this.RGATextInput = input; }}
                        autoCapitalize='none'
                        autoCorrect={false}
                        //onChangeText={rga => this.setState({ rga })}
                       // value={this.state.rga}
                    />
                    <TextInput style={styles.username}//caixa de txt para username
                        placeholder={'Usuário'}
                        returnKeyType='next' //vai para proxima caixa
                        textContentType='givenName'
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
                        underlineColorAndroid='transparent'
                        onSubmitEditing={() => { this.PasswordTextInput.focus(); }}
                        ref={(input) => { this.UsernameTextInput = input; }}
                        autoCapitalize='none'
                        autoCorrect={false}
                       // onChangeText={usuario => this.setState({ usuario })}
                       // value={this.state.usuario}
                    />
                    <TextInput style={styles.Password}//caixa de txt para Password
                        placeholder={'Senha'}
                        secureTextEntry={true}
                        returnKeyType='next'
                        textContentType='password'
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
                        underlineColorAndroid='transparent'
                        onSubmitEditing={() => { this.ConfirmPasswordTextInput.focus(); }}
                        ref={(input) => this.PasswordTextInput = input}//(1) usado para pular para password
                        //onChangeText={senha => this.setState({ senha })}
                      //  value={this.state.senha}
                    />
                    <TextInput style={styles.confirmPassword}//caixa de txt para  Password
                        placeholder={'Confirmar Senha'}
                        textContentType='newPassword'
                        secureTextEntry={true}
                        returnKeyType='go'
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
                        underlineColorAndroid='transparent'
                        ref={(input) => this.ConfirmPasswordTextInput = input}//(1) usado para pular para password
                    />
                </View>
                <View style={{ marginTop: 20, alignContent: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={this.handleCadastro}>
                        <View style={styles.btnCadastrar}>
                            <Text style={styles.btnCadastrarCadastro}>Cadastrar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("LoginScreen")}>
                        <View style={styles.btnRetornar}>
                            <Text style={styles.btnRetornarCadastro}>Retornar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    LoginCadastro: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    backgroundContainer: { // background da tela
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    email: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25,
        marginTop: 5
    },
    name: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25,
        marginTop: 5
    },
    rga: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25,
        marginTop: 5
    },
    username: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25,
        marginTop: 5
    },
    Password: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25,
        marginTop: 5
    },
    confirmPassword: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25,
        marginTop: 5
    },
    btnCadastrar: {
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        paddingVertical: 10,
        borderRadius: 45,
    },
    btnRetornar: {
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        paddingVertical: 10,
        borderRadius: 45,
    },
    btnCadastrarCadastro: {
        textAlign: 'center',
        width: 150,
        height: 20,
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.7)'
    },
    btnRetornarCadastro: {
        textAlign: 'center',
        width: 150,
        height: 20,
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.7)'
    }
});