import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'
import { vs } from 'react-native-size-matters'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { PRIMARY, WHITE, DARK, BLACK } from '../../constants'

const styles = StyleSheet.create({
  container: {
    height: vs(32),
    width: vs(32),
    borderRadius: 100
  },
  iconStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  colorButtonPrimary: {
    backgroundColor: PRIMARY
  },
  colorButtonDark: {
    backgroundColor: DARK
  },
  colorIconPrimary: {
    color: PRIMARY
  },
  colorIconWhite: {
    color: BLACK
  }
})

interface ButtonIconT {
  isPrimary: boolean
  isWhiteIcon: boolean
}
function ButtonIcon({ isPrimary, isWhiteIcon }: ButtonIconT) {
  const { container, iconStyle, colorButtonPrimary, colorButtonDark, colorIconPrimary, colorIconWhite } = styles
  const colorButton = isPrimary ? colorButtonPrimary : colorButtonDark
  const colorIcon = isWhiteIcon ? colorIconWhite : colorIconPrimary
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.9 : 1
        },
        container,
        colorButton,
        iconStyle
      ]}
    >
      <MaterialCommunityIcons style={colorIcon} name="shopping" size={vs(16)} color={WHITE} />
    </Pressable>
  )
}

export { ButtonIcon }
