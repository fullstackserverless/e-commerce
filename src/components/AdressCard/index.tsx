import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { DARK, PRIMARY, WHITE, winWidth } from '../../constants'
import { Text, CheckBox, Space } from '../index'
import { s, vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    width: winWidth * 0.8,
    height: vs(110),
    borderRadius: 8,
    backgroundColor: DARK
  },
  textStyle: {
    color: WHITE
  },
  textStyleEdit: {
    color: PRIMARY
  },
  viewContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vs(13),
    marginLeft: s(18),
    marginRight: s(18)
  },
  viewContainer2: {
    marginLeft: s(18),
    marginTop: vs(8)
  },
  viewContainer3: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

interface AdressCardT {
  name: string
  adress: string
  onPressEdit: () => void
}

function AdressCard({ name, adress, onPressEdit }: AdressCardT) {
  const { container, textStyle, textStyleEdit, viewContainer1, viewContainer2, viewContainer3 } = styles
  const [redCheckBoxValue, setRedCheckBoxValue] = useState(false)

  const toggleRedCheckBox = () => setRedCheckBoxValue(redCheckBoxValue => !redCheckBoxValue)

  return (
    <View style={container}>
      <View style={viewContainer1}>
        <Text title={name} h4 textStyle={textStyle} />
        <Pressable onPress={onPressEdit} style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}>
          <Text textStyle={textStyleEdit} title={'Edit'} h4 />
        </Pressable>
      </View>
      <View style={viewContainer2}>
        <Text title={adress} h4 textStyle={textStyle} />
      </View>
      <Space height={20} />
      <View style={viewContainer3}>
        <Space height={0} width={s(18)} />
        <CheckBox isPrimary={false} onToggle={toggleRedCheckBox} value={redCheckBoxValue} />
        <Text title={'   Use as the shipping adress'} textStyle={textStyle} h4 />
      </View>
    </View>
  )
}

export { AdressCard }
