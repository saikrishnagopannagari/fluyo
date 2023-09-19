import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../consts/colors';

interface IScreenProps {
    children: ReactNode,
}

const Screen = ({children}: IScreenProps) => {
    const styles = getStyles();
    return (
        <View style={styles.screen}>
            {children}
        </View>
    );
};

const getStyles = () => StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.backgroundL0,
    }
});

export default Screen;
