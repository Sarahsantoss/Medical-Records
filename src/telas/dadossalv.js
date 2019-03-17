import React, {Component} from 'react';
import {TextInput, Text,Image, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class DadosSalv extends Component {
     state={
        campoNome: 'Sarah',
        campoSobre: 'Santos',
        campoNas: '05/12',
        campoId: '19 anos',
        campoCid: 'Machado',
        campoEs: 'MG',
        campoCPF: '000.000.000-00',
        campoBCG: '0000',
        campoHepB: '000',
        campoPent1: '000',
        campoPent2: '000',
        campoPent3: '000',
     }
     render(){

        return(

                <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
                        > Nome: {this.state.campoNome} </Text>
        
            
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
                    > Sobrenome: {this.state.campoSobre} </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
                 > Nascimento: {this.state.campoNas} </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
                 > Idade: {this.state.campoId} </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
                 > Cidade: {this.state.campoCid} </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
                    > Estado: {this.state.campoEs} </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
                    > CPF: {this.state.campoCPF} </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
                    > BCG: {this.state.campoBCG} </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
              >Hepatite B: {this.state.campoHepB} </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
                 > Pentavalente: 1º Dose {this.state.campoPent1} </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
                > Pentavalente: 2º Dose {this.state.campoPent2} </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece'  }}
             > Pentavalente: 3º Dose{this.state.campoPent3} </Text>
             </View>
             
            );
     }

      
}
    