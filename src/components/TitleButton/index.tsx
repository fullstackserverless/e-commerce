import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { Text } from '../index'
import { DARK, GRAY } from '../../constants'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  buttonContainer: {
    height: vs(34),
    width: vs(34),
    backgroundColor: DARK,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: GRAY
  }
})

interface TitleButtonT {
  title: string
  onPress: () => void
}

function TitleButton({ title, onPress }: TitleButtonT) {
  const { buttonContainer, buttonStyle, textStyle } = styles
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.9 : 1
        },
        buttonContainer,
        buttonStyle
      ]}
    >
      <Text title={title} h1 textStyle={textStyle} />
    </Pressable>
  )
}

export { TitleButton }
