import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PopUp } from './components'
import { Home } from './UI'
import { SuccessScreen, SignUpScreen, LoginScreen, PasswordScreen, FiltersListScreen, MyProfileScreen } from './screens'

const Stack = createNativeStackNavigator()

function Navigation1() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          component={PopUp}
          name={'POPUP'}
          options={{ presentation: 'transparentModal', animation: 'fade' }}
        />
        <Stack.Screen component={Home} name={'HomeScreen'} />
        <Stack.Screen component={SuccessScreen} name={'SuccessScreen'} options={{ animation: 'fade' }} />
        <Stack.Screen component={SignUpScreen} name={'SignUpScreen'} options={{ animation: 'fade' }} />
        <Stack.Screen component={LoginScreen} name={'LoginScreen'} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen component={PasswordScreen} name={'PasswordScreen'} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen component={FiltersListScreen} name={'FiltersListScreen'} options={{ animation: 'fade' }} />
        <Stack.Screen component={MyProfileScreen} name={'MyProfileScreen'} options={{ animation: 'fade' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { Navigation1 }
