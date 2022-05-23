import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { PRIMARY, WHITE } from '../../constants'
import { Text } from '../Text'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 48,
    width: 343,
    borderRadius: 25,
    alignItems: 'center'
  },
  textStyle: {
    color: WHITE
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
    borderRadius: 25,
    alignItems: 'center'
  }
})

interface ButtonT {
  title: string
  isOutline: boolean
  isSmall: boolean
  onPress: () => void
}

function Button({ isOutline, title, isSmall, onPress }: ButtonT) {
  const { container, color, outlineStyle, textStyle, smallContainer } = styles
  const colorButton = isOutline ? outlineStyle : color
  const sizeButton = isSmall ? smallContainer : container
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
      <Text title={title} h3 textStyle={textStyle} />
    </Pressable>
  )
}

export { Button }
