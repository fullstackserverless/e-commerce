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
  priceTextStyle: {
    color: WHITE,
    marginLeft: 65
  },
  brandTextStyle: {
    color: GRAY
  },
  container2: {
    flexDirection: 'row'
  }
})

interface CardProductOrderInfoT {
  color: string
  clothes: string
  size: string
  price: string
  brand: string
  units: string
}

function CardProductOrderInfo({
  clothes = 'Undefined',
  price = '0',
  brand = 'Undefined',
  color = 'undefined',
  size = 'L',
  units = '1'
}: CardProductOrderInfoT) {
  const {
    container,
    imageStyle,
    clothesTextStyle,
    infoContainer,
    container1,
    priceTextStyle,
    brandTextStyle,
    container2
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
        <View style={container2}>
          <TwoColorText leftText="Color: " rightText={color} />
          <TwoColorText leftText="Size: " rightText={size} />
        </View>
        <Space height={6} />
        <View style={container1}>
          <TwoColorText leftText="Units: " rightText={units} />
          <View style={priceTextStyle}>
            <Text title={`${price}$`} h2 textStyle={priceTextStyle} />
          </View>
        </View>
        <Space height={6} />
      </View>
    </View>
  )
}

export { CardProductOrderInfo }
