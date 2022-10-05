import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { vs } from 'react-native-size-matters'
import { Button, Space, Text } from '../../components'
import { BLACK } from '../../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  safeAreaViewContainer: {
    backgroundColor: BLACK
  }
})

const data = [
  { id: 0, count: 0 },
  { id: 1, count: 0 }
]

function TestScreen() {
  const { container, safeAreaViewContainer } = styles
  const [value, setValue] = useState(data)

  //   const increment = () => {
  //     data.map((id, count) => setValue()
  // )
  console.log(value)
  return (
    <SafeAreaView style={safeAreaViewContainer}>
      <View style={container}>
        <Space height={vs(60)} />
        {data.map(({ id, count }) => {
          return (
            <View>
              <Button onPress={() => {}} isSmall={false} isOutline={false} title={'+1'} />
              <Space height={vs(60)} />
              <Text h0 title={count.toString()} key={id} />
              <Space height={vs(60)} />
              <Button onPress={() => count - 1} isSmall={false} isOutline={false} title={'-1'} />
              <Space height={vs(60)} />
            </View>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

export { TestScreen }
