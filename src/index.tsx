import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { BLACK, WHITE } from './constants'
import { Space, Text, Selector } from './components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLACK
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
      <Text title="Tag" h0 />
      <Space height={15} />
      <Selector />
    </View>
  )
}
