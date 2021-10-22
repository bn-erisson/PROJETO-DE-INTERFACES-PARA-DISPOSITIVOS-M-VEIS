import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

const foto1 = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-225x300.png'}
const foto2 = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2016/02/DSC_4056-1-e1567607904661-100x150.jpg'}
const foto3 = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Jos%C3%A9-Neto-de-Faria1-113x150.png'}
const foto4 = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Jefferson-de-Carvalho-Silva1-113x150.png'}

class Professor extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.nome}</Text>
                <Image source={this.props.foto} style={{ width:50, height: 50}}></Image>
            </View>
        )
    }
}

export default class Professores extends Component{
    render(){
        return(
            <View>
                <Professor nome='João' foto={foto1} ></Professor>
                <Professor nome='vitim' foto={foto2} ></Professor>
                <Professor nome='Zé Beto' foto={foto3} ></Professor>
                <Professor nome='Jeff' foto={foto4} ></Professor>
            </View>
        )
    }
}

//O código acima não funciona, não mostra a iamgem, porque? 
//R: tava colocando o this.props.foto sem o source e dentro da tag <Image>