import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const IMCMsg = (props) => {

    if (props.IMC < 17) return <Text style={{ fontSize: 30,fontWeight: "bold", color: 'red', margin: 10 }}> Alerta: Muito abaixo do peso</Text>
    else
    if (props.IMC > 17 && props.IMC < 18.49) return <Text style={{ fontSize: 30,fontWeight: "bold", color: 'red', margin: 10 }}> Abaixo do peso</Text>
    else
    if (props.IMC > 18.5 && props.IMC < 24.99) return <Text style={{ fontSize: 30,fontWeight: "bold", color: 'blue', margin: 10 }}> Peso normal</Text>
    else
    if (props.IMC > 25 && props.IMC < 29.99) return <Text style={{ fontSize: 30,fontWeight: "bold", color: 'red', margin: 10 }}> Acima do peso</Text>
    else
    if (props.IMC > 30 && props.IMC < 34.99) return <Text style={{ fontSize: 30,fontWeight: "bold", color: 'red', margin: 10 }}>Alerta: Obesidade I</Text>
    else
    if (props.IMC > 35 && props.IMC < 39.99) return <Text style={{ fontSize: 30,fontWeight: "bold", color: 'red', margin: 10 }}>Alerta: Obesidade II (Severa)</Text>
    else
    return <Text style={{ fontSize: 30,fontWeight: "bold", color: 'red', margin: 10 }}>Alerta: Obesidade III (Mórbida)</Text>

}
export default IMCMsg