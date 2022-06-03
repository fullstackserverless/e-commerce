import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { DARK, WHITE } from './constants'
import { Space, Text, CheckBox } from './components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DARK
  },
  textStyle: {
    color: WHITE,
    fontSize: 25,
    paddingBottom: 10
  }
})

export default function App({}) {
  const { container, textStyle } = styles
  const [isEnabled, setIsEnabled] = useState(false)
  const [redCheckBoxValue, setRedCheckBoxValue] = useState(false)
  const [whiteCheckBoxValue, setWhiteCheckBoxValue] = useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  const toggleRedCheckBox = () => setRedCheckBoxValue(redCheckBoxValue => !redCheckBoxValue)
  const toggleWhiteCheckBox = () => setWhiteCheckBoxValue(whiteCheckBoxValue => !whiteCheckBoxValue)

  return (
    <View style={container}>
      <Text h0 title="CheckBox" />
      <Space height={30} />
      <CheckBox isPrimary={false} value={redCheckBoxValue} onToggle={toggleRedCheckBox} />
      <Space height={30} />
      <CheckBox isPrimary={true} value={whiteCheckBoxValue} onToggle={toggleWhiteCheckBox} />
      <Space height={30} />
    </View>
  )
}
