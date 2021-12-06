import React, { useState, useEffect } from "react";
import { View, Text, Button } from 'react-native'

const VotacaoCidadesFuncao = () => {

    const [quixada, setVotosQuixada] = useState(0)
    const [fortaleza, setVotosFortaleza] = useState(0)
    const [iracema, setVotosIracema] = useState(0)

    const [statusVotosQxd, setstatusVotosQxd] = useState('Par')
    const [statusVotosFor, setstatusVotosFor] = useState('Par')
    const [statusVotosIra, setstatusVotosIra] = useState('Par')

    useEffect(
        () => {
            if (quixada % 2 === 0) setstatusVotosQxd('Par')
            else setstatusVotosQxd('Impar')

            if (fortaleza % 2 === 0) setstatusVotosFor('Par')
            else setstatusVotosFor('Impar')

            if (iracema % 2 === 0) setstatusVotosIra('Par')
            else setstatusVotosIra('Impar')
        },
        [quixada, fortaleza, iracema]
    )

    function votarQuixada() {
        setVotosQuixada(quixada + 1)
    }

    const votarFortaleza = () => {
        setVotosFortaleza(fortaleza + 1)
    }


    return (
        <View>
            <Text>Votos em Quixadá: {quixada} - {statusVotosQxd}</Text>
            <Text>Votos em Fortaleza: {fortaleza} - {statusVotosFor}</Text>
            <Text>Votos em Iracema: {iracema} - {statusVotosIra}</Text>
            <Button title='Quixadá' onPress={() => votarQuixada()} />
            <Button title='Fortaleza' onPress={votarFortaleza} />
            <Button title='Iracema' onPress={() => setVotosIracema(iracema + 1)} />
        </View>
    )
}


export default VotacaoCidadesFuncao

//43:52