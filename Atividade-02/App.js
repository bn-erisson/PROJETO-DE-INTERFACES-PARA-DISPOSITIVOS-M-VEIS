import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MeuProps from './components/MeuProps';
import OlaMundo from './components/OlaMundo'
import Professor from './components/Professor'
import Professor02 from './components/Professor02';
import Professores from './components/Professores';
import Vindadores, { Hulk as H, Loki as L } from './components/Vingadores';
import Cabecalho from './components/Atividade-02/Cabecalho';
import Corpo from './components/Atividade-02/Corpo';
import Disciplina from './components/Atividade-02/Disciplina';
import Casa from './components/Got/Casa';
import Personagem from './components/Got/Personagem';
import IMC from './components/Imc/Imc';
import MeuEstado from './components/State/State';
import VotacaoCidades from './components/Votacao/Votacaocidades';
import VotacaoCidadesFuncao from './components/Votacao/Votacaocidadesfuncao';
import EstudoEstilos from './components/Estilos/Estilos';
import Myflex from './components/Estilos/Flexbox';
import CalculadoraApp from './components/Calculadora/CalculadoraApp';
import EntradaComBotao from './components/Botao/EntradaComBotao';




const foto = { uri: 'https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-225x300.png' }
const foto2 = { uri: 'https://mir-s3-cdn-cf.behance.net/user/276/6a0f9256746153.600470ab106ea.jpg' }


/*export default function App() {
  return (
    <View style={styles.container}>
      <OlaMundo></OlaMundo>
      <MeuProps nome='João' idade='23' curso='DD' />
      <Professor02 foto={foto}/>
      <Professores></Professores>
      <StatusBar style="auto" />
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <H nome='Erisson'/>
      <L nome='Carol'/>
      <StatusBar style="auto" />
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <H nome='Erisson'/>
      <L nome='Carol'/>
      <StatusBar style="auto" />
    </View>
  );
}*/

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome='Erisson' curso='Design Digital'></Cabecalho>
      <Corpo foto={foto2}></Corpo>
      <Disciplina disciplina='Projeto de interfaces para dispositivos móveis'></Disciplina>
      <Disciplina disciplina='Engenharia de Software'></Disciplina>
      <Disciplina disciplina='User Experience (UX)'></Disciplina>
      <StatusBar style="auto" />
    </View>
  );
}

/*export default function App() {
  return (
    <View style={styles.container}>
      <Casa casa='Lannister'>
        <Personagem nome='Tyrion' />
        <Personagem nome='Tywin' />
        <Personagem nome='Homem de Ferro' />
        <Personagem nome='Cersei' />
      </Casa>
      <StatusBar style="auto" />
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <IMC peso='52' altura='1.73'></IMC>
      <StatusBar style="auto" />
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <MeuEstado></MeuEstado>
      <StatusBar style="auto" />
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <VotacaoCidades></VotacaoCidades>
      <StatusBar style="auto" />
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <VotacaoCidades></VotacaoCidades>
      <StatusBar style="auto" />
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <VotacaoCidadesFuncao></VotacaoCidadesFuncao>
      <StatusBar style="auto" />
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <EstudoEstilos/>
      <StatusBar style="auto" />
    </View>
  );
}*/

/*export default function App() {
  return (
    <Myflex></Myflex>
  );
}*/

/*export default function App() {
  return (
    <View>
      <CalculadoraApp />
    </View>
  );
}*/

/*export default function App() {
  return (
    <EntradaComBotao></EntradaComBotao>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
