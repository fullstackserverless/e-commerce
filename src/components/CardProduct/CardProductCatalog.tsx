import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text, Space, Rating, HeartButton } from '../index'
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
  buttonContainer: {
    top: vs(18),
    position: 'absolute',
    left: winWidth * 0.6
  },
  priceTextStyle: {
    color: WHITE,
    marginRight: vs(6)
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
  clothes = 'Undefined',
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
      <Space width={winWidth * 0.015} height={0} />
      <View style={infoContainer}>
        <Space height={vs(8)} />
        <Text title={clothes} h2 textStyle={clothesTextStyle} />
        <Text title={brand} h6 textStyle={brandTextStyle} />
        <Rating ratingList={ratingList} />
        <Space height={vs(4)} />
        <View style={container1}>
          <Text title={`${price}$`} h2 textStyle={priceTextStyle} />
          <View style={buttonContainer}>
            <HeartButton onPress={() => {}} />
          </View>
        </View>
        <Space height={vs(4)} />
      </View>
    </View>
  )
}

export { CardProductCatalog }
