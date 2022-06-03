import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { PRIMARY, WHITE } from '../../constants'
import { Text } from '../Text'

const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 128,
    backgroundColor: PRIMARY,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    lignItems: 'stretch',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  textStyle: {
    color: WHITE
  }
})

function ButtonReview() {
  const { container, textStyle } = styles

  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.9 : 1
        },
        container
      ]}
    >
      <MaterialCommunityIcons name="pencil" size={20} color={WHITE} />
      <Text title="Write a review" textStyle={textStyle} h5 />
    </Pressable>
  )
}

export { ButtonReview }
