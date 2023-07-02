import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FabButton from '../../../../components/Buttons/FabButton';

export default function Solicitacoes() {
    return (
        <View style={styles.container}>
            <Text>Solicitacões</Text>
            <FabButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})