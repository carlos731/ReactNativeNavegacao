import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import FabButton from '../../components/Buttons/FabButton';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../components/Header';

export default function Home() {
    const navigation = useNavigation();

    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState();

    const dificuldades = [
        { label: 'A', id: 1 },
    ]

    const items = [
        { label: 'A', value: 1 },
        { label: 'B', value: 2 },
        { label: 'C', value: 3 },
        { label: 'D', value: 4 },
        { label: 'E', value: 5 },
        { label: 'F', value: 6 },
    ]

    // alert("Value: " + currentValue);

    return (
        <>
            <Header />
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContatoScreem')}>
                    <Text style={{ color: '#FFF' }}>Contatos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SolicitacoesScreem')}>
                    <Text style={{ color: '#FFF' }}>Solicitações</Text>
                </TouchableOpacity>

                <Text>Home</Text>

                <DropDownPicker
                    items={items}
                    open={isOpen}
                    setOpen={() => setIsOpen(!isOpen)}
                    value={currentValue}
                    setValue={(value) => setCurrentValue(value)}
                    maxHeight={200}
                    autoScroll
                    placeholder="Select your item"
                    placeholderStyle={{ color: "red", fontWeight: "bold", fontSize: 16 }}
                    showTickIcon={true}
                    showArrowIcon={true}
                    dropDownDirection="BOTTOM"//TOP
                    disabledBorderRadius={false}
                    theme="LIGHT"//DARK
                    multiple={true}
                    min={1}
                    max={4}
                />
            </View>

            <FabButton />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'blue',
        width: 100,
        height: 30,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    }
})