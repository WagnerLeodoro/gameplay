import React, { ReactNode } from 'react';
import { Modal, ModalProps, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from './styles';

import { Background } from '../Background';

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
    isLogout?: boolean;
}

export function ModalView({children, closeModal, isLogout, ...rest}: Props) {
    return (
        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View 
                        style={[
                            styles.container,
                            isLogout ? { marginTop: 442} : { marginTop: 100 }
                        ]}>
                        <Background>
                            <View style={[ !isLogout && styles.bar]} />
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
