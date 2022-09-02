import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { WHITE, BLACK, winWidth } from '../../constants'
import { Text } from '../'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    width: winWidth * 0.28,
    height: vs(26),
    borderRadius: vs(29),
    borderColor: WHITE,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

interface TagSmallT {
  title: string
  onToggle: () => void
  isVisibleBorder: boolean
}

function TagSmall({ title, onToggle, isVisibleBorder }: TagSmallT) {
  const { container } = styles

  const borderColor = isVisibleBorder ? WHITE : 'transparent'
  const backgroundColor = isVisibleBorder ? WHITE : 'transparent'
  const textColor = isVisibleBorder ? BLACK : WHITE
  return (
    <Pressable
      onPress={onToggle}
      style={[
        container,
        {
          borderColor: borderColor,
          backgroundColor: backgroundColor
        }
      ]}
    >
      <Text title={title} h4 textStyle={{ color: textColor }} />
    </Pressable>
  )
}

export { TagSmall }
