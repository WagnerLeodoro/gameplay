import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
    return (
        <Image
            source={{ uri: "https://logodownload.org/wp-content/uploads/2017/11/discord-logo-icone.png" }}
            style={styles.image}
            resizeMode='cover'
        />
    )
}
