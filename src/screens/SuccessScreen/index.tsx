import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { BLACK, DARK, WHITE } from '../../constants'
import { Text, Space, Button } from '../../components'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: BLACK,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    width: 218,
    height: 210
  },
  textStyle: {
    color: WHITE
  },
  buttonContainer: {
    paddingTop: 163,
    paddingBottom: 59
  },
  bagsContainer: {
    paddingTop: 195
  },
  textContainer: {
    alignSelf: 'center'
  }
})

interface SuccessScreenT {
  navigation: any
}

function SuccessScreen({ navigation }: SuccessScreenT) {
  const { container, imageStyle, textStyle, buttonContainer, bagsContainer, textContainer } = styles
  return (
    <View style={container}>
      <View style={bagsContainer}>
        <Image style={imageStyle} source={require('./bagssuccess-bags.png')} />
        <Space height={50} />
        <View style={textContainer}>
          <Text title={'Success!'} h1 textStyle={textStyle} />
        </View>
        <Space height={12} />
        <Text title={'Your order will be delivered soon.\nThank you for choosing our app!'} textStyle={textStyle} />
      </View>
      <View style={buttonContainer}>
        <Button onPress={navigation.goBack} title={'CONTINUE SHOPPING'} isOutline={false} isSmall={false} />
      </View>
    </View>
  )
}

export { SuccessScreen }
