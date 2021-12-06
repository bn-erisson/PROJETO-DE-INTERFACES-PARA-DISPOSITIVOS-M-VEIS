import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import ImcMensagem from "./IMCMensagem";

const calcularIMC = (props) => {
    const imc = props.peso / (props.altura * props.altura)
    if (props.altura != null && props.peso != null)
        return (
            <View>
                <Text style={{ fontSize: 20, color: 'black', margin: 10 }}>
                    IMC: {imc}
                </Text>
                <ImcMensagem IMC={imc}/>
            </View>
        )
    return null

}
export default calcularIMC