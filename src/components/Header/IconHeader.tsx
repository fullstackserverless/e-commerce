import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { WHITE, winWidth } from '../../constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: winWidth * 0.02,
    justifyContent: 'center',
    height: vs(76)
  }
})

interface IconHeaderT {
  onPress: () => void
}

function IconHeader({ onPress }: IconHeaderT) {
  const { container } = styles
  return (
    <View style={container}>
      <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
        <Ionicons name={'chevron-back'} size={vs(26)} color={WHITE} />
      </Pressable>
    </View>
  )
}

export { IconHeader }
