import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';

import { Load } from '../../components/Load';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { api } from '../../services/api';
import { useEffect } from 'react';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fethcGuilds(){
        const response = await api.get('/users/@me/guilds');
        setGuilds(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fethcGuilds();
    },[]);

    return (
        <View style={styles.container}>
            {
                loading ? <Load /> :
                <FlatList 
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild 
                        data={item}
                        onPress={() => handleGuildSelect(item)} 
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 103,}}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                ListHeaderComponent={() => <ListDivider isCentered />}
                style={styles.guilds}
                />
            }
        </View>
    )
}
