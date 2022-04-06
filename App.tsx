import * as React from 'react'
import { Text } from 'react-native'
import { StyleSheet, ScrollView, View } from 'react-native'
import { DARK, WHITE } from './src/constants'
import { Button, Space } from './src/components'

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

export default function App({}){
  const { container, textStyle } = styles
  return(
    <View style={container}>
      <Text style={textStyle}>Buttons</Text>
      <Button isOutline={true} isSmall={false} title='Push me'/>
      <Space height={15} />
      <Button isOutline={false} isSmall={false} title='Push me'/>
      <Space height={15} />
      <Button isOutline={true} isSmall={true} title='Push me'/>
      <Space height={15} />
      <Button isOutline={false} isSmall={true} title='Push me'/>
      <Space height={15} />
    </View>
  )
}
