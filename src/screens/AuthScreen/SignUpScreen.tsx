import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommmunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BLACK, PRIMARY, WHITE, winWidth } from '../../constants'
import { Text, Fumi, Button, Header } from '../../components'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: BLACK,
  //   width: '100%',
  //   height: '100%',
  //   justifyContent: 'center'
  // },
  // iconStyle: {
  //   fontSize: 30,
  //   color: PRIMARY
  // },
  // googleIconContainer: {
  //   width: 92,
  //   height: 64,
  //   borderRadius: 24,
  //   backgroundColor: WHITE,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // facebookIconContainer: {
  //   width: 92,
  //   height: 64,
  //   borderRadius: 24,
  //   backgroundColor: WHITE,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // container1: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'flex-end',
  //   paddingLeft: 88,
  //   paddingRight: 88,
  //   paddingTop: 10
  // },
  // textStyle: {
  //   color: WHITE,
  //   paddingLeft: 10,
  //   paddingBottom: 100,
  //   paddingTop: 30
  // },
  // arrowStyle: {
  //   color: PRIMARY,
  //   fontSize: 30
  // },
  // chevronStyle: {
  //   color: WHITE,
  //   fontSize: 40
  // },
  // labelStyle: {
  //   color: PRIMARY
  // },
  // buttonContainer: {
  //   alignItems: 'center',
  //   paddingTop: 28
  // },
  // textStyleAcc: {
  //   color: WHITE
  // },
  // textContainer: {
  //   alignItems: 'center',
  //   paddingTop: 120
  // },
  // rowContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'flex-end',
  //   paddingRight: 5,
  //   paddingTop: 28
  // },
  // headerContainer: {
  //   paddingBottom: 135
  // }
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
    paddingTop: vs(24)
  },
  textStyleAcc: {
    color: WHITE
  },
  textContainer: {
    alignItems: 'center',
    paddingTop: vs(30)
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
  }
})

interface SignUpScreenT {
  navigation: any
}

function SignUpScreen({ navigation }: SignUpScreenT) {
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
    rowContainer,
    headerContainer
  } = styles
  const { navigate } = navigation

  const openLogin = () => navigate('LoginScreen')
  return (
    <View style={container}>
      <View style={headerContainer}>
        <Header title={'Sign up'} onPress={navigation.goBack} h1 />
      </View>
      <Fumi label="Name" iconName={'person'} iconClass={Ionicons} labelStyle={labelStyle} iconColor={PRIMARY} />
      <Fumi label="Email" iconName={'mail'} iconClass={Ionicons} labelStyle={labelStyle} iconColor={PRIMARY} />
      <Fumi
        label="Password"
        iconName={'lock-closed'}
        iconClass={Ionicons}
        labelStyle={labelStyle}
        iconColor={PRIMARY}
      />
      <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, rowContainer]} onPress={openLogin}>
        <Text title={'Already have an account?'} h4 textStyle={textStyleAcc} />
        <MaterialCommmunityIcons name={'arrow-right-thin'} style={arrowStyle} />
      </Pressable>
      <View style={buttonContainer}>
        <Button onPress={() => {}} title={'SIGN UP'} isOutline={false} isSmall={false} />
      </View>
      <View style={textContainer}>
        <Text textStyle={textStyleAcc} h4 title={'Or sign up with social account'} />
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

export { SignUpScreen }
