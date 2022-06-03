import React, { useState } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { DARK, WHITE } from './src/constants'
import { Button, Space, Switch, Text } from './src/components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DARK
  },
  textStyle: {
    color: WHITE,
    paddingBottom: 10
  }
})

export default function App({}) {
  const { container, textStyle } = styles
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={container}>
      <Text title="Buttons" h0 />
      <Button isOutline={true} isSmall={false} title="Push me" />
      <Space height={15} />
      <Button isOutline={false} isSmall={false} title="Push me" />
      <Space height={15} />
      <Button isOutline={true} isSmall={true} title="Push me" />
      <Space height={15} />
      <Button isOutline={false} isSmall={true} title="Push me" />
      <Space height={30} />
      <Text title="Switch" h0 />
      <Space height={15} />
      <Switch isValue={isEnabled} onValueChange={toggleSwitch} />
      <Space height={30} />
    </View>
  )
}
