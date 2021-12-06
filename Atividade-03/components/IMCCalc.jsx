import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import IMCMsg from "./IMCMsg";

const IMCCalc = (props) => {
    const imc = props.peso / (props.altura * props.altura)
    if (props.altura != null && props.peso != null)
        return (
            <View>
                <Text style={{ fontSize: 30,fontWeight: "bold", color: 'black', margin: 10 }}>
                    Seu IMC é: {imc}
                </Text>
                <IMCMsg IMC={imc}/>
            </View>
        )
    return null

}
export default IMCCalc