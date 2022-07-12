import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '../../index'
import { TitleButton } from '../buttons/TitleButton'
import { WHITE } from '../../../constants'

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row'
  },
  textStyle: {
    color: WHITE
  },
  counterNumberStyle: {
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16
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
