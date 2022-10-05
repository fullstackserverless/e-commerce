import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text, Space, Counter } from '../index'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TwoColorText } from '../CardProductCover'
import { DARK, GRAY, WHITE, winWidth } from '../../constants'
import { s, vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    width: winWidth * 0.9,
    height: vs(106),
    borderRadius: vs(6),
    backgroundColor: DARK,
    flexDirection: 'row'
  },
  imageStyle: {
    width: winWidth * 0.2,
    height: vs(106),
    borderBottomLeftRadius: vs(6),
    borderTopLeftRadius: vs(6)
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
    fontSize: vs(18)
  },
  priceTextStyle: {
    color: WHITE,
    marginRight: vs(4)
  },
  containerAbsolute: {
    position: 'absolute',
    left: winWidth * 0.6,
    bottom: vs(10)
  },
  containerAbsoluteText: {
    position: 'absolute',
    left: winWidth * 0.575,
    bottom: vs(10)
  }
})

interface CardProductBagT {
  color: string
  clothes: string
  size: string
  price: string
  imageUri: string
  count: string
  onPressPlus: () => void
  onPressMinus: () => void
}

function CardProductBag({
  color = 'Undefined',
  imageUri,
  clothes = 'Undefined',
  size = '0',
  price = '0',
  count,
  onPressMinus,
  onPressPlus
}: CardProductBagT) {
  const {
    container,
    imageStyle,
    clothesTextStyle,
    infoContainer,
    counterContainer,
    container1,
    iconStyle,
    priceTextStyle,
    containerAbsolute,
    containerAbsoluteText
  } = styles

  return (
    <View style={container}>
      <Image style={imageStyle} source={{ uri: imageUri }} />
      <Space width={winWidth * 0.015} height={0} />
      <View style={infoContainer}>
        <Space height={vs(2)} />
        <View style={container1}>
          <Text title={clothes} h2 textStyle={clothesTextStyle} />
          <View style={containerAbsolute}>
            <Ionicons name={'ellipsis-vertical'} style={iconStyle} />
          </View>
        </View>
        <View style={counterContainer}>
          <TwoColorText leftText="Color: " rightText={color} />
          <TwoColorText leftText="Size: " rightText={size} />
        </View>
        <Space height={vs(4)} />
        <View style={container1}>
          <Counter count={count} onPressMinus={onPressMinus} onPressPlus={onPressPlus} />
          <View style={containerAbsoluteText}>
            <Text title={`${price}$`} h2 textStyle={priceTextStyle} />
          </View>
        </View>
        <Space height={vs(4)} />
      </View>
    </View>
  )
}

export { CardProductBag }
