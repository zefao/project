import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    //TouchableOpacity,
    Dimensions,
    StatusBar
} from 'react-native';



const { width: WIDTH } = Dimensions.get('window')

export default class cadastroScreen extends Component {
    render() {
        return (
            <ImageBackground source={require('../imagens/imagemhome.jpg')} style={styles.backgroundContainer}>
                <StatusBar barStyle='default'
                />
                <View>
                    <Text style={styles.LoginTXT}> Cadastro! </Text>
                </View>

                <View>
                    <TextInput style={styles.email}//caixa de txt para usuario
                        placeholder={'Email'}
                        returnKeyType='next' //vai para proxima caixa
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
                        underlineColorAndroid='transparent'
                        //onSubmitEditing={() => this.passwordInput.focus()}//(1) usado para pular para password
                        keyboardType='email-address'//tipo de txt no usuario
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <TextInput style={styles.name}//caixa de txt para usuario
                        placeholder={'Name'}
                        returnKeyType='next' //vai para proxima caixa
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
                        underlineColorAndroid='transparent'
                        //onSubmitEditing={() => this.passwordInput.focus()}//(1) usado para pular para password
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <TextInput style={styles.username}//caixa de txt para usuario
                        placeholder={'Username'}
                        returnKeyType='next' //vai para proxima caixa
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
                        underlineColorAndroid='transparent'
                        //onSubmitEditing={() => this.passwordInput.focus()}//(1) usado para pular para password
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <TextInput style={styles.Password}//caixa de txt para usuario
                        placeholder={'Passoword'}
                        secureTextEntry={true}
                        returnKeyType='next'
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
                        underlineColorAndroid='transparent'
                        ref={(input) => this.passwordInput = input}//(1) usado para pular para password
                    />
                    <TextInput style={styles.confirmPassword}//caixa de txt para usuario
                        placeholder={'Confirm Passoword'}
                        secureTextEntry={true}
                        returnKeyType='go'
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}//tipo de fonte     
                        underlineColorAndroid='transparent'
                        ref={(input) => this.passwordInput = input}//(1) usado para pular para password
                    />
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
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
    }
});