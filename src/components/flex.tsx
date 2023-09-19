import React, { ReactNode } from 'react';
import { View, StyleSheet, FlexAlignType } from 'react-native';

interface IFlexProps {
    children?: ReactNode,
    row?: boolean,
    fill?:boolean,
    align?: FlexAlignType,
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | undefined,
    padding?: number,
    paddingHorizontal?: number,
    paddingVertical?: number,
    paddingTop?: number,
    paddingLeft?: number,
    paddingRight?: number,
    paddingBottom?: number,
    margin?: number,
    marginHorizontal?: number,
    marginVertical?: number,
    marginTop?: number,
    marginLeft?: number,
    marginRight?: number,
    marginBottom?: number,
    gap?: number,
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined,
}

const Flex = (props: IFlexProps) => {
    const styles = getStyles(props);
    return (
        <View style={styles.flex}>
            {props.children}
        </View>
    );
};

const getStyles = (props: IFlexProps) => StyleSheet.create({
    flex: {
        flexDirection: props.row ? 'row': 'column',
        flexWrap: props?.wrap,
        flex: props.fill ? 1 : 0,
        justifyContent: props.justify,
        alignItems: props.align,
        padding: props.padding,
        paddingHorizontal: props.paddingHorizontal,
        paddingVertical: props.paddingVertical,
        paddingTop: props.paddingTop,
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
        paddingBottom: props.paddingBottom,
        margin: props.margin,
        marginHorizontal: props.marginHorizontal,
        marginVertical: props.marginVertical,
        marginTop: props.marginTop,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        marginBottom: props.marginBottom,
        gap: props?.gap,
    }
});

export default Flex;
