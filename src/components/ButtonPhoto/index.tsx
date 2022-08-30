import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLACK, PRIMARY, WHITE } from '../../constants'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    height: vs(48),
    width: vs(48),
    backgroundColor: PRIMARY,
    borderRadius: 100
  },
  iconStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

function ButtonPhoto() {
  const { container, iconStyle } = styles

  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.9 : 1
        },
        container,
        iconStyle
      ]}
    >
      <Ionicons name="camera" size={vs(30)} color={BLACK} />
    </Pressable>
  )
}

export { ButtonPhoto }
