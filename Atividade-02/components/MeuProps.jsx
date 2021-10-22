import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MeuProps extends Component {
    render() {
        return (
            <View>
                <Text>
                    Nome: {this.props.nome}
                </Text>
                <Text>
                    Idade: {this.props.idade}
                </Text>
                <Text>
                    Curso: {this.props.curso}
                </Text>
            </View>
        )
    }
}
//////////////////////////////////////////////////
/*export default (props) =>
    <View>
        <Text>
            Nome: {props.nome}
        </Text>
    </View>*/