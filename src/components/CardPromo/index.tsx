import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { Text, Space, Button } from '../index'
import { DARK, GRAY, WHITE, RED, BLACK } from '../../constants'
import { s } from 'react-native-size-matters'
import { ButtonApply } from './buttons'

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 80,
    borderRadius: 8,
    backgroundColor: DARK,
    flexDirection: 'row'
  },
  percentContainer: {
    width: 80,
    height: 80,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: RED,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  percentImageContainer: {
    color: BLACK,
    width: 80,
    height: 80,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoPercentAdded: {
    flexDirection: 'column'
  },
  infoContainer: {
    paddingHorizontal: s(10),
    width: 252,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  containerMid: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerRight: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  percentNumberStyle: {
    color: WHITE,
    fontSize: 34
  },
  percentTextStyle: {
    color: WHITE,
    fontSize: 14
  },
  personalTextStyle: {
    color: WHITE,
    fontSize: 14,
    fontWeight: 'bold'
  },
  prmocodeTextStyle: {
    color: WHITE,
    fontSize: 11
  },
  remainTextStyle: {
    color: GRAY,
    fontSize: 11
  },
  imageContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 12,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
interface CardProductBagT {
  percentNumber: string
  promocodeText: string
  daysRemainNumber: string
  imagePromo: string
}

function CardPromo({
  percentNumber = '10',
  promocodeText = 'mypromocode2020',
  daysRemainNumber = '6',
  imagePromo
}: CardProductBagT) {
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
    percentImageContainer
  } = styles
  // imagePromo = "https://demotivation.ru/wp-content/uploads/2020/05/255095-Sepik-2048x1383.jpg"
  const image = { uri: imagePromo }

  return (
    <View style={container}>
      {imagePromo ? (
        <ImageBackground source={image} resizeMode="cover" style={imageContainer}>
          <View style={percentImageContainer}>
            <Text title={`${percentNumber}`} textStyle={percentNumberStyle} />
            <View style={infoPercentAdded}>
              <Text title={'%'} textStyle={percentTextStyle} />
              <Text title={'off'} textStyle={percentTextStyle} />
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
          <Text title={'Personal offer'} textStyle={personalTextStyle} />
          <Space height={4} />
          <Text title={promocodeText} textStyle={prmocodeTextStyle} />
        </View>
        <Space width={20} height={0} />
        <View style={containerRight}>
          <Text title={`${daysRemainNumber} days remaining`} textStyle={remainTextStyle} />
          <Space height={10} />
          <ButtonApply onPress={() => {}} isOutline={false} title={'Apply'} sizeWidth={93} sizeHeight={36} />
        </View>
      </View>
      <Space width={11} height={0} />
    </View>
  )
}

export { CardPromo }
