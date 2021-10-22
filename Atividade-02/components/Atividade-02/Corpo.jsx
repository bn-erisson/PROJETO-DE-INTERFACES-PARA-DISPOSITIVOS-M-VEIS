import React, {Component} from "react";
import { View,Text, Image} from "react-native";

export default class Cabecalho extends Component{
    render(){
        return(
            <View>
                <Image source={this.props.foto} style={{ width:150, height: 150}}></Image>
            </View>
        )
    }
}