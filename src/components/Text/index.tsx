import React, { FC } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import {TextStyleName, textStyles} from "../../theme";

export interface ITextProps extends RNTextProps {
    textStyle: TextStyleName;
}

const Text: FC<ITextProps> = (props: ITextProps) => {
    const { textStyle, style, ...rest } = props;
    const styles = [textStyles[textStyle], style];

    return (
        <RNText style={styles} {...rest} />
    )
};

export { Text }
