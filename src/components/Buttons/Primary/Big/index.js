import React from 'react'
import { StyleSheet, Text, Pressable, View } from 'react-native'
import { primary } from '../../../../../constants'

const styles = StyleSheet.create({
  h: {
    height: 48,
    width: 343,
    borderRadius: 25
  },
  c: {
    backgroundColor: primary
  },
  textStyle: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export function Button({ title }) {
  const { h, c, textStyle, container } = styles
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.9 : 1
          },
          h,
          c,
          container
        ]}
      >
        <Text style={textStyle}>{title}</Text>
      </Pressable>
    </View>
  )
}
