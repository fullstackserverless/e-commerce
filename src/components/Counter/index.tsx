import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '../index'
import { TitleButton } from '../index'
import { WHITE } from '../../constants'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row'
  },
  textStyle: {
    color: WHITE
  },
  counterNumberStyle: {
    justifyContent: 'center',
    marginLeft: vs(14),
    marginRight: vs(14)
  }
})

interface CounterT {
  onPressMinus: () => void
  onPressPlus: () => void
  count: string
}
function Counter({ onPressMinus, onPressPlus, count }: CounterT) {
  const { counterContainer, textStyle, counterNumberStyle } = styles

  // const [count, setCount] = useState(0)
  return (
    <View>
      <View style={counterContainer}>
        <TitleButton title="-" onPress={onPressMinus} />
        {/* () => setCount(count => (count ? count - 1 : count + 0)) */}
        <View style={counterNumberStyle}>
          <Text title={count} h2 textStyle={textStyle} />
        </View>
        <TitleButton title="+" onPress={onPressPlus} />
        {/* () => setCount(count + 1) */}
      </View>
    </View>
  )
}

export { Counter }
