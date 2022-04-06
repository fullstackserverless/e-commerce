import React from "react";
import {View} from "react-native";
import {Text} from './Text.component';

export const TextPlayground = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <Text textStyle={'title1'}>{'Loren ipsum title1 text'}</Text>
            <Text textStyle={'title2'}>{'Loren ipsum title2 text'}</Text>
            <Text textStyle={'title3'}>{'Loren ipsum title3 text'}</Text>
            <Text textStyle={'title4'}>{'Loren ipsum title4 text'}</Text>
            <Text textStyle={'body1'}>{'Loren ipsum body1 text'}</Text>
            <Text textStyle={'body2'}>{'Loren ipsum body2 text'}</Text>
            <Text textStyle={'body3'}>{'Loren ipsum body3 text'}</Text>
            <Text textStyle={'body4'}>{'Loren ipsum body4 text'}</Text>
        </View>
    )
};
