import React from 'react'
import { ScrollView } from 'react-native'
import { black_c, white_c } from './src/constants'
import { ExampleDropDown, ExampleForm, ExampleRange, ExampleRating, Text } from './src/components'
const App = () => {

  return (
    <ScrollView style={{backgroundColor: black_c}}>
      <Text textStyle={'title1'} style={{color: white_c,
        paddingBottom: 10}}>Buttons</Text>
      <ExampleRating />
      <ExampleForm />
      <ExampleDropDown />
      <ExampleRange />
    </ScrollView>
  )
}

export default App
