import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommmunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BLACK, DARK, PRIMARY, WHITE } from '../../constants'
import { Text, Space, Fumi, Button } from '../../components'

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK,
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  iconStyle: {
    fontSize: 30,
    color: PRIMARY
  },
  googleIconContainer: {
    width: 92,
    height: 64,
    borderRadius: 24,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  facebookIconContainer: {
    width: 92,
    height: 64,
    borderRadius: 24,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 88,
    paddingRight: 88,
    paddingTop: 130
  },
  textStyle: {
    color: WHITE,
    paddingLeft: 10,
    paddingBottom: 180,
    paddingTop: 30
  },
  arrowStyle: {
    color: PRIMARY,
    fontSize: 30
  },
  chevronStyle: {
    color: WHITE,
    fontSize: 40
  },
  labelStyle: {
    color: PRIMARY
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 56
  },
  textStyleAcc: {
    color: WHITE
  },
  textContainer: {
    alignItems: 'center',
    paddingTop: 120
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 5,
    paddingTop: 28
  },
  textStyleEmail: {
    color: WHITE,
    width: 343,
    paddingBottom: 55
  },
  emailTextContainer: {
    alignItems: 'center'
  }
})

interface PasswordScreenT {
  navigation: any
}

function PasswordScreen({ navigation }: PasswordScreenT) {
  const {
    container,
    iconStyle,
    facebookIconContainer,
    googleIconContainer,
    container1,
    textStyle,
    arrowStyle,
    chevronStyle,
    labelStyle,
    buttonContainer,
    textStyleAcc,
    textContainer,
    textStyleEmail,
    emailTextContainer
  } = styles

  return (
    <View style={container}>
      <Pressable
        onPress={navigation.goBack}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.7 : 1
          }
        ]}
      >
        <Ionicons name="chevron-back" style={chevronStyle} />
      </Pressable>
      <Text title={'Forgot password'} h0 textStyle={textStyle} />
      <View style={emailTextContainer}>
        <Text
          textStyle={textStyleEmail}
          h4
          title="Please, enter your email address. You will receive a link to create a new password via email."
        />
      </View>
      <Fumi label="Email" iconName={'mail'} iconClass={Ionicons} labelStyle={labelStyle} iconColor={PRIMARY} />
      <View style={buttonContainer}>
        <Button onPress={() => {}} title={'SIGN UP'} isOutline={false} isSmall={false} />
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
  )
}

export { PasswordScreen }
