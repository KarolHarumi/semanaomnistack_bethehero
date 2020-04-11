import React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-ionicons';
import { useNavigation } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';

import logoImg from './../../assets/logo.png';

import styles from './styles'

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logoImg} />
                    <Text style={styles.headerText}>Total de <Text style={styles.headerTextBold}>0 casos</Text></Text>
                </View>

                <Text style={styles.title}>Bem-vindo!</Text>
                <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
        
                <FlatList 
                    data={[1, 2, 3, 4, 5]} 
                    style={ styles.incidentList } 
                    keyExtractor={ incident => String(incident) } 
                    showsVerticalScrollIndicator={ false }
                    renderItem={() => (
                        <View style={styles.incident}>
                            <Text style={styles.incidentProperty}>ONG:</Text>
                            <Text style={styles.incidentValue}>APAD</Text>

                            <Text style={styles.incidentProperty}>CASO:</Text>
                            <Text style={styles.incidentValue}>Raio-x na cachorrinha Yayá</Text>

                            <Text style={styles.incidentProperty}>VALOR:</Text>
                            <Text style={styles.incidentValue}>R$ 120,00</Text>

                            <TouchableOpacity 
                                style={styles.detailsButton} 
                                onPress={navigateToDetail}
                            >
                                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                                <Icon name="arrow-forward-outline" size={ 16 } color={'#e02041'} />
                            </TouchableOpacity>
                        </View>
                )} />
            </View>
        </SafeAreaView>
    )
}