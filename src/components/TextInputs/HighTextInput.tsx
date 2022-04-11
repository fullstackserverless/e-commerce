import React, { useEffect, useMemo, useRef, useState } from 'react'
import { View, TextInput as RNTextInput, StyleSheet, Pressable, Animated } from 'react-native'
import { Text } from '../Text'
import { useController, useFormContext } from 'react-hook-form'
import { dark_c, gray_c, black_c, error_c, sucess_c, white_c } from '../../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { HighTextInputProps }from './TextInputPropsType'
import { s, vs } from 'react-native-size-matters'

export const HighTextInput: React.FC<HighTextInputProps> = (props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const inputRef = useRef<any>()
  
  const { name, rules, resetField, label,
    defaultValue, ...inputProps } = props

  const formContext = useFormContext()

  if (!formContext || !name) {
    const msg = !formContext ? "TextInput должен быть обернут в FormProvider" 
    : "Имя должно быть определено(textInput)"
    console.error(msg)
    return null
  }

  const { formState } = formContext
  const { field } = useController({ name, rules, defaultValue })
  const hasError = Boolean(formState?.errors[name])
  // Animations *
  const labelAnim = useRef(new Animated.Value(0)).current

  const startToTop = () => {
    Animated.timing(labelAnim, {
      toValue: vs(-22),
      duration: 200,
      useNativeDriver: true
    }).start()
  }

  const startToDown= () => {
    Animated.timing(labelAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start()
  }
  // *

  const handleReset = (): void => {
    resetField(name)
    inputRef.current.blur()
  }
  //countRender += 1
  //console.log(`re-render ${countRender}`)

  useEffect(() => {
    if(isFocused) {
      startToTop()
    } else if (field.value?.length > 0) {
      startToTop()
    } else {
      startToDown()
    }
  }, [field.value, isFocused])

  return <View style={container}>
    <View style={inputContainer}>
      <Animated.View style={[inputBg, (hasError && !isFocused) && errBorder ]} />
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
        {...inputProps}
        placeholder=''
      />
      <Animated.Text style={[labelS, {transform: [{translateY: labelAnim}, {scale: labelAnim.interpolate({
        inputRange: [vs(-22), 0],
        outputRange: [s(0.9), s(1)],
        extrapolate: 'clamp'
      })}, {translateX: labelAnim.interpolate({
        inputRange: [vs(-22), 0],
        outputRange: [s(1), s(5)]
      })}]} ]}>{label}</Animated.Text>
      {!isFocused && (field.value?.length > 0 || hasError) ? 
      <View style={iconContainer}>
        <Pressable style={{backgroundColor: 'transparent'}} 
        onPress={hasError ? handleReset : () => {}} >
          <Icon name={hasError ? 'close' : 'check'} 
          color={hasError ? error_c : sucess_c} size={s(26)} /> 
        </Pressable>
      </View>
      : <></>}
    </View>
    {(hasError && !isFocused) &&
      <View style={errContainer}>
        <Text textStyle={'body3'} style={errTxt}>{formState.errors[name].message}</Text>
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
    color: white_c,
    paddingBottom: vs(17),
    paddingTop: vs(27),
    paddingLeft: s(20),
    flex: 1,
    fontSize: vs(15),
    lineHeight: vs(20),
    paddingRight: s(50)
  },
  inputBg: { // так сделано потому что input анимация ломает
    backgroundColor: dark_c,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  errBorder: {
    borderColor: error_c,
    borderWidth: 1,
  },
  inputContainer: {
    height: vs(65),
  },
  iconContainer: {
    height: '100%',
    position: 'absolute',
    right: 17,
    justifyContent: 'center'
  },
  errTxt: {
    color: error_c,
  },
  errContainer: {
    paddingVertical: vs(3),
    paddingLeft: s(20),
  },
  labelS: {
    fontSize: vs(15),
    color: gray_c,
    position: 'absolute',
    left: s(20),
    bottom: vs(19)
  },
})
const { container, input, inputContainer, errTxt, 
 errContainer, errBorder, inputBg, iconContainer, labelS} = styles