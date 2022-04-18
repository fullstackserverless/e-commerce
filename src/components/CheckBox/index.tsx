import React, {FC, useEffect, useMemo, useState} from 'react'
import {StyleSheet, Animated, Easing} from 'react-native'
import {Check} from './icons'
import {COLORS} from "../../theme";
import {TouchableOpacity} from "../TouchableOpacity";

export interface CheckBoxProps {
    value: boolean
    activeColor: 'primary' | 'white'
    onToggle: (value: boolean) => void
}

const animationToggle = (value: boolean) => new Animated.Value(value ? 1 : 0)

export const CheckBox: FC<CheckBoxProps> = (props: CheckBoxProps) => {
    const {value, onToggle, activeColor} = props
    const [timer] = useState<Animated.Value>(animationToggle(value))
    const [previousValue, setPreviousValue] = useState<boolean>(value)
    const onToggleHandler = React.useMemo(() => () => onToggle && onToggle(!value), [onToggle, value])

    const startAnimation = useMemo(() => (value: boolean) => {
        Animated.timing(timer, {
            toValue: value ? 1 : 0,
            duration: 250,
            easing: Easing.out(Easing.circle),
            useNativeDriver: false,
        }).start()
    }, [timer])

    useEffect(() => {
        if (value !== previousValue) {
            startAnimation(value)
            setPreviousValue(value)
        }
    }, [value, previousValue, startAnimation, setPreviousValue])

    const animatedBgStyle = timer.interpolate({
        inputRange: [0, 1],
        outputRange: ['transparent', COLORS[activeColor]]
    })
    const animatedBorderColorStyle = timer.interpolate({
        inputRange: [0, 1],
        outputRange: [COLORS.gray, 'transparent']
    })
    const borderWidth = value ? 0 : 1
    const iconColor = !value ? 'transparent' : activeColor === COLORS.primary ? COLORS.white : COLORS.dark

    return (
        <TouchableOpacity onPress={onToggleHandler}>
            <Animated.View style={[styles.container, {
                backgroundColor: animatedBgStyle,
                borderColor: animatedBorderColorStyle,
                borderWidth,
            }]}>
                <Check color={iconColor}/>
            </Animated.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
