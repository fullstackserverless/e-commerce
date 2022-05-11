import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import { PRIMARY, WHITE } from '../../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 48,
    width: 343,
    borderRadius: 25
  },
  textStyle: {
    alignItems: 'center',
    alignSelf: 'center',
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
    borderRadius: 25
  }
})

interface ButtonT {
  title: string
  isOutline: boolean
  isSmall: boolean
}

function Button({ isOutline, title, isSmall }: ButtonT) {
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
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  )
}

export { Button }
