import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PRIMARY, WHITE, BLACK } from '../../constants'

const styles = StyleSheet.create({
  containerBig: {
    width: 100,
    height: 40,
    borderRadius: 8
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
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 25
  },
  containerSmall: {
    width: 100,
    height: 30,
    borderRadius: 29
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
  isWhiteText?: boolean
  isWhiteButton?: boolean
}

function Tag({ title, isOutline, isSmall, isWhiteText, isWhiteButton }: TagT) {
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
    <View style={[smallButtonOrBig, buttonColor, whiteColor]}>
      <Text style={[textStyle, textColor]}>{title}</Text>
    </View>
  )
}

export { Tag }
