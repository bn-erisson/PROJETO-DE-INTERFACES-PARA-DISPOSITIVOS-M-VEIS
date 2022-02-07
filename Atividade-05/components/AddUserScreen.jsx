import React, { useState } from 'react';
import { StyleSheet, View, Button } from "react-native";
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { db, addDoc, collection } from '../firebase/firebase-config'

const AddUserScreen = (props) => {

    const initialState = { nome: '', sobrenome: '', curso: '', ira: '' }
    const [state, setState] = useState(initialState)

    const addNewUser = async () => {
        try {
            await addDoc(collection(db, "users"), {
                nome: state.nome,
                sobrenome: state.sobrenome,
                curso: state.curso,
                ira: state.ira
            });
            props.navigation.navigate('ListUserScreen')
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeTex = (value, nome) => {
        setState({ ...state, [nome]: value })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.textInput}>
                <TextInput
                    style={{
                        width: 200,
                        height: 40,
                        color: 'white',
                        borderRadius: 20,
                        backgroundColor: '#165c7a',
                        margin: 10,
                        padding: 10,
                        alignSelf: 'center'
                    }}
                    placeholder='Nome'
                    value={state.nome}
                    onChangeText={(value) => handleChangeTex(value, 'nome')}
                />
            </View>
            <View style={styles.textInput}>
                <TextInput
                    style={{
                        width: 200,
                        height: 40,
                        color: 'white',
                        borderRadius: 20,
                        backgroundColor: '#165c7a',
                        margin: 10,
                        padding: 10,
                        alignSelf: 'center'
                    }}
                    placeholder='Sobrenome'
                    value={state.sobrenome}
                    onChangeText={(value) => handleChangeTex(value, 'sobrenome')}
                />
            </View>
            <View style={styles.textInput}>
                <TextInput
                style={{
                    width: 200,
                    height: 40,
                    color: 'white',
                    borderRadius: 20,
                    backgroundColor: '#165c7a',
                    margin: 10,
                    padding: 10,
                    alignSelf: 'center'
                }}
                    placeholder='Curso'
                    value={state.curso}
                    onChangeText={(value) => handleChangeTex(value, 'curso')}
                />
            </View>
            <View style={styles.textInput}>
                <TextInput
                    style={{
                        width: 200,
                        height: 40,
                        color: 'white',
                        borderRadius: 20,
                        backgroundColor: '#165c7a',
                        margin: 10,
                        padding: 10,
                        alignSelf: 'center'
                    }}
                    placeholder='Ira'
                    value={state.ira}
                    onChangeText={(value) => handleChangeTex(value, 'ira')}
                />
            </View>
            <View>
                <Button color="#0b3040" borderRadius="20" title='Adicionar usuario' onPress={() => addNewUser()} />
            </View>
            <View style={styles.spacer} />
            <View>
                <Button color="#0b3040" borderRadius="20" title='listar usuarios' onPress={() => props.navigation.navigate('ListUserScreen')} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    textInput: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomColor: '#cccccc'
    },
    spacer: {
        marginBottom: 5
    }
})

export default AddUserScreen;