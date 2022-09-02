import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { vs } from 'react-native-size-matters'
import { Text } from '../'
import { WHITE } from '../../constants'

const styles = StyleSheet.create({
  container: {
    width: vs(40),
    height: vs(40),
    borderRadius: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: vs(5),
    marginTop: vs(5),
    marginBottom: vs(5),
    marginRight: vs(5)
  },
  containerColor: {
    width: vs(32),
    height: vs(32),
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center'
  }
})

interface ColorFilterT {
  color: string
  isActiveBorder: boolean
  onToggle: () => void
}

function ColorFilter({ color, isActiveBorder, onToggle }: ColorFilterT) {
  const { container, containerColor } = styles
  return (
    <Pressable style={[container, { borderColor: isActiveBorder ? WHITE : 'transparent' }]} onPress={onToggle}>
      <View style={[containerColor, { backgroundColor: color }]} />
    </Pressable>
  )
}

export { ColorFilter }
