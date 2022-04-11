import { TextStyle } from 'react-native';
import { s, vs } from 'react-native-size-matters';


export const textStyles: { [key: string]: TextStyle } = {
    title1: {
        fontFamily: 'Metropolis-Bold',
        fontSize: s(34),
        lineHeight: vs(34),
    },
    title2: {
        fontFamily: 'Metropolis-SemiBold',
        fontSize: s(24),
        lineHeight: vs(29),
    },
    title3: {
        fontFamily: 'Metropolis-SemiBold',
        fontSize: s(18),
        lineHeight: vs(22),
    },
    title4: {
        fontFamily: 'Metropolis-SemiBold',
        fontSize: s(16),
        lineHeight: vs(16),
    },
    body1: {
        fontFamily: 'Metropolis-Regular',
        fontSize: s(16),
        lineHeight: vs(16),
    },
    body2: {
        fontFamily: 'Metropolis-Medium',
        fontSize: s(14),
        lineHeight: vs(20),
    },
    body3: {
        fontFamily: 'Metropolis-Regular',
        fontSize: s(14),
        lineHeight: vs(21),
        letterSpacing: s(0.15),
    },
    body4: {
        fontFamily: 'Metropolis-Regular',
        fontSize: s(11),
        lineHeight: vs(11),
    },
};

export type TextStyleName = keyof typeof textStyles;
