import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabs from '../navigations/TopTabs';
import TopTabsContatos from '../navigations/TopTabsContatos';
import Home from '../pages/Home';
import Chat from '../pages/Mensagens/Chat';
import Notificacao from '../pages/Notificação';
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function StackRoutes() {
    return (
        <Stack.Navigator
            ScreenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
            }}
        >
            <Stack.Screen name="HomeScreem" component={Home} options={{ headerShown: false, title: 'Home' }} />
            <Stack.Screen name="NotificacaoScreem" component={Notificacao} options={{ headerShown: true, title: 'Notificações' }} />
            <Stack.Screen name="MensagensScreem" component={TopTabs}
                options={{
                    headerShown: true,
                    title: 'Mensagens',
                    headerRight: () => (
                        <>
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                            >
                                <Feather
                                    name="search"
                                    size={20}
                                    color="#000"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginLeft: 15 }}
                            >
                                <Feather
                                    name="settings"
                                    size={20}
                                    color="#000"
                                />
                            </TouchableOpacity>
                        </>
                    ),
                }}
            />
            <Stack.Screen name="ContatosScreem" component={TopTabsContatos} options={{ headerShown: true, title: 'Contatos' }} />
            <Stack.Screen name="ChatScreem" component={Chat} options={{ headerShown: false, title: 'Mensagens' }} />
        </Stack.Navigator>
    );
}

export default StackRoutes;