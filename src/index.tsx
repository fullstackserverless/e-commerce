import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { BLACK, WHITE } from './constants'
import { Space, Text, ButtonIcon } from './components'

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
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={container}>
      <Text title="ButtonIcon" h0 />
      <Space height={15} />
      <ButtonIcon isPrimary={true} isWhiteIcon={true} />
      <ButtonIcon isPrimary={false} isWhiteIcon={false} />
    </View>
  )
}