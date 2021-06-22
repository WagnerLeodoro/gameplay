import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
    return (
        <Image
            source={{ uri: "https://i.pravatar.cc/150" }}
            style={styles.image}
            resizeMode='cover'
        />
    )
}
