import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import logoImg from './../../assets/logo.png';

import styles from './styles'

export default function Incidents() {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logoImg} />
                    <Text style={styles.headerText}>Total de <Text style={styles.headerTextBold}>0 casos</Text></Text>
                </View>

                <Text style={styles.title}>Bem-vindo!</Text>
                <Text style={styles.description}>Escolha um dos casos abaixo e seja um hero</Text>
            </View>
        </SafeAreaView>
    )
}