import React, { ReactNode } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import colors from '../consts/colors';

interface IButtonProps {
    children: ReactNode,
    varient?: 'primary' | 'secondary' | 'danger' | 'default',
    disabled?: boolean,
    skeleton?: boolean,
    onPress?: () => any,
}

const Button = (props: IButtonProps) => {
    const styles = getStyles(props);
    return (
        <Pressable disabled={props?.disabled} onPress={props?.onPress}>
            <View style={styles.button}>
                {props?.skeleton || props.children}
            </View>
        </Pressable>
    );
};

const getStyles = (props: IButtonProps) => StyleSheet.create({
    button: {
        backgroundColor:
            props?.skeleton ? colors['default']: 
            props?.varient ? colors[props.varient] : colors.default,
        borderRadius: 40,
        padding:23,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 100,
        minHeight: 64,
        opacity: props?.disabled ? 0.8 : 1,
    }
});

export default Button;
