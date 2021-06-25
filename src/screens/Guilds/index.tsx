import React from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';

import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

export default function Guilds() {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        }
    ];
    return (
        <View style={styles.container}>
            <FlatList 
            data={guilds}
            keyExtrator={item => item.id}
            renderItem={({ item }) => (
                <Guild data={item} />
            )}
            showVerticalScrollIndicator={false}
            itemSeparatorComponent={() => <ListDivider />}
            style={styles.guilds}
            />
        </View>
    )
}
