import React, { Component } from "react";
import { View, Text, Button } from 'react-native'

class VotacaoCidades extends Component {
    constructor(props) {
        super(props)
        this.state = { quixada: 0, fortaleza: 0, iracema: 0 }
    }
    //  método
    votarqxd() {
        this.setState({ quixada: this.state.quixada + 1 })
    }
    //  criando variável que recebe função
    votarfor = () => {
        this.setState({ fortaleza: this.state.fortaleza + 1 })
    }
    //  direto no onPress >


    render() {
        return (
            <View>
                <Text>Votos em Quixadá: {this.state.quixada}</Text>
                <Text>Votos em Fortaleza: {this.state.fortaleza}</Text>
                <Text>Votos em Iracema: {this.state.iracema}</Text>
                <Button title='Quixadá' onPress={() => this.votarqxd()} />
                <Button title='Fortaleza' onPress={this.votarfor} />
                <Button title='Iracema' onPress={() => this.setState({ iracema: this.state.iracema + 1 })} />
            </View>
        )
    }
}

export default VotacaoCidades