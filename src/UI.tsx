import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { BLACK, WHITE } from './constants'
import { Space, Text, ReviewCard } from './components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLACK
  },
  textStyle: {
    color: WHITE
  }
})

interface HomeT {
  navigation: any
  route: any
}

function Home({ navigation, route }: HomeT) {
  const { container, textStyle } = styles
  const [isEnabled, setIsEnabled] = useState(false)
  const [redCheckBoxValue, setRedCheckBoxValue] = useState(false)
  const [whiteCheckBoxValue, setWhiteCheckBoxValue] = useState(false)
  const { navigate } = navigation

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  const toggleRedCheckBox = () => setRedCheckBoxValue(redCheckBoxValue => !redCheckBoxValue)
  const toggleWhiteCheckBox = () => setWhiteCheckBoxValue(whiteCheckBoxValue => !whiteCheckBoxValue)
  const openPopUp = () => navigate('POPUP')

  return (
    <View style={container}>
      <Text title="ReviewCard" h0 />
      <Space height={15} />
      <ReviewCard />
    </View>
  )
}

export { Home }
