import React from 'react'
import { StyleSheet, Text, Pressable, View } from 'react-native'

const styles = StyleSheet.create({
  h: {
    height: 36,
    width: 160,
    borderRadius: 24
  },
  c: {
    borderWidth: 1.5,
    borderColor: 'white'
  },
  textStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    color: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export function MiniButtonOutline({ title }) {
  const { h, c, textStyle, container } = styles
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.7 : 1
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
