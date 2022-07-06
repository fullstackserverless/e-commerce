import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { DARK, WHITE } from '../../constants'
import { Text } from '../index'

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 100,
    borderRadius: 8,
    backgroundColor: DARK,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textContainer: {
    marginLeft: 20,
    width: '50%',
    justifyContent: 'center'
  },
  imageContainer: {
    width: '47%'
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  textStyle: {
    color: WHITE
  }
})

interface CategoryCardT {
  title: string
  imageUri: string
}

function CategoryCard({ title, imageUri }: CategoryCardT) {
  const { container, textContainer, imageContainer, imageStyle, textStyle } = styles
  return (
    <View style={container}>
      <View style={textContainer}>
        <Text title={title} h1 textStyle={textStyle} />
      </View>
      <View style={imageContainer}>
        <Image
          style={imageStyle}
          source={{
            uri: imageUri
          }}
        />
      </View>
    </View>
  )
}

export { CategoryCard }
