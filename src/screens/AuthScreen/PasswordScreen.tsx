import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLACK, PRIMARY, WHITE, winWidth } from '../../constants'
import { Text, Fumi, Button, Header } from '../../components'
import { vs } from 'react-native-size-matters'
import { SafeAreaView } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  textStyleEmail: {
    color: WHITE,
    width: winWidth * 0.8,
    paddingBottom: vs(51)
  },
  emailTextContainer: {
    alignItems: 'center'
  },
  container: {
    backgroundColor: BLACK,
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  iconStyle: {
    fontSize: vs(26),
    color: PRIMARY
  },
  googleIconContainer: {
    width: winWidth * 0.2,
    height: vs(60),
    borderRadius: vs(20),
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  facebookIconContainer: {
    width: winWidth * 0.2,
    height: vs(60),
    borderRadius: vs(20),
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: winWidth * 0.15,
    paddingRight: winWidth * 0.15,
    paddingTop: vs(10)
  },
  textStyle: {
    color: WHITE,
    paddingLeft: winWidth * 0.01,
    paddingBottom: vs(176),
    paddingTop: vs(24)
  },
  arrowStyle: {
    color: PRIMARY,
    fontSize: vs(26)
  },
  chevronStyle: {
    color: WHITE,
    fontSize: vs(36)
  },
  labelStyle: {
    color: PRIMARY
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: vs(30),
    paddingBottom: vs(100)
  },
  textStyleAcc: {
    color: WHITE
  },
  textContainer: {
    alignItems: 'center',
    paddingTop: vs(100)
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: winWidth * 0.005,
    paddingTop: vs(24)
  },
  headerContainer: {
    paddingBottom: vs(161)
  },
  safeAreaViewStyle: {
    backgroundColor: BLACK
  }
})

interface PasswordScreenT {
  navigation: any
  onPress: () => void
}

function PasswordScreen({ navigation, onPress }: PasswordScreenT) {
  const {
    container,
    iconStyle,
    facebookIconContainer,
    googleIconContainer,
    container1,
    labelStyle,
    buttonContainer,
    textStyleEmail,
    emailTextContainer,
    headerContainer,
    safeAreaViewStyle
  } = styles

  return (
    <SafeAreaView style={safeAreaViewStyle}>
      <View style={container}>
        <View style={headerContainer}>
          <Header h1 onPress={navigation.goBack} title={'Forgot password'} />
        </View>
        <View style={emailTextContainer}>
          <Text
            textStyle={textStyleEmail}
            h4
            title="Please, enter your email address. You will receive a link to create a new password via email."
          />
        </View>
        <Fumi label="Email" iconName={'mail'} iconClass={Ionicons} labelStyle={labelStyle} iconColor={PRIMARY} />
        <View style={buttonContainer}>
          <Button onPress={onPress} title={'SIGN UP'} isOutline={false} isSmall={false} />
        </View>
        <View style={container1}>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.8 : 1
              },
              googleIconContainer
            ]}
            onPress={() => {}}
          >
            <FontAwesome5 name={'google'} style={iconStyle} />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.8 : 1
              },
              facebookIconContainer
            ]}
            onPress={() => {}}
          >
            <FontAwesome5 name={'facebook'} style={iconStyle} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export { PasswordScreen }
