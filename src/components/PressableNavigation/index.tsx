import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { GRAY, GRAY_OPACITY, WHITE } from '../../constants'
import { Text, Space } from '../index'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'transparent',
    borderWidth: 1,
    borderTopColor: GRAY_OPACITY
  },
  textStyle: {
    color: WHITE,
    paddingLeft: 20
  },
  textStyle1: {
    color: GRAY,
    paddingLeft: 20
  },
  iconContainer: {
    paddingRight: 20
  }
})

interface PressableNavigationT {
  nameTitle: string
  infoTitle: string
  onPress: () => void
}

function PressableNavigation({
  infoTitle = 'default info',
  nameTitle = 'default name',
  onPress
}: PressableNavigationT) {
  const { container, textStyle, iconContainer, textStyle1 } = styles
  return (
    <View style={container}>
      <View>
        <Text title={nameTitle} h2 textStyle={textStyle} />
        <Space height={7} />
        <Text title={infoTitle} h6 textStyle={textStyle1} />
      </View>
      <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, iconContainer]}>
        <Ionicons name={'chevron-forward'} size={25} color={GRAY} />
      </Pressable>
    </View>
  )
}

export { PressableNavigation }
