import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Text } from '../'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { WHITE } from '../../constants'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: vs(16),
    justifyContent: 'center',
    height: vs(96)
  },
  textStyle: {
    color: WHITE,
    paddingTop: vs(26)
  }
})

interface BigTextHeaderT {
  title: string
  onPress: () => void
}

function BigTextHeader({ onPress, title = 'Example Title' }: BigTextHeaderT) {
  const { container, textStyle } = styles
  return (
    <View style={container}>
      <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
        <Ionicons name={'chevron-back'} size={vs(26)} color={WHITE} />
      </Pressable>
      <Text title={title} textStyle={textStyle} h0 />
    </View>
  )
}

export { BigTextHeader }
