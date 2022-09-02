import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text, Space, Rating } from '../index'
import { TwoColorText } from '../CardProductCover'
import { DARK, GRAY, WHITE, winWidth } from '../../constants'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    width: winWidth * 0.9,
    height: vs(110),
    borderRadius: vs(6),
    backgroundColor: DARK,
    flexDirection: 'row'
  },
  imageStyle: {
    width: winWidth * 0.2,
    height: vs(110),
    borderBottomLeftRadius: vs(6),
    borderTopLeftRadius: vs(6)
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
    marginLeft: winWidth * 0.1
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
  imageUri: string
}

function CardProductOrderInfo({
  clothes = 'Undefined',
  price = '0',
  brand = 'Undefined',
  color = 'undefined',
  size = 'L',
  units = '1',
  imageUri
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
      <Image style={imageStyle} source={{ uri: imageUri }} />
      <Space width={winWidth * 0.015} height={0} />
      <View style={infoContainer}>
        <Space height={vs(8)} />
        <Text title={clothes} h2 textStyle={clothesTextStyle} />
        <Text title={brand} h6 textStyle={brandTextStyle} />
        <View style={container2}>
          <TwoColorText leftText="Color: " rightText={color} />
          <TwoColorText leftText="Size: " rightText={size} />
        </View>
        <Space height={vs(4)} />
        <View style={container1}>
          <TwoColorText leftText="Units: " rightText={units} />
          <View style={priceTextStyle}>
            <Text title={`${price}$`} h2 textStyle={priceTextStyle} />
          </View>
        </View>
        <Space height={vs(4)} />
      </View>
    </View>
  )
}

export { CardProductOrderInfo }
