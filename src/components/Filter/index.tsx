import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Text } from '../index'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { DARK, WHITE } from '../../constants'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: vs(28),
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: DARK,
    alignItems: 'center'
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  textStyle: {
    color: WHITE,
    paddingLeft: vs(3)
  },
  iconStyle: {
    color: WHITE,
    fontSize: vs(22)
  }
})

interface FilterT {
  onPressFilter: () => void
  onPressPrice: () => void
  onPressApps: () => void
}

function Filter({ onPressFilter, onPressPrice, onPressApps }: FilterT) {
  const { container, view1, view2, textStyle, iconStyle } = styles

  return (
    <View style={container}>
      <Pressable onPress={onPressFilter} style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}>
        <View style={view1}>
          <IonIcons name="filter" style={iconStyle} />
          <Text title="Filters" textStyle={textStyle} h4 />
        </View>
      </Pressable>
      <Pressable onPress={onPressPrice} style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}>
        <View style={view2}>
          <IonIcons name="swap-vertical" style={iconStyle} />
          <Text title="Price: lowest to high" textStyle={textStyle} h4 />
        </View>
      </Pressable>
      <Pressable onPress={onPressApps} style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}>
        <IonIcons name="apps" style={iconStyle} />
      </Pressable>
    </View>
  )
}

export { Filter }
