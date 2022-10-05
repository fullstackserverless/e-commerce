import React, { useState } from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { vs } from 'react-native-size-matters'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { DARK, PRIMARY, WHITE } from '../../constants'

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
  }
})

interface HeartButtonT {
  onPress: () => void
  onToggle: () => void
  isActive: boolean
}

function HeartButton({ onPress, onToggle, isActive }: HeartButtonT) {
  const { buttonContainer, buttonStyle } = styles

  // const [isActive, setActive] = useState(false)
  const heartColor = isActive ? PRIMARY : WHITE
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.9 : 1
        },
        buttonContainer,
        buttonStyle
      ]}
      // () => setActive(pr => !pr)
      onPress={onToggle}
      onPressOut={onPress}
    >
      <MaterialCommunityIcons name="heart" size={vs(18)} color={heartColor} />
    </Pressable>
  )
}

export { HeartButton }
