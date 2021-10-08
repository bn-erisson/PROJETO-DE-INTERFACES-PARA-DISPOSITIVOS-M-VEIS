import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Aluno from './components/Aluno'

export default function App() {
  return (
    <View style={styles.container}>
      <Aluno/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//Crie um primeiro projeto no EXPO
//Suba seu projeto no GITHUB
//Crie o componente Aluno.jsx e imprima as seguintes informações:
//Nome, idade, cidade e curso.
//Copie o link do seu repositório e cole num arquivo .txt e suba no SIPPA
//No SIPPA em A01
//Deadline: 08/10