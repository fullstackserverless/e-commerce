import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { BLACK, WHITE } from './constants'
import { Space, Text, Tag } from './components'

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
      <Text title="Tag" h0 />
      <Space height={15} />
      <Tag isOutline={true} isSmall={true} title="New" isWhiteText={true} />
      <Space height={15} />
      <Tag isOutline={true} isSmall={false} title="New" isWhiteButton={true} />
      <Space height={15} />
      <Tag isOutline={false} isSmall={true} title="New" />
      <Space height={15} />
      <Tag isOutline={false} isSmall={false} title="New" />
      <Space height={15} />
    </View>
  )
}
