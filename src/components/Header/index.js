import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

function Header() {
    const navigation = useNavigation();


    // const { signOut } = useContext(AuthContext);

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <TouchableOpacity>
                        <Feather
                            name="menu"
                            size={24}
                            color="#004587"
                            style={{ marginRight: 0, }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image
                            source={require('../../assets/logo-header.png')}
                            style={{ width: 100, height: 50}}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("MensagensScreem")}>
                        <Feather name="message-circle" size={22} color="#023c7c" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('NotificacaoScreem')}>
                        <Feather name="bell" size={24} color="#023c7c" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7f1Es84yxr11Bfj_10hV2_srMeJ-Ry71Yiw&usqp=CAU',
                            }}
                            style={styles.avatar}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}

export default Header;

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
    }
});