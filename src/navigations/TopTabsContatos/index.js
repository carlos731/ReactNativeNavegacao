import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Feather } from '@expo/vector-icons';

import Ionicons from '@expo/vector-icons/Ionicons';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Grupo from '../../pages/Mensagens/Grupo';
import Contato from '../../pages/Mensagens/Recentes';
import Contatos from '../../pages/Mensagens/Contato/Contatos';
import Solicitacoes from '../../pages/Mensagens/Contato/Solicitações';

const Tab = createMaterialTopTabNavigator();

function TopTabsContatos() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarInactiveTintColor: '#f8922c',
                tabBarActiveTintColor: 'blue',
                tabBarStyle: {
                    backgroundColor: '#FFF'
                }
            }}
        >
            <Tab.Screen
                name="Contatos"
                component={Contatos}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Solicitações"
                component={Solicitacoes}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

export default TopTabsContatos;