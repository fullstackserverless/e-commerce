import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Text } from '../'
import { GRAY, WHITE } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
    alignItems: 'center'
  },
  imageStyle: {
    width: 64,
    height: 64,
    borderRadius: 100
  },
  grayColor: {
    color: GRAY
  },
  whiteColor: {
    color: WHITE
  },
  container1: {
    flexDirection: 'column',
    paddingLeft: 20
  },
  imageContainer: {
    paddingLeft: 20
  }
})

interface NameCardT {
  nameTitle: string
  mailTitle: string
  imageUri: string
}

function NameCard({
  nameTitle = 'Default Name',
  mailTitle = 'defaultmail@email.com',
  imageUri = 'https://theprepperjournal.com/wp-content/uploads/2018/02/meds9-1-1376x1032.jpg'
}: NameCardT) {
  const { container, container1, imageStyle, whiteColor, grayColor, imageContainer } = styles
  return (
    <View style={container}>
      <View style={imageContainer}>
        <Image source={{ uri: imageUri }} style={imageStyle} />
      </View>
      <View style={container1}>
        <Text title={nameTitle} textStyle={whiteColor} h1 />
        <Text title={mailTitle} textStyle={grayColor} h4 />
      </View>
    </View>
  )
}

export { NameCard }
