import React from 'react';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import Icon from 'react-native-ionicons';
import { useNavigation } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import { openComposer } from 'react-native-email-link'

import logoImg from './../../assets/logo.png';

import styles from './styles'

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contato, pois gostaria de de saber sobre o caso XPTO.';

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        openComposer({
            subject: 'Herói do caso: Cadelinha atropelada',
            to: 'karol.harumi@bethehero.com',
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=000000t=${message}`);
    }

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={ logoImg } />

                    <TouchableOpacity onPress={navigateBack}>
                        <Icon name="arrow-back" size={ 28 } color={'#e02041'} />
                    </TouchableOpacity>
                </View>
            
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty, { marginTop: 0  }}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>Raio-x na cachorrinha Yayá</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>
                </View>

                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o dia!</Text>
                    <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                    <Text style={styles.heroDescription}>Entre em contato:</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                            <Text style={styles.actionText}>Whatsapp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.action} onPress={sendMail}>
                            <Text style={styles.actionText}>E-mail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}