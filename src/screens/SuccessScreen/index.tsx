import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { BLACK, DARK, WHITE, winWidth } from '../../constants'
import { Text, Space, Button } from '../../components'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: BLACK,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    width: winWidth * 0.6,
    height: vs(290)
  },
  textStyle: {
    color: WHITE,
    alignItems: 'center'
  },
  buttonContainer: {
    paddingTop: vs(120),
    paddingBottom: vs(55)
  },
  bagsContainer: {
    paddingTop: vs(100)
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
        <Space height={vs(46)} />
        <View style={textContainer}>
          <Text title={'Success!'} h1 textStyle={textStyle} />
        </View>
        <Space height={vs(8)} />
        <View style={textContainer}>
          <Text
            title={'Your order will be delivered soon.\nThank you for choosing our app!'}
            textStyle={textStyle}
            h6
          />
        </View>
      </View>
      <View style={buttonContainer}>
        <Button onPress={navigation.goBack} title={'CONTINUE SHOPPING'} isOutline={false} isSmall={false} />
      </View>
    </View>
  )
}

export { SuccessScreen }
