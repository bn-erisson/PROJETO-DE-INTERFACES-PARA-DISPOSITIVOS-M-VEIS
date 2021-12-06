import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const imcMensagem = (props) => {

    if (props.IMC <= 19) return <Text style={{ fontSize: 20, color: 'black', margin: 10 }}> Alerta: Abaixo do peso</Text>
    if (props.IMC >= 25) return <Text style={{ fontSize: 20, color: 'black', margin: 10 }}> Alerta: Acima do peso</Text>
    return <Text style={{ fontSize: 20, color: 'black', margin: 10 }}>Alerta: Peso na Média</Text>

}
export default imcMensagem