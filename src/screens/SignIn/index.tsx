import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

import { styles } from './styles';

export function SignIn() {
    const [text, setText] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text>Conecte-se e Organize suas jogatinas</Text>

            </View>
            <TextInput 
                style={styles.input}
                onChangeText={setText} 
            />
            <Text>Você digitou: {text}</Text>
        </View>
    )
}
