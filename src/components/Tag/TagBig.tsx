import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { PRIMARY, WHITE, BLACK, winWidth } from '../../constants'
import { Text } from '../'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    height: vs(36),
    borderRadius: vs(8),
    borderColor: WHITE,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

interface TagBigT {
  title: string
  onToggle: () => void
  isInvisibleBorder: boolean
  isHalfTag?: boolean
}

function TagBig({ title, onToggle, isInvisibleBorder, isHalfTag }: TagBigT) {
  const { container } = styles

  const borderColor = isInvisibleBorder ? PRIMARY : WHITE
  const backgroundColor = isInvisibleBorder ? PRIMARY : 'transparent'
  const textColor = isInvisibleBorder ? BLACK : WHITE
  const widthTag = isHalfTag ? vs(36) : winWidth * 0.28
  return (
    <Pressable
      onPress={onToggle}
      style={[
        container,
        {
          borderColor: borderColor,
          backgroundColor: backgroundColor,
          width: widthTag
        }
      ]}
    >
      <Text title={title} h4 textStyle={{ color: textColor }} />
    </Pressable>
  )
}

export { TagBig }
