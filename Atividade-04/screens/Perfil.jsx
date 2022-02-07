import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';

import Container from '../components/Container'
import Button from '../components/Button'

const Perfil = ({ route, navigation }) => {
    const [visible, setVisible] = useState(true)
    const { nome, idade, email } = route.params

    const handleRedirect = () => {
        setVisible(false)
        navigation.navigate('Home')
    }

    return (
        <Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <Container>
                    <View style={styles.modalView}>
                        <Image
                            style={styles.tinyImage}
                            source={{
                                uri: 'https://conteudo.imguol.com.br/c/noticias/21/2019/10/31/ceo-mark-zuckerberg-tem-defendeu-regras-da-plataforma-diante-de-protestos-1572539681496_v2_1x1.jpg'
                            }}
                        />
                        <Text style={styles.text}>Nome: {nome}</Text>
                        <Text style={styles.text}>Idade: {idade}</Text>
                        <Text style={styles.text}>Email: {email}</Text>
                        <Button
                            title="Home"
                            onPress={() => handleRedirect()}
                        />
                    </View>
                </Container>
            </Modal>
        </Container>
    );
};

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 25,
        height: 250,
        width: 300,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    tinyImage: {
        width: 50,
        height: 50,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
    },
})

export default Perfil;