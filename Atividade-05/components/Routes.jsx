import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddUserScreen from './AddUserScreen';
import ListUserScreen from './ListUserScreen';
import EditUserScreen from './EditUserScreen';

const MainStack = createStackNavigator()

function MainStackScreens() {
    return (

        <NavigationContainer>
            <MainStack.Navigator>

                <MainStack.Screen
                    name='AddUserScreen'
                    component={AddUserScreen}
                    options={{ title: 'Adicionar usuarios' }}
                />
                <MainStack.Screen
                    name='ListUserScreen'
                    component={ListUserScreen}
                    options={{ title: 'Listar usuarios' }}
                />
                <MainStack.Screen
                    name='EditUserScreen'
                    component={EditUserScreen}
                    options={{ title: 'Editar usuarios' }}
                />

            </MainStack.Navigator>
        </NavigationContainer>
    )

}
export default MainStackScreens