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
function Counter() {
  const { counterContainer, textStyle, counterNumberStyle } = styles

  const [count, setCount] = useState(0)
  return (
    <View>
      <View style={counterContainer}>
        <TitleButton title="-" onPress={() => setCount(count => (count ? count - 1 : count + 0))} />
        <View style={counterNumberStyle}>
          <Text title={count.toString()} h2 textStyle={textStyle} />
        </View>
        <TitleButton title="+" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  )
}

export { Counter }
