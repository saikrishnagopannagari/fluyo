import React, { ReactNode } from 'react';
import { Text as Label, StyleSheet } from 'react-native';
import colors from '../consts/colors';

interface ITextProps {
    children: ReactNode,
    color?: any,
    fontSize?: number,
    weight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined,
    underlineSubString?: string,
    dottedText?: boolean,
}

const Text = (props: ITextProps) => {

    const styles = getStyles(props);

    let finalText: any = props.children?.toString();

    if(props?.underlineSubString){
        const textList = finalText?.split(props?.underlineSubString);
        if(textList)
            finalText = (<>
                {textList[0]}
                <Label style={styles.underlineText}>{props?.underlineSubString}</Label>
                {textList[1]}
            </>)
    }

    return (
        <Label style={styles.text}>
            {finalText}
        </Label>
    );
};

const getStyles = (props: ITextProps) => StyleSheet.create({
    text: {
        color: props.color || colors.secondary,
        fontSize: props.fontSize,
        fontWeight: props.weight,
        textDecorationStyle: props.dottedText ? 'dotted' : undefined, 
        textDecorationLine: props.dottedText ? 'underline' : undefined,
        
    },
    underlineText: {
        textDecorationLine: 'underline',
        fontWeight: '700',
    }
});

export default Text;
