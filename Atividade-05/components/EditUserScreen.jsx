import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from "react-native";
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { db, getDoc, doc, deleteDoc, updateDoc } from '../firebase/firebase-config'

const EditUserScreen = (props) => {
    const initialState = { id: '', nome: '', sobrenome: '', curso: '', ira: '' }
    const [user, setUser] = useState(initialState)

    useEffect(() => {
        getUserById(props.route.params.userId)
    }, [])

    const handleChangeText = (value, prop) => {
        setUser({ ...user, [prop]: value })
    }

    const getUserById = async (id) => {
        const user = await getDoc(doc(db, "users", id))
        if (user.exists) {
            const data = user.data()
            setUser({ ...data, id: user.id })
        }
    }

    const deleteUser = async (id) => {
        await deleteDoc(doc(db, "users", id))
        props.navigation.navigate('ListUserScreen')
    }

    const updateUser = async () => {
        await updateDoc(doc(db, "users", user.id), {
            nome: user.nome,
            sobrenome: user.sobrenome,
            curso: user.curso,
            ira: user.ira
        })
        props.navigation.navigate('ListUserScreen')
    }

    return (
        <ScrollView style={styles.container}>
            <View >
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
                    value={user.nome}
                    onChangeText={(value) => handleChangeText(value, 'nome')}
                />

            </View>
            <View >
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
                    value={user.sobrenome}
                    onChangeText={(value) => handleChangeText(value, 'sobrenome')}
                />

            </View>
            <View >
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
                    value={user.curso}
                    onChangeText={(value) => handleChangeText(value, 'curso')}
                />
                <View >
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
                        value={user.ira}
                        onChangeText={(value) => handleChangeText(value, 'ira')}
                    />
                </View>
                <View style={styles.spacer} />
                <View>
                    <Button
                        color="#0b3040"
                        borderRadius="20"
                        title='Atualizar'
                        onPress={() => updateUser()}
                    />
                </View>
            </View>
            <View style={styles.spacer} />
            <View style={styles.btn}>
                <Button
                    color="#0b3040"
                    borderRadius="20"
                    title='excluir'
                    color="#ff0000"
                    onPress={() => deleteUser(user.id)}
                />
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


export default EditUserScreen;