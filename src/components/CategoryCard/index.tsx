import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { vs } from 'react-native-size-matters'
import { DARK, WHITE, winWidth } from '../../constants'
import { Text } from '../index'

const styles = StyleSheet.create({
  container: {
    width: winWidth * 0.8,
    height: vs(96),
    borderRadius: vs(6),
    backgroundColor: DARK,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textContainer: {
    marginLeft: vs(18),
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
