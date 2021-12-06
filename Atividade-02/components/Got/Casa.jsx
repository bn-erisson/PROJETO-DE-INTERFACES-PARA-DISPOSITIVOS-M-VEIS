import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Personagem from "./Personagem";

/*const Casa = () =>
    <View>
        <Personagem nome='Tyrion' casa='Lannister' />
        <Personagem nome='Tywin' casa='Lannister' />
        <Personagem nome='Homem de Ferro' casa='Stark' />
        <Personagem nome='Cersei' casa='Lannister' />
    </View>

export default Casa*/

const Casa = (props) =>
    <View>
        <Text>Game of Thrones</Text>
        {
            React.Children.map(
                props.children,(personangem)=>{
                    return React.cloneElement(personangem,{...props})
                }
            )
        }
    </View>

export default Casa