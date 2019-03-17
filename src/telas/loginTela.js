import React, { Component } from 'react';
import {TextInput, View, Text } from 'react-native';

export default class LoginTela extends Component { 

      state = {
      CampoCPF:'',
      CampoSen:'',
      }

validacao(){
   if(this.state.CampoCPF == '')
   {
      alert('Campo CPF vazio!')
      return -1
   } else if(isNaN(Number(this.state.CampoCPF)))
   {
      alert('Campo CPF só pode contar números!')
      return -1
   }else if(this.state.CampoSen == '')
   {
      alert('Campo de senha vazio!')
      return -1
   }
   if(this.state.CampoCPF == '00000000000')
   {
     if(this.state.CampoSen == 'dia')
       return 0

    }
}

    dados(){
    
    var resp = this.validacao()

    if(resp == 0)this.props.navigation.navigate('Dadsalv')
        
    }
 
 render(){
     return(
        <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                > CPF </Text>
                <TextInput
                 style={{ height: 40, borderColor: 'gray', borderWidth: 1,width: 300, height: 40 }}
                 onChangeText={(text) => this.setState({CampoCPF:text})}
                 />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#19aece' }}
                 > Senha </Text>
                <TextInput
                secureTextEntry={true}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, height: 40  }}
                 onChangeText={(text) => this.setState({CampoSen:text})}
            
                 />
                 <Text style={{fontSize:30, backgroundColor:'white', fontWeight:'normal', color:'white', height:10}}
                ></Text>
                <Text style={{fontSize:30, backgroundColor:'white', fontWeight:'normal', color:'white', height:10}}
                ></Text>
                 <Text style={{fontSize:25, backgroundColor:'#19aece', fontWeight:'normal', color:'white', borderRadius: 10, width: 80, height: 40}}
                    onPress={() => this.dados()}
                 > Entrar  </Text>


      
        </View>
 
     );
   }     
}
