import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text, Space, Counter } from '../index'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TwoColorText } from '../CardProductCover'
import { DARK, GRAY, WHITE } from '../../constants'

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
  counterContainer: {
    flexDirection: 'row'
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
  iconStyle: {
    color: GRAY,
    fontSize: 20
  },
  priceTextStyle: {
    color: WHITE,
    marginRight: 8
  }
})

interface CardProductBagT {
  color: string
  clothes: string
  size: string
  price: string
}

function CardProductBag({ color = 'Undefined', clothes = 'Undefined', size = '0', price = '0' }: CardProductBagT) {
  const {
    container,
    imageStyle,
    clothesTextStyle,
    infoContainer,
    counterContainer,
    container1,
    iconStyle,
    priceTextStyle
  } = styles

  return (
    <View style={container}>
      <Image
        style={imageStyle}
        source={{ uri: 'https://demotivation.ru/wp-content/uploads/2020/05/255095-Sepik-2048x1383.jpg' }}
      />
      <Space width={11} height={0} />
      <View style={infoContainer}>
        <Space height={3} />
        <View style={container1}>
          <Text title={clothes} h2 textStyle={clothesTextStyle} />
          <Space width={110} height={0} />
          <Ionicons name={'ellipsis-vertical'} style={iconStyle} />
        </View>
        <View style={counterContainer}>
          <TwoColorText leftText="Color: " rightText={color} />
          <TwoColorText leftText="Size: " rightText={size} />
        </View>
        <Space height={6} />
        <View style={container1}>
          <Counter />
          <Text title={`${price}$`} h2 textStyle={priceTextStyle} />
        </View>
        <Space height={6} />
      </View>
    </View>
  )
}

export { CardProductBag }
