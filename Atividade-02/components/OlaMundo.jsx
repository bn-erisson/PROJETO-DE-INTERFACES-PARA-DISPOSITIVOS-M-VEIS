import React, { Component } from 'react'
import { Text, View } from 'react-native'

class OlaMundo extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }} >
                    Olá mundo
                </Text>
            </View>
        )
    }
}

export default OlaMundo