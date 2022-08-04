import React from 'react'
import { StyleSheet, Text, Pressable, StyleProp, ViewStyle } from 'react-native'
import { s } from 'react-native-size-matters'
import { PRIMARY, WHITE } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: s(25),
    width: '80%',
    height: s(28),
    marginHorizontal: 20,
    backgroundColor: PRIMARY
  },
  textStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    color: WHITE
  }
})

interface ButtonT {
  title: string
  viewStyle?: StyleProp<ViewStyle>
  onPress: () => void
}

function ButtonApply({ title, onPress, viewStyle }: ButtonT) {
  const { container, textStyle } = styles

  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.9 : 1
        },
        container,
        viewStyle
      ]}
      onPress={onPress}
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  )
}

export { ButtonApply }
