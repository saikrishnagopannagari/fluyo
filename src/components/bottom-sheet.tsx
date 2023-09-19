import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../consts/colors';

interface IBottomSheetProps {
    children: ReactNode,
    height: number,
    varient?: 'primary' | 'secondary' | 'danger' | 'backgroundL0' | 'backgroundL1',
}

const BottomSheet = (props: IBottomSheetProps) => {
    const styles = getStyles(props);
    return (
        <View style={styles.bottomSheet}>
            {props.children}
        </View>
    );
};

const getStyles = (props: IBottomSheetProps) => StyleSheet.create({
    bottomSheet: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: `${props.height}%`,
        backgroundColor: props.varient ? colors[props.varient] : colors.secondary,
    }
});

export default BottomSheet;
