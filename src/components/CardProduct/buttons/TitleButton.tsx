import React, { useState } from 'react'
import { StyleSheet, View, Pressable, Image } from 'react-native'
import { Text, Rating, Space } from '../../index'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TwoColorText } from '../../CardProductCover'
import { BLACK, DARK, GRAY, PRIMARY, WHITE } from '../../../constants'

const styles = StyleSheet.create({
  buttonContainer: {
    height: 36,
    width: 36,
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
    color: GRAY,
    fontSize: 30
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
