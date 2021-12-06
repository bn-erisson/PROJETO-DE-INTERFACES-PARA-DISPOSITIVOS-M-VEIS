import React, { Component } from "react";
import { View, Text, Image } from "react-native";

const Hulk = (props) => {
    return (
        <View>
            <Text> Olá {props.nome}, eu sou o Hulk</Text>
        </View>
    )
}

class Loki extends Component {
    render() {
        return (
            <View>
                <Text>Olá {this.props.nome}, eu sou o Loki</Text>
            </View>
        )
    }
}

export { Hulk, Loki }