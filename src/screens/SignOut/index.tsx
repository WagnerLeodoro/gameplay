import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

import { useAuth } from '../../hooks/auth';
import { Button,  } from '../../components/Button';
import { Background } from '../../components/Background';
import { theme } from '../../global/styles/theme';

type Props = {
    handleClose: () => void
}

export function SignOut({handleClose}: Props){
    const { signOut } = useAuth();

    return (
    <Background>
        <View style={styles.container}>

            <View style={styles.title}>
                <Text style={styles.game}>
                    Deseja sair do Game
                </Text>
                <Text style={styles.play}>
                    Play?
                </Text>       
            </View>

            <View style={styles.content}>
                <View style={styles.cancel}>
                    <Button
                        style={{backgroundColor: 'transparent', marginTop: 16}}  
                        title='Não' 
                        onPress={handleClose}                        
                    />
                </View>
                <View style={styles.confirm}>
                    <Button
                        title='Sim'
                        onPress={signOut}
                    />
                </View>
            </View>
        </View>
    </Background>
    );
}