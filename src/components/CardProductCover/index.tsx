import React from 'react'
import { Image, StyleSheet, View, StyleProp, ViewStyle, Pressable } from 'react-native'
import { vs, s } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLACK, GRAY_OPACITY, WHITE, GRAY, winWidth } from '../../constants'
import { Text, ButtonIcon, Space, Rating, Labels } from '../index'

const styles = StyleSheet.create({
  container: {
    width: winWidth * 0.47,
    height: vs(296),
    borderRadius: vs(6),
    backgroundColor: BLACK
  },
  container1: {
    left: winWidth * 0.39,
    top: vs(5),
    position: 'absolute'
  },
  imageStyle: {
    width: winWidth * 0.47,
    height: vs(188),
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
    top: vs(176),
    bottom: vs(83),
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
    marginRight: vs(8)
  },
  iconStyle: {
    fontSize: vs(27)
  },
  iconColor: {
    color: BLACK
  },
  iconColorSoldOut: {
    color: WHITE
  },
  iconContainer: {
    bottom: vs(208)
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
    top: vs(154.7),
    width: '100%',
    height: vs(34),
    opacity: 0.8,
    borderBottomLeftRadius: vs(6),
    borderBottomRightRadius: vs(6)
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
    bottom: vs(186),
    left: vs(8)
  },
  closeIconContainer: {}
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
    container1,
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
          <View style={container1}>
            <ButtonIcon isPrimary={ButtonIconStyle} isWhiteIcon={ButtonIconStyle} />
            <Pressable onPress={onClose} style={({ pressed }) => [{ opacity: pressed ? 0.8 : 0.5 }, iconContainer]}>
              <Ionicons name={'close'} style={[icon, iconStyle]} />
            </Pressable>
          </View>
          <View style={labelContainer}>
            <Label />
          </View>
        </View>
        <Space height={vs(32)} />
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
