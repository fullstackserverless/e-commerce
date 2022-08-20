import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { PRIMARY, WHITE, BLACK, winWidth } from '../../constants'
import { Text } from '../Text'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    height: vs(25),
    width: winWidth * 0.4,
    backgroundColor: PRIMARY,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: BLACK
  }
})

interface ButtonReviewT {
  onPress: () => void
}

function ButtonReview({ onPress }: ButtonReviewT) {
  const { container, textStyle } = styles

  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.9 : 1
        },
        container
      ]}
      onPress={onPress}
    >
      <MaterialCommunityIcons name="pencil" size={vs(17)} color={BLACK} />
      <Text title="Write a review" textStyle={textStyle} h3 />
    </Pressable>
  )
}

export { ButtonReview }
