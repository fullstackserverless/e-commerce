import React from 'react'
import { StyleSheet, Pressable, StyleProp, ViewStyle } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import { Text } from '../../'
import { PRIMARY, BLACK } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: s(25),
    width: '80%',
    height: s(28),
    marginHorizontal: vs(16),
    backgroundColor: PRIMARY
  },
  textStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    color: BLACK
  }
})

interface ButtonT {
  title: string
  viewStyle?: StyleProp<ViewStyle>
  onPress: () => void
}

function ButtonApply({ title, onPress, viewStyle }: ButtonT) {
  const { container, textStyle } = styles

  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.9 : 1
        },
        container,
        viewStyle
      ]}
      onPress={onPress}
    >
      <Text textStyle={textStyle} title={title} h3 />
    </Pressable>
  )
}

export { ButtonApply }
