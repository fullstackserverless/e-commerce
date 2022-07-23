import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { BLACK, PRIMARY, WHITE } from '../../constants'
import { Text } from '../'
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 48,
    width: 343,
    borderRadius: 25
  },
  textStyle: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  color: {
    backgroundColor: PRIMARY
  },
  outlineStyle: {
    borderWidth: 1.5,
    borderColor: 'white',
    color: 'white'
  },
  smallContainer: {
    justifyContent: 'center',
    width: 160,
    height: 36,
    borderRadius: 25
  },
  textColorOutline: {
    color: WHITE
  },
  textColor: {
    color: BLACK
  }
})

interface ButtonT {
  title: string
  isOutline: boolean
  isSmall: boolean
  onPress: () => void
}

function Button({ isOutline, title, isSmall, onPress }: ButtonT) {
  const { container, color, outlineStyle, textStyle, smallContainer, textColor, textColorOutline } = styles
  const colorButton = isOutline ? outlineStyle : color
  const sizeButton = isSmall ? smallContainer : container
  const textColorButton = isOutline ? textColorOutline : textColor
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.9 : 1
        },
        colorButton,
        sizeButton
      ]}
      onPress={onPress}
    >
      <Text textStyle={[textStyle, textColorButton]} title={title} h3 />
    </Pressable>
  )
}

export { Button }
