/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Image, View} from 'react-native';



export default class TelaInicial extends Component {

  entrar()
  {
    this.props.navigation.navigate('LogTela')
  }

  cadastrar()
  {
    this.props.navigation.navigate('CadTela')
  }
  render() {
    return (
      <View style={{flex:1 , backgroundColor:'white'}}>
       
        <View style = {{ backgroundColor:'white', alignItems:'center'}}>
        <Image style={{width: 220,height: 80,marginRight: 10,marginBottom: 12,marginTop: 12}}
        source={require('../img/medrec.png')}
        />

        </View>
        <Text style={{fontSize:30, backgroundColor:'white', fontWeight:'normal', color:'white', height:10}}
          ></Text>
          <Text style={{fontSize:30, backgroundColor:'white', fontWeight:'normal', color:'white', height:10}}
          ></Text>
        <View style = {{ alignItems:'center', justifyContent:'center'}}>
        <Image style={{width:300,height:280}}
        source={require('../img/vacina.png')}
        
        />
        <Text style={{fontSize:30, backgroundColor:'white', fontWeight:'normal', color:'white', height:10}}
          ></Text>
          <Text style={{fontSize:30, backgroundColor:'white', fontWeight:'normal', color:'white', height:10}}
          ></Text>
          <Text style={{fontSize:30, backgroundColor:'white', fontWeight:'normal', color:'white', height:10}}
          >/r</Text>
        </View>

        <View style = {{ backgroundColor:'white', alignItems:'center' , justifyContent:'center'}}>
        <Text style={{fontSize:25, backgroundColor:'#19aece', fontWeight:'normal', color:'white', borderTopWidth:-3, borderBottomWidth:-3, borderRadius: 10}}
        onPress ={ () =>this.entrar() }
        >           Entrar           </Text>
        <Text style={{fontSize:30, backgroundColor:'white', fontWeight:'normal', color:'white', height:10}}
          ></Text>
          <Text style={{fontSize:30, backgroundColor:'white', fontWeight:'normal', color:'white', height:10}}
          ></Text>
          
         <Text style={{fontSize:25, backgroundColor:'#19aece', fontWeight:'normal', color:'white', borderTopColor: '#19aece',borderTopWidth:-3, borderBottomWidth: -3, borderRadius: 10}}
        onPress ={ () =>this.cadastrar() }
        >        Cadastrar        </Text>
        </View>
       
      



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});