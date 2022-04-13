import React from 'react'
import { ScrollView, Text as RNText } from 'react-native'
import { BLACK, WHITE } from './src/constants'
import { ExampleDropDown, ExampleForm, ExampleRange, ExampleRating, SearchExample, Text } from './src/components'

const App = () => {

  return (
    <ScrollView style={{ backgroundColor: BLACK }}>
      <Text textStyle={'title1'} style={{
        color: WHITE,
        paddingBottom: 10
      }}>Buttons</Text>
      <RNText>Buttons</RNText>
      <ExampleRating />
      <ExampleForm />
      <ExampleDropDown />
      <ExampleRange />
      <SearchExample />
    </ScrollView>
  )
}

export default App
