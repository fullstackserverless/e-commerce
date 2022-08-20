import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { PRIMARY, WHITE, BLACK, winWidth } from '../../constants'
import { Text } from '../'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  containerBig: {
    width: winWidth * 0.15,
    height: vs(36),
    borderRadius: vs(6),
    justifyContent: 'center'
  },
  colorPrimary: {
    backgroundColor: PRIMARY
  },
  colorOutline: {
    borderWidth: 1.5,
    borderColor: 'white',
    color: 'white'
  },
  textStyle: {
    alignSelf: 'center'
  },
  containerSmall: {
    width: winWidth * 0.15,
    height: vs(26),
    borderRadius: vs(27),
    justifyContent: 'center'
  },
  textColorBlack: {
    color: BLACK
  },
  textColorWhite: {
    color: WHITE
  },
  colorWhite: {
    backgroundColor: WHITE
  }
})

interface TagT {
  title: string
  isOutline: boolean
  isSmall: boolean
  onPress: () => void
  isWhiteText?: boolean
  isWhiteButton?: boolean
}

function Tag({ title, isOutline, isSmall, isWhiteText, isWhiteButton, onPress }: TagT) {
  const {
    containerBig,
    textStyle,
    colorPrimary,
    colorOutline,
    containerSmall,
    textColorBlack,
    textColorWhite,
    colorWhite
  } = styles
  const buttonColor = isOutline ? colorOutline : colorPrimary
  const smallButtonOrBig = isSmall ? containerSmall : containerBig
  const textColor = isWhiteText ? textColorWhite : textColorBlack
  const whiteColor = isWhiteButton ? colorWhite : buttonColor
  return (
    <Pressable
      style={({ pressed }) => [smallButtonOrBig, buttonColor, whiteColor, { opacity: pressed ? 0.85 : 1 }]}
      onPress={onPress}
    >
      <Text title={title} h1 textStyle={[textStyle, textColor]} />
    </Pressable>
  )
}

export { Tag }
