import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { PRIMARY, WHITE } from '../../constants'
import { Text } from '../Text'

const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 142,
    backgroundColor: PRIMARY,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    lignItems: 'stretch',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  textStyle: {
    color: WHITE,
    paddingLeft: 4
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
      <MaterialCommunityIcons name="pencil" size={18} color={WHITE} />
      <Text title="Write a review" h5 textStyle={textStyle} />
    </Pressable>
  )
}

export { ButtonReview }
