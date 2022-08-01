import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import { PRIMARY, WHITE, winWidth } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
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
  }
})

interface ButtonT {
  title: string
  sizeWidth: number
  sizeHeight: number
  isOutline: boolean
  onPress: () => void
}

function ButtonApply({ isOutline, title, onPress, sizeWidth = winWidth - 50, sizeHeight = 48 }: ButtonT) {
  const { container, color, outlineStyle, textStyle } = styles
  const colorButton = isOutline ? outlineStyle : color
  console.log('sizeWidth', container)

  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.9 : 1
        },
        colorButton,
        container,
        sizeWidth && { width: sizeWidth },
        sizeHeight && { height: sizeHeight }
      ]}
      onPress={onPress}
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  )
}

export { ButtonApply }
