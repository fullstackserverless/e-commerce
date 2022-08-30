import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { BLACK, PRIMARY, WHITE, winWidth } from '../../constants'
import { Text } from '../'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: vs(30),
    width: winWidth * 0.8,
    borderRadius: vs(75)
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
    width: winWidth * 0.4,
    height: vs(25),
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

function Button({ isOutline, title = 'DefaultTitle', isSmall, onPress }: ButtonT) {
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
