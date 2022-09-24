import React, { useState, useRef } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { BLACK, WHITE, PRIMARY, GRAY } from '../../constants'
import { Modalize } from 'react-native-modalize'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Fumi, Header, Text, Switch, Space, Button } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK,
    width: '100%',
    height: '100%'
  },
  containerHeader: {
    backgroundColor: BLACK
  },
  safeAreaViewStyle: {
    backgroundColor: BLACK
  },
  textStyle: {
    color: WHITE,
    paddingLeft: vs(16)
  },
  textStylePassword: {
    color: WHITE,
    alignSelf: 'center'
  },
  textStyleChange: {
    color: GRAY,
    paddingRight: vs(16),
    justifyContent: 'center'
  },
  flexDirectionRowSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: vs(16),
    paddingTop: vs(16)
  },
  textContainer: {
    justifyContent: 'center'
  },
  labelStyle: {
    color: PRIMARY
  },
  flexDirectionRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalizeStyle: {
    backgroundColor: BLACK,
    height: '50%'
  },
  buttonStyle: {
    alignSelf: 'center',
    paddingTop: vs(20)
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    paddingBottom: vs(16),
    paddingTop: vs(16)
  }
})

interface SwitchT {
  one: false
  two: false
  three: false
}

function SettingsScreen({ navigation }: any) {
  const {
    container,
    containerHeader,
    labelStyle,
    safeAreaViewStyle,
    textStyle,
    textContainer,
    flexDirectionRowSwitchContainer,
    flexDirectionRowContainer,
    textStyleChange,
    modalizeStyle,
    buttonStyle,
    forgotContainer,
    textStylePassword
  } = styles
  const [isEnabled, setIsEnabled] = useState<SwitchT>({
    one: false,
    two: false,
    three: false
  })
  const modalizeRef = useRef<Modalize>(null)

  function onOpen() {
    modalizeRef.current?.open()
  }

  const onSwitch = (value: keyof SwitchT) =>
    setIsEnabled(prevState => {
      return {
        ...prevState,
        [value]: !prevState[value]
      }
    })
  return (
    <SafeAreaView style={safeAreaViewStyle}>
      <View style={containerHeader}>
        <Header title={'Settings'} search onPress={navigation.goBack} />
      </View>
      <View style={container}>
        <Text title={'Personal Information'} textStyle={textStyle} h3 />
        <Space height={vs(16)} />
        <Fumi label="Full name" iconName={'person'} iconClass={Ionicons} labelStyle={labelStyle} iconColor={PRIMARY} />
        <Space height={vs(10)} />
        <Fumi
          label="Date of birth"
          iconName={'calendar'}
          iconClass={Ionicons}
          labelStyle={labelStyle}
          iconColor={PRIMARY}
        />
        <Space height={vs(16)} />
        <View style={flexDirectionRowContainer}>
          <Text title={'Password'} textStyle={textStyle} h3 />
          <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]} onPressOut={onOpen}>
            <Text title={'Change'} textStyle={textStyleChange} h5 />
          </Pressable>
        </View>
        <Space height={vs(16)} />
        <Fumi
          label="Password"
          iconName={'lock-closed'}
          iconClass={Ionicons}
          labelStyle={labelStyle}
          iconColor={PRIMARY}
        />
        <Space height={vs(16)} />
        <Text title={'Notifications'} textStyle={textStyle} h3 />
        <View style={flexDirectionRowSwitchContainer}>
          <View style={textContainer}>
            <Text title={'Sales'} textStyle={textStyle} h4 />
          </View>
          <Switch isValue={isEnabled['one']} onValueChange={() => onSwitch('one')} />
        </View>
        <View style={flexDirectionRowSwitchContainer}>
          <View style={textContainer}>
            <Text title={'New arrivals'} textStyle={textStyle} h4 />
          </View>
          <Switch isValue={isEnabled['two']} onValueChange={() => onSwitch('two')} />
        </View>
        <View style={flexDirectionRowSwitchContainer}>
          <View style={textContainer}>
            <Text title={'Delivery status changes'} textStyle={textStyle} h4 />
          </View>
          <Switch isValue={isEnabled['three']} onValueChange={() => onSwitch('three')} />
        </View>
      </View>
      <Modalize modalStyle={modalizeStyle} modalHeight={vs(480)} ref={modalizeRef}>
        <Space height={vs(20)} />
        <Text title={'Password Change'} textStyle={textStylePassword} h2 />
        <Space height={vs(10)} />
        <Fumi
          label="Old Password"
          iconName={'lock-closed'}
          iconClass={Ionicons}
          labelStyle={labelStyle}
          iconColor={PRIMARY}
        />
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
          <Text title={'Forgot Password?'} textStyle={[textStyleChange, forgotContainer]} h5 />
        </Pressable>
        <Fumi
          label="New Password"
          iconName={'pencil'}
          iconClass={Ionicons}
          labelStyle={labelStyle}
          iconColor={PRIMARY}
        />
        <Space height={vs(15)} />
        <Fumi
          label="Repeat New Password"
          iconName={'lock-open'}
          iconClass={Ionicons}
          labelStyle={labelStyle}
          iconColor={PRIMARY}
        />
        <View style={buttonStyle}>
          <Button isSmall={false} isOutline={false} onPress={() => {}} title={'SAVE PASSWORD'} />
        </View>
      </Modalize>
    </SafeAreaView>
  )
}

export { SettingsScreen }
