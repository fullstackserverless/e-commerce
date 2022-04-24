import React, { useEffect, useRef, useState } from 'react'
import { View, TextInput as RNTextInput, StyleSheet, Pressable, Animated } from 'react-native'
import { Text } from '../Text'
import { useController, useFormContext } from 'react-hook-form'
import { DARK, GRAY, BLACK, ERROR, SUCCESS, WHITE } from '../../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInputProps } from './TextInputPropsType'
import { s, vs } from 'react-native-size-matters'

export const SmallTextInput: React.FC<TextInputProps> = (props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [cross, setCross] = useState<boolean>(false)
  const inputRef = useRef<any>()

  const { name, rules, resetField,
    defaultValue, ...inputProps } = props

  const formContext = useFormContext()

  if (!formContext || !name) {
    const msg = !formContext ? "TextInput должен быть обернут в FormProvider"
      : "Имя должно быть определено(textInput)"
    console.error(msg)
    return null
  }

  const { formState } = formContext
  const { field, fieldState } = useController({ name, rules, defaultValue })
  const hasError = Boolean(formState?.errors[name])
  // Animations *
  const btnAnim = useRef(new Animated.Value(vs(35))).current

  const startToCross = () => {
    Animated.timing(btnAnim, {
      toValue: vs(8),
      duration: 400,
      useNativeDriver: true
    }).start()
  }

  const startToCircle = () => {
    Animated.timing(btnAnim, {
      toValue: vs(35),
      duration: 400,
      useNativeDriver: true
    }).start(() => setCross(false))
  }
  // *

  const handleFocus = (): void => {
    inputRef.current.focus()
  }
  const handleReset = (): void => {
    resetField(name)
    inputRef.current.blur()
  }

  useEffect(() => {
    if (isFocused) {
      setCross(true)
      startToCross()
    } else if (field.value?.length > 0) {
      setCross(true)
      startToCross()
    } else {
      startToCircle()
    }
  }, [field.value, isFocused])

  return <View style={container}>
    <View style={inputContainer}>
      <Animated.View style={[inputBg, hasError && errBorder,
        { borderTopRightRadius: btnAnim, borderBottomRightRadius: btnAnim }]} />
      <RNTextInput
        underlineColorAndroid='transparent'
        ref={inputRef}
        style={input}
        onChangeText={field.onChange}
        onBlur={() => {
          setIsFocused(false)
          field.onBlur()
        }}
        onFocus={() => {
          setIsFocused(true)
        }}
        value={field.value}
        placeholderTextColor={GRAY}
        {...inputProps}
      />
      <Pressable style={[circle, cross &&
        { backgroundColor: 'transparent' },
        hasError && errCircle]}
        onPress={cross ? handleReset : handleFocus} >
        <Icon name={cross ? 'close' : 'arrow-right'}
          color={cross ? (hasError && field?.value?.length > 0) ? ERROR : GRAY : DARK} size={cross ? 24 : 19} />
      </Pressable>
    </View>
    {hasError &&
      <View style={errContainer}>
        <Text textStyle={'body4'} style={errTxt}>{formState.errors[name].message}</Text>
      </View>
    }
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginVertical: vs(15),
    marginHorizontal: s(5)
  },
  input: {
    backgroundColor: 'transparent',
    color: WHITE,
    paddingVertical: vs(12),
    paddingLeft: s(20),
    flex: 1,
    fontSize: vs(14),
    lineHeight: vs(20),
    paddingRight: s(45)
  },
  inputBg: { // так сделано потому, что input-анимация ломает input
    backgroundColor: DARK,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: vs(8),
    borderBottomLeftRadius: vs(8),
  },
  errBorder: {
    borderColor: ERROR,
    borderWidth: 1,
  },
  inputContainer: {
    height: vs(45),
  },
  circle: {
    height: vs(45),
    width: s(45),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GRAY,
    right: s(-1),
    borderRadius: vs(30),
    zIndex: 2,
  },
  errCircle: {
    marginVertical: 1,
    marginRight: 1,
    height: vs(43),
    width: s(43),
    right: s(0)
  },
  errTxt: {
    color: ERROR,
    lineHeight: vs(16),
    letterSpacing: s(1)
  },
  errContainer: {
    paddingVertical: vs(3),
    paddingLeft: s(20),
  }
})
const { container, input, inputContainer, errTxt,
  circle, errContainer, errBorder, errCircle, inputBg } = styles