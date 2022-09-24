import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Text } from '..'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { WHITE, winWidth } from '../../constants'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: vs(16),
    justifyContent: 'flex-start',
    height: vs(90)
  },
  textStyle: {
    color: WHITE,
    paddingTop: vs(20)
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: vs(15)
  },
  chevronStyle: {
    alignSelf: 'flex-start',
    paddingRight: winWidth * 0.75
  },
  iconsContainerWidth: {
    alignSelf: 'flex-end'
  }
})

interface BigTextHeaderT {
  title: string
  onPress: () => void
  onPressSearch: () => void
}

function SearchHeader({ onPress, title = 'Example Title', onPressSearch }: BigTextHeaderT) {
  const { container, textStyle, iconsContainer, chevronStyle, iconsContainerWidth } = styles
  return (
    <View style={container}>
      <View style={iconsContainerWidth}>
        <View style={iconsContainer}>
          <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, chevronStyle]}>
            <Ionicons name={'chevron-back'} size={vs(26)} color={WHITE} />
          </Pressable>
          <Pressable onPress={onPressSearch} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
            <Ionicons name={'search'} size={vs(26)} color={WHITE} />
          </Pressable>
        </View>
      </View>
      <Text title={title} textStyle={textStyle} h0 />
    </View>
  )
}

export { SearchHeader }
