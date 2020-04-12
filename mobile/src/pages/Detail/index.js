import React from 'react';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import Icon from 'react-native-ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import { openComposer } from 'react-native-email-link'

import logoImg from './../../assets/logo.png';

import styles from './styles'

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contato, pois gostaria de saber sobre o caso "${incident.title}" com o valor de ${incident.value}.`;

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        openComposer({
            subject: `Herói do caso: ${incident.title}`,
            to: `${incident.email}`,
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
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
                    <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>
                        {Intl.NumberFormat('bt-BR', { 
                            style: 'currency', 
                            currency: 'BRL' 
                        }).format(incident.value)}
                    </Text>
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