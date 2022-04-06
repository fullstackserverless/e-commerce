import { TextStyle } from 'react-native';


export const textStyles: { [key: string]: TextStyle } = {
    title1: {
        fontFamily: 'Metropolis-Bold',
        fontSize: 34,
        lineHeight: 34,
    },
    title2: {
        fontFamily: 'Metropolis-SemiBold',
        fontSize: 24,
        lineHeight: 29,
    },
    title3: {
        fontFamily: 'Metropolis-SemiBold',
        fontSize: 18,
        lineHeight: 22,
    },
    title4: {
        fontFamily: 'Metropolis-SemiBold',
        fontSize: 16,
        lineHeight: 16,
    },
    body1: {
        fontFamily: 'Metropolis-Regular',
        fontSize: 16,
        lineHeight: 16,
    },
    body2: {
        fontFamily: 'Metropolis-Medium',
        fontSize: 14,
        lineHeight: 20,
    },
    body3: {
        fontFamily: 'Metropolis-Regular',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.15,
    },
    body4: {
        fontFamily: 'Metropolis-Regular',
        fontSize: 11,
        lineHeight: 11,
    },
};

export type TextStyleName = keyof typeof textStyles;
