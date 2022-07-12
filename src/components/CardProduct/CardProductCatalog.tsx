import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text, Space, Rating } from '../index'
import { TwoColorText } from '../CardProductCover'
import { DARK, GRAY, WHITE } from '../../constants'
import { HeartButton } from './buttons/HeartButton'

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 114,
    borderRadius: 8,
    backgroundColor: DARK,
    flexDirection: 'row'
  },
  imageStyle: {
    width: 104,
    height: 114,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8
  },
  cardProductTextStyle: {
    color: WHITE
  },
  clothesTextStyle: {
    color: WHITE
  },
  infoContainer: {
    flexDirection: 'column'
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between'
  },
  buttonContainer: {
    top: 20
  },
  priceTextStyle: {
    color: WHITE,
    marginRight: 8
  },
  brandTextStyle: {
    color: GRAY
  }
})

interface CardProductCatalogT {
  color: string
  clothes: string
  size: string
  price: string
  brand: string
  ratingList: number[]
}

function CardProductCatalog({
  color = 'Undefined',
  clothes = 'Undefined',
  size = '0',
  price = '0',
  brand = 'Undefined',
  ratingList = [4, 4, 4]
}: CardProductCatalogT) {
  const {
    container,
    imageStyle,
    clothesTextStyle,
    infoContainer,
    container1,
    buttonContainer,
    priceTextStyle,
    brandTextStyle
  } = styles

  return (
    <View style={container}>
      <Image
        style={imageStyle}
        source={{ uri: 'https://demotivation.ru/wp-content/uploads/2020/05/255095-Sepik-2048x1383.jpg' }}
      />
      <Space width={11} height={0} />
      <View style={infoContainer}>
        <Space height={10} />
        <Text title={clothes} h2 textStyle={clothesTextStyle} />
        <Text title={brand} h6 textStyle={brandTextStyle} />
        <Rating ratingList={ratingList} />
        <Space height={6} />
        <View style={container1}>
          <Text title={`${price}$`} h2 textStyle={priceTextStyle} />
          <Space width={161} height={0} />
          <View style={buttonContainer}>
            <HeartButton onPress={() => {}} />
          </View>
        </View>
        <Space height={6} />
      </View>
    </View>
  )
}

export { CardProductCatalog }
