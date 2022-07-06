import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PopUp } from './components'
import { Home } from './UI'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen
          component={PopUp}
          name={'POPUP'}
          options={{ presentation: 'transparentModal', animation: 'fade' }}
        /> */}
        <Stack.Screen component={Home} name={'HomeScreen'} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
