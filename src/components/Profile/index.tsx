import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

import { Avatar } from '../Avatar';
import { ModalView } from '../ModalView';
import { SignOut } from '../../screens/SignOut';

export function Profile() {
    const { user } = useAuth();
    const [logout, setLogout] = useState(false);

    function handleOpenLogout() {
        setLogout(true);
    }
    function handleCloseLogout() {
        setLogout(false);
    }

    return (
        <View style={styles.container}>
            <RectButton onPress={handleOpenLogout}>
                <Avatar urlImage={user.avatar} />
            </RectButton>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá
                    </Text>
                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de Vitória
                </Text>
            </View>
            <ModalView
                isLogout
                visible={logout} 
                closeModal={handleCloseLogout}
            >
                <SignOut handleClose={handleCloseLogout}/>
            </ModalView>
        </View>
    )
}
