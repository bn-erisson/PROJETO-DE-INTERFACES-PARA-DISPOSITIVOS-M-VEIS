import React, { Component } from "react";
import { View, Text, Button } from 'react-native'

class MeuEstado extends Component {
    constructor(props) {
        super(props)
        this.state = { contador: 0 }
    }

    acaobotao() {
        this.setState({ contador: this.state.contador + 1 })
    }

    render() {
        return (
            <View>
                <Text>Contador: {this.state.contador}</Text>
                <Button title='Botão' onPress={() => this.acaobotao()} />
            </View>
        )
    }
}

export default MeuEstado