import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { DARK, WHITE } from './constants'
import { Space, Labels, Text } from './components'

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
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={container}>
      <Text title="Labels" h0 />
      <Space height={15} />
      <Labels isSaleOrNew={true} title={'90%'} />
      <Space height={15} />
      <Labels isSaleOrNew={false} title={'90%'} />
    </View>
  )
}
