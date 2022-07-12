import React from 'react'
import { Image, StyleSheet, View, StyleProp, ViewStyle, Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLACK, DARK, GRAY_OPACITY, WHITE, GRAY } from '../../constants'
import { Text, ButtonIcon, Space, Rating, Labels } from '../index'

const styles = StyleSheet.create({
  container: {
    width: 164,
    height: 300,
    borderRadius: 8,
    backgroundColor: BLACK
  },
  imageStyle: {
    width: 163,
    height: 190,
    borderRadius: 8
  },
  view: {
    flexDirection: 'row'
  },
  textStyleBrand: {
    color: GRAY
  },
  textStyle: {
    color: WHITE
  },
  layerContainer: {
    position: 'absolute',
    top: 178,
    left: 0,
    right: 0,
    bottom: 85,
    flexDirection: 'row'
  },
  twoColorTextContainer: {
    justifyContent: 'center'
  },
  twoColorTextStyle: {
    flexDirection: 'row'
  },
  leftTextStyle: {
    color: GRAY
  },
  rightTextStyle: {
    color: WHITE,
    marginRight: 10
  },
  iconStyle: {
    fontSize: 30
  },
  iconColor: {
    color: BLACK
  },
  iconColorSoldOut: {
    color: WHITE
  },
  iconContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    bottom: 175,
    right: 35
  },
  soldOutStyle: {
    backgroundColor: GRAY_OPACITY,
    opacity: 0.6
  },
  notSoldOutStyle: {
    backgroundColor: 'transparent'
  },
  soldOutTextBackground: {
    position: 'absolute',
    top: 155,
    width: '100%',
    height: 36,
    opacity: 0.8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  soldOutTextBackgroundColor: {
    backgroundColor: BLACK
  },
  textBackgroundColor: {
    backgroundColor: 'transparent'
  },
  soldOutTextColor: {
    color: WHITE
  },
  notSoldOutTextColor: {
    color: 'transparent'
  },
  soldOutTextContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelContainer: {
    position: 'absolute',
    bottom: 190,
    left: 10
  }
})

interface CardProductCoverT {
  brand: string
  clothes: string
  color: string
  size: string
  price: string
  imageUri: string
  rating: number[]
  isSoldOut: boolean
  onClose: () => void
  isLabelVision: boolean
  isSaleOrNew: boolean
  titleLabel: string
}

interface TwoColorTextT {
  leftText: string
  rightText: string
  style?: StyleProp<ViewStyle>
}

export function TwoColorText({ leftText, rightText, style }: TwoColorTextT) {
  const { twoColorTextStyle, leftTextStyle, rightTextStyle, twoColorTextContainer, soldOutStyle } = styles
  return (
    <View style={[twoColorTextStyle, style]}>
      <Text title={leftText} textStyle={leftTextStyle} h6 />
      <View style={twoColorTextContainer}>
        <Text title={rightText} textStyle={rightTextStyle} h6 />
      </View>
    </View>
  )
}

function CardProductCover({
  brand,
  clothes,
  color,
  size,
  price,
  imageUri,
  rating,
  isSoldOut,
  onClose,
  isSaleOrNew,
  titleLabel,
  isLabelVision
}: CardProductCoverT) {
  const {
    container,
    imageStyle,
    view,
    textStyleBrand,
    layerContainer,
    textStyle,
    iconStyle,
    iconContainer,
    soldOutTextBackground,
    soldOutStyle,
    notSoldOutStyle,
    iconColorSoldOut,
    iconColor,
    textBackgroundColor,
    soldOutTextBackgroundColor,
    soldOutTextColor,
    notSoldOutTextColor,
    soldOutTextContainer,
    labelContainer
  } = styles

  const soldOut = isSoldOut ? soldOutStyle : notSoldOutStyle
  const icon = isSoldOut ? iconColorSoldOut : iconColor
  const currentlySoldOutTextBackgroundColor = isSoldOut ? soldOutTextBackgroundColor : textBackgroundColor
  const ButtonIconStyle = isSoldOut ? false : true
  const textColor = isSoldOut ? soldOutTextColor : notSoldOutTextColor
  const Label = () => {
    return isLabelVision ? <Labels isSaleOrNew={isSaleOrNew} title={titleLabel} /> : <Space height={0} width={0} />
  }
  return (
    <View style={container}>
      <View style={soldOut}>
        <View>
          <Image source={{ uri: imageUri }} style={imageStyle} />
          <View style={[soldOutTextBackground, currentlySoldOutTextBackgroundColor, soldOutTextContainer]}>
            <Text title="Sorry, this item is currently sold out" h7 textStyle={textColor} />
          </View>
        </View>
        <View style={layerContainer}>
          <Rating ratingList={rating} />
          <ButtonIcon isPrimary={ButtonIconStyle} isWhiteIcon={ButtonIconStyle} />
          <Pressable onPress={onClose} style={({ pressed }) => [{ opacity: pressed ? 0.8 : 0.5 }, iconContainer]}>
            <Ionicons name={'close'} style={[icon, iconStyle]} />
          </Pressable>
          <View style={labelContainer}>
            <Label />
          </View>
        </View>
        <Space height={35} />
        <Text title={brand} h5 textStyle={textStyleBrand} />
        <Text title={clothes} h2 textStyle={textStyle} />
        <View style={view}>
          <TwoColorText leftText="Color: " rightText={color} />
          <TwoColorText leftText="Size: " rightText={size} />
        </View>
        <Text title={`${price}$`} textStyle={textStyle} h5 />
      </View>
    </View>
  )
}

export { CardProductCover }
