/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { db } from '../config';

export default class CadastroTela extends Component {

    state = {
        campoNome: '',
        campoSobre: '',
        campoNas: '',
        campoId: '',
        campoCid: '',
        campoEs: '',
        campoCPF: '',
        campoSen: '',
    }

    validacao()
    {
        if(this.state.campoNome == ''){
            alert('Campo Nome vazio!!')
            return -1
        } else if(this.state.campoSobre == '')
        {
            alert('Campo Sobrenome vazio!!')
            return -1
        }
        else if(this.state.campoNas == '')
        {
            alert('Campo de data de nascimento vazio!!')
            return -1
        }
        else if(this.state.campoId == '')
        {
            alert('Campo de idade vazio!!')
            return -1
        }
        else if(this.state.campoCid == '')
        {
            alert('Campo de cidade vazio!!')
            return -1
        }
        else if(this.state.campoEs == '')
        {
            alert('Campo de estado vazio!!')
            return -1
        }
        else if(this.state.campoCPF == '')
        {
            alert('Campo de CPF vazio!!')
            return -1
        }
        else if(this.state.campoSen == '')
        {
            alert('Campo de senha vazio!!')
            return -1
        }

        return 0
    }


    salvarDados(dados) {
        db.ref('/User').push(dados);
    }
    
    vacina() {
        var resp = this.validacao()

        if(resp == 0) {
            const dados = this.state
            this.salvarDados(dados)
            this.props.navigation.navigate('SalvTela')
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView>

                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
                        > Nome: </Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                            onChangeText={(text) => this.setState({campoNome:text})}
                        />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
                        > Sobrenome: </Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                            onChangeText={(text) => this.setState({campoSobre:text})}
                        />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
                        > Nascimento: </Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                            onChangeText={(text) => this.setState({campoNas:text})}
                        />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
                        > Idade: </Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                            onChangeText={(text) => this.setState({campoId:text})}
                        />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                        > Cidade: </Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                            onChangeText={(text) => this.setState({campoCid:text})}
                        />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'}}
                        > Estado: </Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                            onChangeText={(text) => this.setState({campoEs:text})}
                        />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'}}
                        > CPF: </Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                            onChangeText={(text) => this.setState({campoCPF:text})}
                        />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                        > Senha: </Text>
                        <TextInput
                         secureTextEntry={true}
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40  }}
                            onChangeText={(text) => this.setState({campoSen:text})}
                        />
                        <Text style={{fontSize:25, backgroundColor:'#19aece', fontWeight:'normal', color:'white', borderRadius: 10, width: 108, height: 40}}
                            onPress={() => this.vacina()}
                        > Próximo </Text>

                    </View>

                </ScrollView>


            </View>
        );
    
    }
}