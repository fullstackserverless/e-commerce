import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { Text, Space, Button } from '../index'
import { DARK, GRAY, WHITE, RED, BLACK } from '../../constants'
import { s, vs } from 'react-native-size-matters'
import { ButtonApply } from './buttons'

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: vs(80),
    borderRadius: 8,
    backgroundColor: DARK,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  percentContainer: {
    width: s(80),
    backgroundColor: RED,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  percentImageContainer: {
    color: BLACK,
    width: s(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoPercentAdded: {
    flexDirection: 'column'
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: s(5),
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  containerMid: {
    flex: 1.3,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  containerRight: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  percentNumberStyle: {
    color: WHITE,
    fontSize: vs(32)
  },
  percentTextStyle: {
    color: WHITE,
    fontSize: vs(12)
  },
  personalTextStyle: {
    color: WHITE,
    fontSize: vs(12),
    fontWeight: 'bold'
  },
  prmocodeTextStyle: {
    color: WHITE,
    fontSize: vs(9)
  },
  remainTextStyle: {
    color: GRAY,
    fontSize: vs(9)
  },
  imageContainer: {
    width: vs(76),
    height: '100%',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: vs(10),
    fontWeight: 'bold',
    textAlign: 'center'
  },
  blackTextStyle: {
    color: BLACK
  }
})
interface CardPromoT {
  percentNumber: string
  promocodeText: string
  daysRemainNumber: string
  imagePromo: string
}

const {
  container,
  percentContainer,
  infoContainer,
  containerMid,
  containerRight,
  percentNumberStyle,
  percentTextStyle,
  infoPercentAdded,
  personalTextStyle,
  prmocodeTextStyle,
  remainTextStyle,
  imageContainer,
  percentImageContainer,
  blackTextStyle
} = styles

function CardPromo({
  percentNumber = '10',
  promocodeText = 'mypromocode2020',
  daysRemainNumber = '6',
  imagePromo
}: CardPromoT) {
  const image = { uri: imagePromo }

  return (
    <View style={container}>
      {imagePromo ? (
        <ImageBackground source={image} resizeMode="cover" style={imageContainer}>
          <View style={percentImageContainer}>
            <Text title={`${percentNumber}`} textStyle={[percentNumberStyle, blackTextStyle]} />
            <View style={infoPercentAdded}>
              <Text title={'%'} textStyle={[percentTextStyle, blackTextStyle]} />
              <Text title={'off'} textStyle={[percentTextStyle, blackTextStyle]} />
            </View>
          </View>
        </ImageBackground>
      ) : (
        <View style={percentContainer}>
          <Text title={`${percentNumber}`} textStyle={percentNumberStyle} />
          <View style={infoPercentAdded}>
            <Text title={'%'} textStyle={percentTextStyle} />
            <Text title={'off'} textStyle={percentTextStyle} />
          </View>
        </View>
      )}
      <Space width={11} height={0} />
      <View style={infoContainer}>
        <View style={containerMid}>
          <Text title={'Personal offer'} numberOfLines={1} textStyle={personalTextStyle} />
          <Space height={4} />
          <Text title={promocodeText} textStyle={prmocodeTextStyle} />
        </View>
        <Space width={20} height={0} />
        <View style={containerRight}>
          <Text title={`${daysRemainNumber} days remaining`} textStyle={remainTextStyle} />
          <Space height={10} />
          <ButtonApply onPress={() => {}} title={'Apply'} />
        </View>
      </View>
    </View>
  )
}

export { CardPromo }
