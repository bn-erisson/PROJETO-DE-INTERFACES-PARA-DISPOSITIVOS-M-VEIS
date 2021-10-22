import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class Professor02 extends Component{
    render(){
//        let foto = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-225x300.png'}
        return(
            <Image source={this.props.foto} style={{ width:150, height: 250}}/>
        )
    }
}