import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

function MensagenEnvio() {
    const navigation = useNavigation();
    const [mensagem, setMensagem] = useState('');

    // const { signOut } = useContext(AuthContext);

    return (
        <SafeAreaView>
            <View style={styles.header}>

                <View style={styles.inputLabel}>
                    <TextInput
                        multiline={true}
                        numberOfLines={3}
                        placeholder="Insira uma mensagem"
                        style={styles.input}
                        placeholderTextColor="#000"
                        value={mensagem}
                        onChangeText={setMensagem}
                    />
                </View>

                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("MensagensScreem")}>
                        <Feather name="paperclip" size={22} color="#023c7c" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('NotificacaoScreem')}>
                        <Feather name="bell" size={24} color="#023c7c" />
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}

export default MensagenEnvio;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth: 0.6,
        borderBottomColor: '#FFF',
        height: 60,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 3,
    },
    botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    icon: {
        marginRight: 17,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 5,
        // borderWidth: 2,
        // borderColor: '#004587'
    },
    inputLabel: {
        width: '100%',
        flexDirection: 'row',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        paddingLeft: 10
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#004587',
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        // borderWidth: 2,
        // marginTop: 12
    },
});