import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { WHITE, BLACK } from './constants'
import { Button, Space, Switch, CheckBox, ButtonPhoto, ButtonReview, ButtonIcon, Tag } from './components'

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
      <ScrollView>
        <Space height={30} />
        <Text style={textStyle}>{'Buttons'}</Text>
        <Button isOutline={true} isSmall={false} title="Push me" />
        <Space height={15} />
        <Button isOutline={false} isSmall={false} title="Push me" />
        <Space height={15} />
        <Button isOutline={true} isSmall={true} title="Push me" />
        <Space height={15} />
        <Button isOutline={false} isSmall={true} title="Push me" />
        <Space height={30} />
        <Text style={textStyle}>{'Switch'}</Text>
        <Space height={15} />
        <Switch isValue={isEnabled} onValueChange={toggleSwitch} />
        <Space height={30} />
        <Text style={textStyle}>{'CheckBox'}</Text>
        <Space height={30} />
        <CheckBox isPrimary={false} value={redCheckBoxValue} onToggle={toggleRedCheckBox} />
        <Space height={30} />
        <CheckBox isPrimary={true} value={whiteCheckBoxValue} onToggle={toggleWhiteCheckBox} />
        <Space height={30} />
        <Text style={textStyle}>{'ButtonPhoto'}</Text>
        <Space height={15} />
        <ButtonPhoto />
        <Space height={30} />
        <Text style={textStyle}>{'ButtonReview'}</Text>
        <Space height={15} />
        <ButtonReview />
        <Space height={30} />
        <Text style={textStyle}>{'ButtonIcon'}</Text>
        <Space height={15} />
        <ButtonIcon isPrimary={false} isWhiteIcon={false} />
        <Space height={15} />
        <ButtonIcon isPrimary={true} isWhiteIcon={true} />
        <Space height={30} />
        <Text style={textStyle}>{'Tag'}</Text>
        <Space height={15} />
        <Tag title={'Tag'} isOutline={true} isSmall={false} isWhiteText={true} />
        <Space height={15} />
        <Tag title={'Tag'} isOutline={true} isSmall={true} isWhiteText={false} isWhiteButton={true} />
        <Space height={15} />
        <Tag title={'Tag'} isOutline={false} isSmall={false} />
        <Space height={15} />
        <Tag title={'Tag'} isOutline={false} isSmall={true} />
        <Space height={30} />
      </ScrollView>
    </View>
  )
}
