import React, { Component } from "react";
import { View, Text, Image } from "react-native";

const IMC = (props) => {
    function calculo(peso, altura) {
        return peso / (altura * altura)
    }

    return(
        <View>
        <Text>Peso: {props.peso}</Text>
        <Text>Altura: {props.altura}</Text>
        <Text>IMC: {calculo(props.peso,props.altura)}</Text>
    </View>
    )
    

}

export default IMC