import React, { useState } from 'react'
import { Text } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { DARK, WHITE } from './src/constants'
import { Button, Space, Switch, CheckBox } from './src/components'

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
  const [isEnabled, setIsEnabled] = useState(false)
  const [redCheckBoxValue, setRedCheckBoxValue] = useState(false)
  const [whiteCheckBoxValue, setWhiteCheckBoxValue] = useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  const toggleRedCheckBox = () => setRedCheckBoxValue(redCheckBoxValue => !redCheckBoxValue)
  const toggleWhiteCheckBox = () => setWhiteCheckBoxValue(whiteCheckBoxValue => !whiteCheckBoxValue)

  return(
    <View style={container}>
      <Text style={textStyle}>{'Buttons'}</Text>
      <Button isOutline={true} isSmall={false} title='Push me'/>
      <Space height={15} />
      <Button isOutline={false} isSmall={false} title='Push me'/>
      <Space height={15} />
      <Button isOutline={true} isSmall={true} title='Push me'/>
      <Space height={15} />
      <Button isOutline={false} isSmall={true} title='Push me'/>
      <Space height={30} />
      <Text style={textStyle}>{'Switch'}</Text>
      <Space height={15} />
      <Switch isValue={isEnabled} onValueChange={toggleSwitch}/>
      <Space height={30} />
      <Text style={textStyle}>{'CheckBox'}</Text>
      <Space height={30} />
      <CheckBox activeColor={'primary'} value={redCheckBoxValue} onToggle={toggleRedCheckBox} />
      <Space height={30} />
      <CheckBox activeColor={'white'} value={whiteCheckBoxValue} onToggle={toggleWhiteCheckBox} />
    </View>
  )
}
