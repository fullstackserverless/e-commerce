import React, { FC, useEffect, useMemo, useState } from 'react'
import { StyleSheet, Animated, Easing, Pressable, StyleProp, ViewStyle } from 'react-native'
import { Check } from './icons/Check'
import { GRAY, PRIMARY, WHITE, DARK } from '../../constants'
import { vs } from 'react-native-size-matters'

export interface CheckBoxProps {
  value: boolean
  isPrimary: boolean
  onToggle: (value: boolean) => void
  CheckBoxStyle?: StyleProp<ViewStyle>
}

const animationToggle = (value: boolean) => new Animated.Value(value ? 1 : 0)

export const CheckBox: FC<CheckBoxProps> = (props: CheckBoxProps) => {
  const { value, onToggle, isPrimary, CheckBoxStyle } = props
  const [timer] = useState<Animated.Value>(animationToggle(value))
  const [previousValue, setPreviousValue] = useState<boolean>(value)
  const onToggleHandler = React.useMemo(() => () => onToggle && onToggle(!value), [onToggle, value])
  const activeColor = isPrimary ? PRIMARY : WHITE

  const startAnimation = useMemo(
    () => (value: boolean) => {
      Animated.timing(timer, {
        toValue: value ? 1 : 0,
        duration: 250,
        easing: Easing.out(Easing.circle),
        useNativeDriver: false
      }).start()
    },
    [timer]
  )

  useEffect(() => {
    if (value !== previousValue) {
      startAnimation(value)
      setPreviousValue(value)
    }
  }, [value, previousValue, startAnimation, setPreviousValue])

  const animatedBgStyle = timer.interpolate({
    inputRange: [0, 1],
    outputRange: ['transparent', activeColor]
  })
  const animatedBorderColorStyle = timer.interpolate({
    inputRange: [0, 1],
    outputRange: [GRAY, 'transparent']
  })
  const borderWidth = value ? 0 : 1
  const iconColor = !value ? 'transparent' : DARK

  return (
    <Pressable onPress={onToggleHandler}>
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: animatedBgStyle,
            borderColor: animatedBorderColorStyle,
            borderWidth
          },
          CheckBoxStyle
        ]}
      >
        <Check color={iconColor} />
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: vs(16),
    height: vs(16),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
