import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { vs } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Text, Space } from '../'
import { WHITE, winWidth } from '../../constants'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingLeft: winWidth * 0.015,
    justifyContent: 'flex-start',
    height: vs(66),
    flexDirection: 'row'
  },
  textStyle: {
    color: WHITE
  },
  textContainer: {
    flex: 1,
    alignItems: 'center'
  }
})

interface SmallTextHeaderT {
  title: string
  onPress: () => void
}

function SmallTextHeader({ title = 'Example Title', onPress }: SmallTextHeaderT) {
  const { container, textStyle, textContainer } = styles
  return (
    <View style={container}>
      <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
        <Ionicons name={'chevron-back'} size={vs(26)} color={WHITE} />
      </Pressable>
      <View style={textContainer}>
        <Text title={title} h1 textStyle={textStyle} />
      </View>
      <Space width={vs(26)} />
    </View>
  )
}

export { SmallTextHeader }
