import React, { useEffect } from 'react'
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootStackParamList, RootTabParamList } from './types'
import { Header, TabBar } from './components'
import {
  ExamplesScreen,
  HomeScreen,
  BagScreen,
  ProfileScreen,
  FavoritesScreen,
  ShopScreen,
  SuccessScreen
} from './screens'
import { BLACK, GRAY } from './constants'
import SystemNavigationBar from 'react-native-system-navigation-bar'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Navigation: React.FC<{}> = () => {
  useEffect(() => {
    SystemNavigationBar.setNavigationColor(BLACK, true)
  }, [])

  return (
    <NavigationContainer>
      {/* When you change "initialRouteName", 
        change the "initialScreenProp" in the headerHelper */}
      <Stack.Navigator
        screenOptions={({ route }) => {
          return {
            // Do not touch when replacing the initial screen
            title: getFocusedRouteNameFromRoute(route),
            header: props => <Header {...props} />
          }
        }}
      >
        <Stack.Screen name="MAIN" component={TabNav} options={{ animation: 'none' }} />
        <Stack.Screen name="EXAMPLES" component={ExamplesScreen} />
        {/* <Stack.Screen name="SUCCESS" component={SuccessScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const TabNavigator = createMaterialTopTabNavigator<RootTabParamList>()

interface Itab {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MAIN'>
}

const TabNav: React.FC<Itab> = () => {
  return (
    <TabNavigator.Navigator
      initialRouteName="TAB_SHOP"
      backBehavior="history"
      tabBar={props => <TabBar {...props} />}
      tabBarPosition="bottom"
      screenOptions={{
        swipeEnabled: false
      }}
    >
      <TabNavigator.Screen name="TAB_HOME" component={HomeScreen} />
      <TabNavigator.Screen name="TAB_SHOP" component={ShopScreen} />
      <TabNavigator.Screen name="TAB_BAG" component={BagScreen} />
      <TabNavigator.Screen name="TAB_FAVORITES" component={FavoritesScreen} />
      <TabNavigator.Screen name="TAB_PROFILE" component={ProfileScreen} />
    </TabNavigator.Navigator>
  )
}
