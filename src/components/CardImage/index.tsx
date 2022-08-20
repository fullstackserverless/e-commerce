import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { vs } from 'react-native-size-matters'
import { winWidth } from '../../constants'

const styles = StyleSheet.create({
  container: {
    width: winWidth * 0.25,
    height: vs(133),
    borderRadius: 8
  }
})

interface CardImageT {
  imageUri: string
}

function CardImage({ imageUri }: CardImageT) {
  const { container } = styles
  return <Image source={{ uri: imageUri }} style={container} />
}

export { CardImage }
