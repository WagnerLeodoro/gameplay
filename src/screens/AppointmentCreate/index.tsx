import React, { useState } from 'react';
import { Text, View, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import uuid  from 'react-native-uuid';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { Guilds } from '../Guilds';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { GuildProps } from '../../components/Guild';
import { TextArea } from '../../components/TextArea';
import { ModalView } from '../../components/ModalView';
import { GuildIcon } from '../../components/GuidlIcon';
import { SmallInput } from '../../components/SmallInput';
import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { useNavigation } from '@react-navigation/core';

export function AppointmentCreate() {
    const [category, setCategory] = useState('');
    const [openGuildModal, setOpenGuildModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');

    const navigation = useNavigation();

    function handleOpenGuilds() {
        setOpenGuildModal(true);
    }
    function handleCloseGuilds() {
        setOpenGuildModal(false);
    }
    function handleGuildSelect(guildSelect: GuildProps) {
        setGuild(guildSelect);
        setOpenGuildModal(false);
    }
    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId);
    }
    async function handleSave() {
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hour}:${minute}h`,
            description
        };
                
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointments = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(
            COLLECTION_APPOINTMENTS,
            JSON.stringify([...appointments, newAppointment])
        );
        navigation.navigate('Home');
    }
    
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Background>
                <ScrollView>
                    <Header
                        title="Agendar partida"
                    />
                    <Text style={[
                        styles.label, {fontSize: 18, marginLeft: 24, marginTop: 10, marginBottom: 10}]}
                    >
                        Categoria
                    </Text>
                    <CategorySelect
                        hasCheckBox
                        setCategory={handleCategorySelect}
                        categorySelected={category}
                    />
                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuilds}>
                            <View style={styles.select}>
                                {
                                    guild.icon
                                    ? <GuildIcon guildId={guild.id} iconId={guild.icon}/> 
                                    : <View style={styles.image} />
                                }
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        { guild.name ? guild.name : 'Selecione um servidor' }
                                    </Text>
                                </View>
                                <Feather 
                                    name="chevron-right"
                                    color={theme.colors.heading}
                                    size={18}
                                />
                            </View>
                        </RectButton>
                        
                        <View style={styles.field}>
                            <View>
                                <Text style={styles.label}>
                                    Dia e mês
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setDay}
                                    />
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setMonth}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.label}>
                                    Hora e minuto
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setHour}
                                    />
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setMinute}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={[styles.field, {marginBottom: 12}]}>
                            <Text style={styles.label}>
                                Descrição
                            </Text>
                            <Text style={styles.caracteresLimit}>
                                Max 100 caracteres
                            </Text>
                        </View>
                        <TextArea 
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                            onChangeText={setDescription}
                        />
                        <View style={styles.footer}>
                            <Button 
                                title="Agendar"
                                onPress={handleSave}
                            />
                        </View>
                    </View>
                </ScrollView>
            </Background>
            <ModalView visible={openGuildModal} closeModal={handleCloseGuilds}>
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    )
}
