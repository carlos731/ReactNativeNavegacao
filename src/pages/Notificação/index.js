import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Notificacao() {
    return (
        <View style={styles.container}>
            <Text>Notificação</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
})