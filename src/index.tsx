import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PopUp } from './components'
import { Home } from './UI'
import { SuccessScreen } from './screens'

const Stack = createNativeStackNavigator()

function Navigation1() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen
          component={PopUp}
          name={'POPUP'}
          options={{ presentation: 'transparentModal', animation: 'fade' }}
        /> */}
        <Stack.Screen component={Home} name={'HomeScreen'} />
        <Stack.Screen component={SuccessScreen} name={'SuccessScreen'} options={{ animation: 'fade' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { Navigation1 }
