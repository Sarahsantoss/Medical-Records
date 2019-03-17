import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { db } from '../config';

export default class CadastroTela extends Component {
    state = {
        campoBCG: '',
        campoHepB: '',
        campoPent1: '',
        campoPent2: '',
        campoPent3: '',
        campoVIP1: '',
        campoVIP2: '',
        campoVIP3: '',
        campoVORH1: '',
        campoVORH2: '',
        campoVORH3: '',
        campoPneu1: '',
        campoPneu2: '',
        campoPneu3: '',
        campoPneuref: '',
        campoMeni1: '',
        campoMeni2: '',
        campoMeni3: '',
        campoMeniref: '',
        campoFM: '',
        campoSRC1: '',
        campoSRC2: '',
        campoSRC3: '',
        campoVop1: '',
        campoVop2: '',
        campoHepA: '',
        campoDTP1: '',
        campoDTP2: '',
        campoSCRV: '',
        campoVari: '',
        campoHPV1: '',
        campoHPV2: '',
        campoDD: '',
    }

    salvaDados(dados) {
        db.ref('/Vaccines').push(dados);
    }
    Salva(){
            const dados = this.state
            this.salvaDados(dados)
            this.props.navigation.navigate('Dadsalv')
    
    }
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>

                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > Coloque a data de cada vacina:</Text>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > BCG: Dose Única</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text)  => this.setState({campoBCG:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > Hepatite B: Dose </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) => this.setState({campoHepB:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > Pentavalente (DTP + HB + Hib): </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 1º Dose: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) => this.setState({campoPent1:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 2º Dose: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text)  => this.setState({campoPent2:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 3º Dose: </Text>
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                    onChangeText={(text)  => this.setState({campoPent3:text})}
                />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > VIP (Inativa Poliomelite): </Text>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 1º Dose: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) => this.setState({campoVIP1:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 2º Dose: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) => this.setState({campoVIP2:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 3º Dose: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) => this.setState({campoVIP3:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > VORH (Vacina Oral de Rotavírus Humano): </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 1º Dose: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) => this.setState({campoVORH1:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 2º Dose: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) => this.setState({campoVORH2:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 3º Dose: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) => this.setState({campoVORH3:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > Pneumocócica 10 (Valente): </Text>
                    
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 1º Dose: </Text>
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                    onChangeText={(text) => this.setState({campoPneu1:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 2º Dose: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) => this.setState({campoPneu2:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 3º Dose: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text)  => this.setState({campoPneu3:text})}
                    />
                     <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > Reforço: </Text>
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                    onChangeText={(text) => this.setState({campoPneuref:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > Meningocócica C: </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 1º Dose: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text)=> this.setState({campoMeni1:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 2º Dose: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) => this.setState({campoMeni2:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 3º Dose: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) =>this.setState({campoMeni3:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > Reforço: </Text>
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                    onChangeText={(text) => this.setState({campoMeniref:text})}
                />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > Febre Amarela: Dose Unica </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) => this.setState({campoFM:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > SRC (Triplice Viral): </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 1º Dose </Text>
                     <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) => this.setState({campoSRC1:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 2º Dose: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) => this.setState({campoSRC2:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 3º Dose </Text>
                     <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text)=> this.setState({campoSRC3:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > VOP (Oral Poliomelite) </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 1º Reforço: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) => this.setState({campoVop1:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 2º Reforço: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) =>this.setState({campoVop2:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > Hepatite A: Dose Única</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) =>this.setState({campoHepA:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > DTP (Triplice Bacteriana) </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 1º Reforço: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) =>this.setState({campoDTP1:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 2º Reforço: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) =>this.setState({campoDTP2:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > SCRV (Tetra Viral): Dose Unica</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text)=>this.setState({campoSCRV:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > Varicela: Dose </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) =>this.setState({campoVari:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > HPV Quadrivalente: </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 1º Dose </Text>
                   <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text) =>this.setState({campoHPV1:text})}
                    />
                     <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > 2º Dose </Text>
                   <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40 }}
                        onChangeText={(text)=>this.setState({campoHPV2:text})}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                    > Dupla Adulto : </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 30 }}
                        onChangeText={(text)=>this.setState({campoDD:text})}
                    />
                    <Text style={{fontSize:30, backgroundColor:'white', fontWeight:'normal', color:'white', height:10}}
                ></Text>
                    <Text style={{fontSize:30,fontWeight:'bold', color:'#19aece', fontSize:25, backgroundColor:'#19aece', fontWeight:'normal', color:'white', borderRadius: 10, width: 110, height: 40}}
                     onPress ={ () =>this.Salva() }
                      > Finalizar</Text>


                </View>

            </ScrollView>


        </View>

        );
    }





}