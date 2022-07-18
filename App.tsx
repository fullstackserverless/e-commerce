import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Navigation } from './src/Navigation'
import { Navigation1 } from './src/index'

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation1 />
    </SafeAreaProvider>
  )
}

export default App
