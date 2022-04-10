import React, {FC} from 'react'
import {TouchableOpacity as RNTouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps} from 'react-native'

export interface TouchableOpacityProps extends Omit<RNTouchableOpacityProps, 'onPress'> {
    context?: any;
    onPress: (context?: any) => void
}

export const TouchableOpacity: FC<TouchableOpacityProps> = (props: TouchableOpacityProps) => {
    const {children, context, onPress, ...rest} = props;
    const onPressHandler = (context?: any) => {
        onPress(context)
    }

    return (
        <RNTouchableOpacity onPress={onPressHandler} {...rest}>
            {children}
        </RNTouchableOpacity>
    )
}
