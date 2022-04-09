import React from 'react'
import { SafeAreaView } from 'react-native'
import { ExampleDropDown, ExampleForm } from './src/components'
const App = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <ExampleDropDown />
      {/*<ExampleForm />*/}
    </SafeAreaView>
  )
}

export default App
