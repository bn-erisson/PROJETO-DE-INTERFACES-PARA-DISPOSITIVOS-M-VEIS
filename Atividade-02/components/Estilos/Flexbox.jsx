import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet } from 'react-native';

/*const myFlex = () =>
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <StatusBar style="auto" />
        <View  style={{ flex: 1, backgroundColor: 'red',margin:3 }}>

        </View>
        <View  style={{ flex: 2, backgroundColor: 'black',margin:3 }}>

        </View>
        <View  style={{ flex: 3, backgroundColor: 'green',margin:3 }}>

        </View>
    </View>*/

    const myFlex = () =>
    <View style={{ 
        flex: 1, 
        backgroundColor: '#cccccc',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        }}>
        <View  style={{ width:50, height:50, backgroundColor: '#165c7a',margin:3 }}>

        </View>
        <View  style={{ width:50, height:50, backgroundColor: '#16417a',margin:3 }}>

        </View>
        <View  style={{ width:50, height:50, backgroundColor: '#16207a',margin:3 }}>

        </View>
        
    </View>
    


export default myFlex