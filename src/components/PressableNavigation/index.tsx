import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { vs } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { GRAY, GRAY_OPACITY, WHITE } from '../../constants'
import { Text, Space } from '../index'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: vs(70),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'transparent',
    borderWidth: 1,
    borderTopColor: GRAY_OPACITY
  },
  textStyle: {
    color: WHITE,
    paddingLeft: vs(16)
  },
  textStyleInfo: {
    color: GRAY,
    paddingLeft: vs(16)
  },
  iconContainer: {
    paddingRight: vs(16)
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
  const { container, textStyle, iconContainer, textStyleInfo } = styles
  return (
    <View style={container}>
      <View>
        <Text title={nameTitle} h3 textStyle={textStyle} />
        <Space height={vs(3)} />
        <Text title={infoTitle} h7 textStyle={textStyleInfo} />
      </View>
      <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, iconContainer]}>
        <Ionicons name={'chevron-forward'} size={vs(21)} color={GRAY} />
      </Pressable>
    </View>
  )
}

export { PressableNavigation }
