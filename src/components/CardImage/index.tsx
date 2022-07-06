import React from 'react'
import { Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 135,
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
