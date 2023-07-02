import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

function CardBadge({ data }) {

    const image = `${data.img}`;

    return (
        <TouchableOpacity style={{}} >
            <View style={styles.container}>
                <View style={styles.imageContent}>
                    <Image
                        source={require('../../../assets/badge.png')}
                        style={styles.cardImage}
                    />
                </View>
                <Text style={styles.descricao}>{data.descricao}</Text>
                <Text style={styles.nivel}>{data.badgeNivelId.descricao}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 110,
        height: 130,
        backgroundColor: '#FFF',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 6,
    },
    card: {
        alignItems: 'center',
    },
    imageContent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 70,
        // borderColor: '#DAA520',
        // borderWidth: 2,
        backgroundColor: '#004587',
        borderRadius: 6,
    },
    cardImage: {
        width: 50,
        height: 50,
        borderRadius: 40,
        // borderWidth: 3,
        // borderColor: '#DAA520',
    },
    descricao: {
        color: '#000',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    nivel: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})

export default CardBadge; 
