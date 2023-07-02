import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Feather } from '@expo/vector-icons';

import Ionicons from '@expo/vector-icons/Ionicons';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Grupo from '../../pages/Mensagens/Grupo';
import Privado from '../../pages/Mensagens/Privado';
import Recentes from '../../pages/Mensagens/Recentes';

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
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
        /*
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#f8922c',
            tabBarInactiveTintColor: '#000',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#FFF',
            }
        }}
        */
        >
            <Tab.Screen
                name="Grupos"
                component={Grupo}
                options={{
                    tabBarShowLabel: true,
                    headerShown: false,
                    // tabBarIcon: ({ focused }) => (
                    //     <FontAwesome
                    //         name="users"
                    //         size={22}
                    //         color={focused ? '#004587' : '#f8922c'}
                    //     />
                    // )
                }}
            />
            <Tab.Screen
                name="Recentes"
                component={Recentes}
                options={{
                    tabBarShowLabel: true,
                    headerShown: false,
                    // tabBarIcon: ({ focused }) => (
                    //     <FontAwesome
                    //         name="comment"
                    //         size={22}
                    //         color={focused ? '#004587' : '#f8922c'}
                    //     />
                    // )
                }}
            />
            <Tab.Screen
                name="Privado"
                component={Privado}
                options={{
                    tabBarShowLabel: true,
                    headerShown: false,
                    // tabBarIcon: ({ focused }) => (
                    //     <FontAwesome
                    //         name="address-book"
                    //         size={22}
                    //         color={focused ? '#004587' : '#f8922c'}
                    //     />
                    // )
                }}
            />
            {/* <Tab.Screen
                name="Privados"
                component={BadgeAlls}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="a"
                            size={22}
                            color={focused ? '#004587' : '#f8922c'}
                        />
                    )
                }}
            /> */}
        </Tab.Navigator>
    )
}

export default TopTabs;